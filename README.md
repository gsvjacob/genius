# 🎮 Genius

Uma recriação do clássico jogo **Genius (Simon)** desenvolvida com **HTML, CSS e JavaScript**, com uma interface inspirada em máquinas de arcade retrô.

A **V3** dá continuidade às funcionalidades da V2, adicionando diferentes níveis de dificuldade, rankings separados por dificuldade e uma identidade visual que acompanha o nível selecionado.

Acesso ao Jogo: [Genius](https://gsvjacob.github.io/genius/)

---

## 🕹️ Sobre o jogo

O objetivo do Genius é memorizar e repetir corretamente a sequência de cores apresentada pelo jogo.

A cada rodada, novas cores são adicionadas à sequência. O jogador precisa reproduzir a sequência na ordem correta. Ao errar, a partida é encerrada e a pontuação pode ser registrada no ranking correspondente à dificuldade utilizada.

---

## ✨ Novidades da V3

### 🎚️ Sistema de dificuldades

A V3 adiciona quatro níveis de dificuldade selecionáveis nas configurações:

- **Normal** — adiciona 1 cor por rodada;
- **Difícil** — adiciona 2 cores por rodada;
- **Muito Difícil** — adiciona 3 cores por rodada;
- **Impossível** — utiliza 3 novas cores por rodada e apresenta a sequência em uma velocidade muito maior.

A quantidade de cores adicionadas é controlada por funções específicas para cada nível.

### 🎨 Interface adaptada à dificuldade

A cor principal da interface passa a acompanhar a dificuldade selecionada.

Cada nível possui uma identidade visual própria:

- **Normal** → amarelo;
- **Difícil** → azul;
- **Muito Difícil** → vermelho;
- **Impossível** → roxo.

Além da cor principal, foram criadas variáveis CSS para controlar cores secundárias, como bordas e controles, permitindo que esses elementos também acompanhem a dificuldade.

O uso de **CSS Variables (`var(...)`)** permite alterar a aparência da interface dinamicamente através do JavaScript.

### 🏆 Rankings separados por dificuldade

A V3 passa a utilizar rankings diferentes para cada nível de dificuldade.

Cada pontuação é armazenada na tabela correspondente:

- `ranking` — Normal;
- `ranking_dificil` — Difícil;
- `ranking_muito_dificil` — Muito Difícil;
- `ranking_impossivel` — Impossível.

O JavaScript identifica a dificuldade selecionada e utiliza a tabela correspondente tanto para consultar quanto para inserir as pontuações.

Os rankings continuam utilizando o **Supabase** como banco de dados online.

### 🥇 Destaque para o Top 3

As três primeiras posições do ranking recebem estilos próprios para diferenciá-las das demais posições:

- **Top 1**;
- **Top 2**;
- **Top 3**.

Os estilos são aplicados dinamicamente pelo JavaScript de acordo com a posição do jogador.

### 🔊 Sons e música

Os recursos de áudio desenvolvidos na V2 continuam presentes na V3, incluindo:

- Som de início da partida;
- Som dos botões;
- Som das cores;
- Som de acerto;
- Som de erro;
- Música de fundo;
- Controle de volume;
- Ativação e desativação da música.

### 🖥️ Ajustes de Front-End

Também foram realizados pequenos ajustes para melhorar a interface e a experiência de uso, incluindo:

- Uso de variáveis CSS para centralizar as cores da interface;
- Ajustes nas cores das bordas e controles;
- Melhorias no `<select>` de dificuldade;
- Diferenciação visual das opções de dificuldade;
- Ajustes na apresentação do ranking;
- Manutenção da responsividade;
- Continuidade da estética retrô/arcade.

---

## 📁 Estrutura do projeto

```text
Genius/
│
├── audios/
│   ├── background.mp3
│   ├── buttonClick.wav
│   ├── color.wav
│   ├── correct.wav
│   ├── error.wav
│   └── play.wav
│
├── images/
│   ├── config.png
│   ├── indicador.png
│   ├── play.png
│   └── trophy.png
│
├── index.html
├── README.md
├── script.js
└── style.css
```

### Principais arquivos

**`index.html`**  
Contém a estrutura da aplicação, os elementos do jogo, configurações, modais, seleção de dificuldade e carregamento dos recursos externos.

**`style.css`**  
Responsável pela aparência da aplicação, incluindo a interface retrô, responsividade, modais, ranking e variáveis de cor utilizadas pela interface.

**`script.js`**  
Contém a lógica do jogo, geração das sequências, validação das respostas, níveis de dificuldade, pontuação, sons, configurações e integração com o Supabase.

**`audios/`**  
Armazena os efeitos sonoros e a música de fundo utilizados pelo jogo.

**`images/`**  
Armazena os elementos gráficos utilizados na interface.

---

## 🗄️ Banco de dados

O ranking utiliza o **Supabase** para armazenar as pontuações.

A V3 utiliza tabelas diferentes de acordo com a dificuldade escolhida. Todas possuem a estrutura básica de identificação, nome do jogador e pontuação.

O JavaScript seleciona a tabela correspondente antes de realizar operações de leitura ou inserção.

O acesso público às tabelas é controlado através do **Row Level Security (RLS)** e de políticas específicas para as operações necessárias ao jogo.

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Supabase**
- **Google Fonts**
- **Material Icons**

O projeto utiliza o Supabase como serviço de banco de dados online para os rankings.

---

## 🤖 Uso de Inteligência Artificial

Durante o desenvolvimento da V3, a Inteligência Artificial foi utilizada como **ferramenta de auxílio, aprendizado e direcionamento do projeto**.

A IA foi utilizada principalmente para:

- Esclarecer conceitos de programação;
- Ajudar a identificar e compreender erros;
- Sugerir possíveis abordagens para novas funcionalidades;
- Orientar a organização e evolução do código;
- Auxiliar na resolução de problemas específicos durante o desenvolvimento;
- Explicar conceitos relacionados a JavaScript, CSS, Git e Supabase.

A IA **não foi utilizada para criar o projeto completo ou gerar os códigos integralmente de forma automática**. A implementação das funcionalidades foi realizada pelo autor, utilizando as orientações como apoio para compreender os conceitos, testar possibilidades, tomar decisões e corrigir problemas.

Dessa forma, a Inteligência Artificial foi utilizada como uma ferramenta de suporte ao desenvolvimento e ao aprendizado, mantendo a participação do desenvolvedor na elaboração, implementação e compreensão do projeto.

---

## 📌 Histórico das versões

### V1
Primeira versão do jogo, com a implementação inicial da mecânica do Genius e sua interface.

### V2
Versão que adicionou:

- Ranking online;
- Integração com Supabase;
- Efeitos sonoros;
- Música de fundo;
- Configurações de áudio;
- Nova interface retrô;
- Novos modais;
- Melhorias de responsividade;
- Ajustes de Front-End.

### V3
Versão que adicionou:

- Quatro níveis de dificuldade;
- Progressão diferente de sequência para cada dificuldade;
- Modo Impossível com reprodução mais rápida;
- Rankings separados por dificuldade;
- Alteração dinâmica das cores da interface;
- Variáveis CSS para cores principais, bordas e controles;
- Destaque visual para Top 1, Top 2 e Top 3;
- Novos ajustes no Front-End.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como parte do processo de aprendizado e prática de desenvolvimento Web, utilizando tecnologias de Front-End, manipulação do DOM, controle de versões com Git e integração com um serviço de banco de dados online.
