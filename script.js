/* ==================== BANCO DE DADOS (SUPABASE) ==================== */

const supabaseUrl = "https://izpvrcqjbzuxfykczkej.supabase.co";
const supabaseKey = "sb_publishable_Abn-URkWKbRISYflxOXH3w_IOdi9jpB";

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

/* ==================== VARIÁVEIS DO JOGO ==================== */

let sequencia = [];

let cores = ["R", "B", "Y", "G"];

let jogando = false;

let posicaoJogador = 0;

let pontuacao = 0;

let ultimaPontuacao = 0;

/* ==================== ELEMENTOS DO JOGO ==================== */

let textDisplay = document.getElementById("textDisplay");

let TextoPontuacao = document.getElementById("pontuacao");

let indicador = document.getElementById("indicador");

let botaoPlay = document.querySelector(".play");

/* ==================== ELEMENTOS DO RANKING ==================== */

let botaoRanking = document.getElementById("ranking");

let botaoFecharRanking = document.getElementById("fecharRanking");

let fecharRegistroRanking = document.getElementById("fecharRegistroRanking");

let salvarRanking = document.getElementById("salvarRanking");

let aviso = document.getElementById("avisoNome");

/* ==================== ELEMENTOS DAS CONFIGS ==================== */

let botaoConfig = document.getElementById("config");

let botaoFecharConfig = document.getElementById("fecharConfig");

let crt = document.getElementById("crtID");

let efeito = document.querySelector(".crt");

let musica = document.getElementById("musicaID");

let backgroundMusic = document.getElementById("backgroundMusic");

let volumeMusica = document.getElementById("volumeMusicaID");

let linhaVolumeMusica = document.getElementById("linhaVolume");

let dificuldade = document.getElementById("dificuldadeID")

/* ==================== ELEMENTOS DE SOM ==================== */

let somPlay = document.getElementById("somPlay");

let somClick = document.getElementById("somClick");

let somCerto = document.getElementById("somCerto");

let somErrado = document.getElementById("somErrado");

let somCor = document.getElementById("somCor");

botaoPlay.addEventListener("click", () => {
  somPlay.volume = 0.3;
  somPlay.play();
  if (musica.checked) {
    backgroundMusic.play();
  }
});

document.querySelector(".btnRed").addEventListener("click", tocarSomClick);
document.querySelector(".btnBlue").addEventListener("click", tocarSomClick);
document.querySelector(".btnYellow").addEventListener("click", tocarSomClick);
document.querySelector(".btnGreen").addEventListener("click", tocarSomClick);

/* ==================== ELEMENTOS DO NOME ==================== */

let letra1 = document.getElementById("letra1");

let letra2 = document.getElementById("letra2");

let letra3 = document.getElementById("letra3");

/* ==================== EVENTOS DOS BOTÕES ==================== */

botaoPlay.addEventListener("click", iniciarJogo);

botaoRanking.addEventListener("click", abrirRanking);

botaoFecharRanking.addEventListener("click", fecharRank);

fecharRegistroRanking.addEventListener("click", fecharRegistroRank);

botaoConfig.addEventListener("click", abrirConfig);

botaoFecharConfig.addEventListener("click", fecharConfig);

salvarRanking.addEventListener("click", pegarNome);

crt.addEventListener("change", desligarCrt);

musica.addEventListener("change", desligarMusica);

volumeMusica.addEventListener("change", alterarVolumeMusica);

/* ==================== SORTEIO DA SEQUÊNCIA ==================== */

function sortearCor() {
  let idNovaCor = Math.random() * 4;

  idNovaCor = Math.floor(idNovaCor);

  let novaCor = cores[idNovaCor];

  sequencia.push(novaCor);
}

/* ==================== SORTEIO DA SEQUÊNCIA (OUTRAS DIFICULDADES) ==================== */

function sortearCorDificil() {
  for (let i = 0; i < 2; i++) {

    let idNovaCor = Math.random() * 4;

    idNovaCor = Math.floor(idNovaCor);

    let novaCor = cores[idNovaCor];

    sequencia.push(novaCor);
  }
}

function sortearCorMuitoDificil() {
  for (let i = 0; i < 5; i++) {

    let idNovaCor = Math.random() * 4;

    idNovaCor = Math.floor(idNovaCor);

    let novaCor = cores[idNovaCor];

    sequencia.push(novaCor);
  }
}

/* ==================== VALIDAÇÃO DA JOGADA ==================== */

function validarAcerto(corClicada) {
  let corCerta = sequencia[posicaoJogador];

  if (jogando) {
    if (corClicada == corCerta) {
      posicaoJogador++;

      if (posicaoJogador == sequencia.length) {
        pontuacao += 1;
        animacaoAcerto();
      }
    } else {
      ultimaPontuacao = pontuacao;
      animacaoErro();
      posicaoJogador = 0;
      pontuacao = 0;
      jogando = false;
      abrirRegistroRanking();
    }
  }
}

/* ==================== EXIBIÇÃO DA SEQUÊNCIA ==================== */

function percorrerSequencia(i = 0) {
  jogando = false;
  textDisplay.innerHTML = "Observe a sequência...";
  textDisplay.style.fontSize = "3.5vmin";

  let btnRed = document.querySelector(".btnRed");
  let btnBlue = document.querySelector(".btnBlue");
  let btnYellow = document.querySelector(".btnYellow");
  let btnGreen = document.querySelector(".btnGreen");

  btnRed.style.cursor = "no-drop";
  btnBlue.style.cursor = "no-drop";
  btnYellow.style.cursor = "no-drop";
  btnGreen.style.cursor = "no-drop";

  btnRed.classList.add("btnRedActive");
  btnBlue.classList.add("btnBlueActive");
  btnYellow.classList.add("btnYellowActive");
  btnGreen.classList.add("btnGreenActive");

  if (i >= sequencia.length) {
    jogando = true;

    btnRed.classList.remove("btnRedActive");
    btnBlue.classList.remove("btnBlueActive");
    btnYellow.classList.remove("btnYellowActive");
    btnGreen.classList.remove("btnGreenActive");

    btnRed.style.cursor = "pointer";
    btnBlue.style.cursor = "pointer";
    btnYellow.style.cursor = "pointer";
    btnGreen.style.cursor = "pointer";

    textDisplay.style.fontSize = "5vmin";
    textDisplay.innerHTML = "Sua vez!";
    return;
  }

  if (sequencia[i] == "R") {
    indicador.style.backgroundColor = "#eb0c0c";
  } else if (sequencia[i] == "B") {
    indicador.style.backgroundColor = "#0c40eb";
  } else if (sequencia[i] == "Y") {
    indicador.style.backgroundColor = "#f0c505";
  } else if (sequencia[i] == "G") {
    indicador.style.backgroundColor = "#40eb0c";
  }

  setTimeout(() => {
    indicador.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    setTimeout(() => {
      percorrerSequencia(i + 1);
    }, 200);
  }, 500);
}

/* ==================== EXIBIÇÃO DA SEQUÊNCIA (IMPOSSIVEL) ==================== */

function percorrerSequenciaImpossivel(i = 0) {
  jogando = false;
  textDisplay.innerHTML = "Observe a sequência...";
  textDisplay.style.fontSize = "3.5vmin";

  let btnRed = document.querySelector(".btnRed");
  let btnBlue = document.querySelector(".btnBlue");
  let btnYellow = document.querySelector(".btnYellow");
  let btnGreen = document.querySelector(".btnGreen");

  btnRed.style.cursor = "no-drop";
  btnBlue.style.cursor = "no-drop";
  btnYellow.style.cursor = "no-drop";
  btnGreen.style.cursor = "no-drop";

  btnRed.classList.add("btnRedActive");
  btnBlue.classList.add("btnBlueActive");
  btnYellow.classList.add("btnYellowActive");
  btnGreen.classList.add("btnGreenActive");

  if (i >= sequencia.length) {
    jogando = true;

    btnRed.classList.remove("btnRedActive");
    btnBlue.classList.remove("btnBlueActive");
    btnYellow.classList.remove("btnYellowActive");
    btnGreen.classList.remove("btnGreenActive");

    btnRed.style.cursor = "pointer";
    btnBlue.style.cursor = "pointer";
    btnYellow.style.cursor = "pointer";
    btnGreen.style.cursor = "pointer";

    textDisplay.style.fontSize = "5vmin";
    textDisplay.innerHTML = "Sua vez!";
    return;
  }

  if (sequencia[i] == "R") {
    indicador.style.backgroundColor = "#eb0c0c";
  } else if (sequencia[i] == "B") {
    indicador.style.backgroundColor = "#0c40eb";
  } else if (sequencia[i] == "Y") {
    indicador.style.backgroundColor = "#f0c505";
  } else if (sequencia[i] == "G") {
    indicador.style.backgroundColor = "#40eb0c";
  }

  setTimeout(() => {
    indicador.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    setTimeout(() => {
      percorrerSequenciaImpossivel(i + 1);
    }, 200);
  }, 50);
}

/* ==================== INICIAR JOGO ==================== */

function iniciarJogo() {
  textDisplay.innerHTML = `PTS: ${pontuacao}`;

  sequencia = [];
  jogando = false;
  posicaoJogador = 0;
  pontuacao = 0;

  if (dificuldade.value === "normal") {
    sortearCor();
    percorrerSequencia();
  } else if (dificuldade.value === "dificil") {
    sortearCorDificil();
    percorrerSequencia();
  } else if (dificuldade.value === "muitoDificil") {
    sortearCorMuitoDificil();
    percorrerSequencia();
  } else if (dificuldade.value === "impossivel") {
    sortearCorMuitoDificil();
    percorrerSequenciaImpossivel();
  }

}

/* ==================== ANIMAÇÃO DE ACERTO ==================== */

function animacaoAcerto() {
  textDisplay.innerHTML = "Correto!";
  somCerto.volume = 0.3;
  somCerto.play();

  let iconeAcerto = document.getElementById("iconeAcerto");

  for (let i = 0; i <= 3; i++) {
    textDisplay.innerHTML = `PTS: ${pontuacao}`;

    setTimeout(() => {
      iconeAcerto.style.display = "block";
      indicador.style.backgroundColor = "#40eb0c";
    }, i * 200);

    setTimeout(
      () => {
        iconeAcerto.style.display = "none";
        indicador.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        if (i == 3) {
          if (dificuldade.value === "normal") {
            sortearCor();
            posicaoJogador = 0;

            setTimeout(() => {
              percorrerSequencia();
            }, 500);
          } else if (dificuldade.value === "dificil") {
            sortearCorDificil();
            posicaoJogador = 0;

            setTimeout(() => {
              percorrerSequencia();
            }, 500);
          } else if (dificuldade.value === "muitoDificil") {
            sortearCorMuitoDificil();
            posicaoJogador = 0;

            setTimeout(() => {
              percorrerSequencia();
            }, 500);
          } else if (dificuldade.value === "impossivel") {
            sortearCorMuitoDificil();
            posicaoJogador = 0;

            setTimeout(() => {
              percorrerSequenciaImpossivel();
            }, 500);
          }
        }
      },
      i * 200 + 100,
    );
  }
}

/* ==================== ANIMAÇÃO DE ERRO ==================== */

function animacaoErro() {
  textDisplay.innerHTML = "Errado!";
  somErrado.volume = 0.3;
  somErrado.play();

  let iconeErro = document.getElementById("iconeErro");

  for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
      iconeErro.style.display = "block";
      indicador.style.backgroundColor = "#eb0c0c";
    }, i * 200);

    setTimeout(
      () => {
        iconeErro.style.display = "none";
        indicador.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      },
      i * 200 + 100,
    );
  }
}

/* ==================== RANKING ==================== */

function abrirRanking() {
  let modalRank = document.getElementById("fundoRank");

  modalRank.style.display = "flex";

  atualizarRanking();
}

function fecharRank() {
  let modalRank = document.getElementById("fundoRank");

  modalRank.style.display = "none";
}

async function atualizarRanking() {
  const { data, error } = await supabaseClient
    .from("ranking")
    .select("nome, pontuacao")
    .order("pontuacao", { ascending: false })
    .limit(10);

  let listaRanking = document.getElementById("listaRanking");

  listaRanking.innerHTML = "";

  if (error) {
    console.log(error);
    return;
  }

  for (let i = 0; i < data.length; i++) {
    listaRanking.innerHTML += `
      <div id="nomeRanking">
        <span class="${ i === 0 ? "top1" : i === 1 ? "top2" : i === 2 ? "top3" : "" }">${i + 1}º</span>
        <span class="${ i === 0 ? "top1" : i === 1 ? "top2" : i === 2 ? "top3" : "" }">${data[i].nome}</span>
        <span class="${ i === 0 ? "top1" : i === 1 ? "top2" : i === 2 ? "top3" : "" }">${data[i].pontuacao}</span>
      </div>
    `;
  }
}

/* ==================== CONFIG ==================== */

function abrirConfig() {
  let modalConfig = document.getElementById("fundoConfig");

  modalConfig.style.display = "flex";
}

function fecharConfig() {
  let modalConfig = document.getElementById("fundoConfig");

  modalConfig.style.display = "none";
}

/* ==================== CONFIG: DESLIGAR CRT ==================== */

function desligarCrt() {
  if (crt.checked === false) {
    efeito.classList.remove("crt");
  } else if (crt.checked === true) {
    efeito.classList.add("crt");
  }
}

/* ==================== CONFIG: DESLIGAR MÚSICA ==================== */

function desligarMusica() {
  if (musica.checked === false) {
    backgroundMusic.pause();
    linhaVolumeMusica.style.display = "none";
  } else if (musica.checked === true) {
    backgroundMusic.play();
    linhaVolumeMusica.style.display = "flex";
  }
}

/* ==================== CONFIG: VOLUME MÚSICA ==================== */

backgroundMusic.volume = 0.1;

function alterarVolumeMusica() {
  if (musica.checked === true) {
    backgroundMusic.volume = volumeMusica.value;
  } else if (musica.checked === false) {
    return;
  }
}

/* ==================== SOM CLICK ==================== */

function tocarSomClick() {
  somClick.currentTime = 0;
  somClick.volume = 0.3;
  somClick.play();
}

/* ==================== REGISTRO DA PONTUAÇÃO ==================== */

function abrirRegistroRanking() {
  let modalRank = document.getElementById("fundoRegistroRank");

  modalRank.style.display = "flex";
}

function fecharRegistroRank() {
  let modalRank = document.getElementById("fundoRegistroRank");

  modalRank.style.display = "none";
}

async function pegarNome() {
  let valorLetra1 = letra1.value;

  let valorLetra2 = letra2.value;

  let valorLetra3 = letra3.value;

  if (!valorLetra1 || !valorLetra2 || !valorLetra3) {
    aviso.style.display = "block";
  } else {
    let nome = valorLetra1 + valorLetra2 + valorLetra3;

    const { error } = await supabaseClient.from("ranking").insert({
      nome: nome,
      pontuacao: ultimaPontuacao,
    });

    if (error) {
      console.log(error);
      return;
    }

    letra1.value = "";
    letra2.value = "";
    letra3.value = "";
    aviso.style.display = "none";
    fecharRegistroRank();
  }
}

/* ==================== NAVEGAÇÃO ENTRE INPUTS ==================== */

letra1.addEventListener("input", () => {
  if (letra1.value) {
    letra2.focus();
  }
});

letra2.addEventListener("input", () => {
  if (letra2.value) {
    letra3.focus();
  }
});

/* ==================== VOLTAR COM BACKSPACE ==================== */

letra3.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && !letra3.value) {
    letra2.focus();
  }
});

letra2.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && !letra2.value) {
    letra1.focus();
  }
});

/* ==================== CONFIRMAR COM ENTER ==================== */

letra3.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    pegarNome();
  }
});
