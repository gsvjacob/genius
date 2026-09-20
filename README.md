# 🎮 Genius (V2)

Uma recriação do clássico jogo **Genius (Simon)** desenvolvida com **HTML, CSS e JavaScript**, com uma interface inspirada em máquinas de arcade retrô.

A **V2** amplia a primeira versão do projeto com um sistema de ranking online, efeitos sonoros, novas telas e diversos ajustes de interface e experiência de uso.

---

## 🕹️ Sobre o jogo

O objetivo do Genius é memorizar e repetir corretamente a sequência de cores apresentada pelo jogo.

A cada rodada, uma nova cor é adicionada à sequência. O jogador precisa reproduzir a sequência na ordem correta. Ao errar, a partida é encerrada e a pontuação pode ser registrada no ranking.

---

## ✨ Novidades da V2

### 🏆 Ranking online

A V2 adiciona um sistema de **ranking online utilizando Supabase**.

Agora é possível:

- Registrar a pontuação após o fim de uma partida;
- Informar um nome de até 3 caracteres;
- Consultar as pontuações diretamente pelo jogo;
- Ordenar as pontuações da maior para a menor;
- Exibir as melhores pontuações em uma lista;
- Manter os dados armazenados online, permitindo que o ranking seja compartilhado entre diferentes acessos ao jogo.

O projeto utiliza o **Supabase como banco de dados**, sem a necessidade de desenvolver um servidor próprio para o ranking.

### 🔊 Sons e efeitos

Foram adicionados arquivos de áudio para tornar a experiência mais próxima de um jogo de arcade.

A V2 possui sons para:

- Botões;
- Cores da sequência;
- Acerto;
- Erro;
- Início da partida;
- Música de fundo.

Também foi adicionada uma configuração para ativar ou desativar a música e controlar seu volume.

### 🎨 Nova interface

A interface recebeu uma reformulação com uma estética **retrô/arcade**, incluindo:

- Efeito visual de tela CRT;
- Gradientes e sombras;
- Indicador visual de acerto e erro;
- Botões com animações ao serem pressionados;
- Ícones para as funcionalidades do jogo;
- Tela de ranking;
- Tela de configurações;
- Tela para registro da pontuação;
- Elementos adaptados para diferentes tamanhos de tela.

### 🖥️ Responsividade e ajustes de Front-End

Também foram realizados diversos pequenos ajustes para melhorar a apresentação e o funcionamento do jogo, incluindo:

- Adaptação da disposição dos elementos para telas menores;
- Ajustes de tamanho e espaçamento;
- Correções de alinhamento;
- Melhorias nos modais;
- Ajustes na exibição do ranking;
- Definição de tamanhos para as colunas do ranking, evitando deslocamentos quando a posição passa de `9º` para `10º`;
- Ajustes em controles e elementos da interface;
- Pequenas correções e melhorias na experiência de interação.

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
Estrutura da página, elementos do jogo, modais, controles e carregamento dos arquivos externos.

**`style.css`**  
Responsável pela aparência do jogo, incluindo a interface retrô, responsividade, animações e estilização dos modais.

**`script.js`**  
Contém a lógica do jogo, geração das sequências, validação das respostas, pontuação, reprodução dos sons, configurações e integração com o Supabase.

**`audios/`**  
Armazena os efeitos sonoros e a música de fundo utilizados pelo jogo.

**`images/`**  
Armazena os elementos gráficos utilizados na interface.

---

## 🗄️ Banco de dados

O ranking utiliza o **Supabase** para armazenar as informações das pontuações.

A tabela utilizada possui os seguintes campos:

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | `int8` | Identificador do registro |
| `nome` | `text` | Nome de até 3 caracteres |
| `pontuacao` | `int4` | Pontuação obtida na partida |

O acesso ao banco é realizado diretamente pelo JavaScript através da biblioteca do Supabase.

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Supabase**
- **Google Fonts**
- **Material Icons**

O projeto não possui um servidor próprio para a aplicação do jogo. A persistência do ranking é realizada através do Supabase.

---

## 🤖 Uso de Inteligência Artificial

Durante o desenvolvimento da V2, a Inteligência Artificial foi utilizada como **ferramenta de auxílio e direcionamento do projeto**, principalmente para:

- Esclarecer conceitos de programação;
- Identificar possíveis causas de erros;
- Sugerir abordagens para determinadas funcionalidades;
- Auxiliar na compreensão de tecnologias e recursos utilizados;
- Orientar na organização e evolução do projeto;
- Ajudar na resolução de problemas específicos durante o desenvolvimento.

A IA **não foi utilizada para criar o projeto completo ou gerar os códigos integralmente de forma automática**. A implementação foi desenvolvida pelo autor, utilizando as orientações recebidas como apoio para compreender os conceitos, tomar decisões e corrigir problemas durante o processo.

Dessa forma, o desenvolvimento da V2 também teve como objetivo utilizar a IA como uma ferramenta de aprendizado e suporte, mantendo a participação do desenvolvedor na elaboração, implementação e compreensão do código.

---

## 📌 Versões

### V1
Primeira versão do jogo, contendo a implementação inicial da mecânica do Genius e sua interface.

### V2
Versão com:

- Ranking online;
- Integração com Supabase;
- Efeitos sonoros;
- Música de fundo;
- Configurações de áudio;
- Nova interface retrô;
- Novos modais;
- Melhorias de responsividade;
- Ajustes de Front-End;
- Melhorias gerais na experiência do usuário.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como parte do processo de aprendizado e prática de desenvolvimento Web, utilizando tecnologias de Front-End e integração com um serviço de banco de dados online.
