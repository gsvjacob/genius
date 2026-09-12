# 🎮 Genius

Um jogo inspirado no clássico **Genius (Simon)**, desenvolvido com **HTML, CSS e JavaScript**, como projeto de aprendizado e prática de desenvolvimento web.

## 📌 Sobre o projeto

O objetivo do jogo é memorizar e repetir corretamente a sequência de cores apresentada.

A cada rodada, uma nova cor é adicionada à sequência. O jogador precisa repetir toda a sequência na ordem correta. Ao errar, a partida é encerrada e a pontuação pode ser registrada no ranking.

Esta é a **primeira versão (v1)** do projeto.

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Google Material Icons
* Google Fonts

## 🎯 Funcionalidades

* Geração aleatória da sequência de cores
* Exibição da sequência para o jogador
* Validação das respostas
* Sistema de pontuação
* Animação visual para acertos e erros
* Tela de registro de pontuação
* Cadastro de nome com 3 letras
* Avanço automático entre os campos do nome
* Retorno ao campo anterior utilizando `Backspace`
* Confirmação do nome utilizando `Enter`
* Ranking de pontuações
* Ordenação do ranking pela maior pontuação
* Interface responsiva para diferentes tamanhos de tela

## 🏆 Ranking

O ranking é armazenado atualmente no próprio JavaScript utilizando um array de objetos.

Cada registro possui:

```js
{
  nome: "ABC",
  pontuacao: 10
}
```

Nesta versão, os dados do ranking são armazenados apenas enquanto a página está aberta. Portanto, ao recarregar a página, o ranking é reiniciado.

Uma futura versão pode substituir esse sistema por um banco de dados ou algum outro método de armazenamento permanente.

## 📂 Estrutura do projeto

```text
Genius/
├── index.html
├── script.js
└── style.css
```

## 🤖 Uso de Inteligência Artificial

Durante o desenvolvimento, utilizei **Inteligência Artificial como ferramenta de apoio**, principalmente para:

* esclarecer dúvidas sobre JavaScript, HTML e CSS;
* explicar conceitos e funcionamento de determinadas funções;
* auxiliar na identificação de erros;
* sugerir formas de organizar e direcionar a implementação.

A IA **não teve como objetivo desenvolver o projeto inteiro automaticamente**. A implementação, testes, decisões de funcionamento e alterações no código foram realizadas e ajustadas por mim durante o desenvolvimento.

## 🚀 Próximas versões

Algumas melhorias que podem ser adicionadas futuramente:

* armazenamento permanente do ranking;
* sistema de banco de dados;
* efeitos sonoros;
* novas animações;
* melhorias na interface;
* sistema de níveis ou dificuldade;
* novas funcionalidades para o ranking.

## 📖 Objetivo

Este projeto foi desenvolvido principalmente para **praticar programação e aplicar conceitos aprendidos em HTML, CSS e JavaScript**, evoluindo o projeto gradualmente a partir de uma primeira versão funcional.

---

**Versão atual: v1.0**
