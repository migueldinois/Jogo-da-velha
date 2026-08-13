# 🎮 Tic-Tac-Toe (Jogo da Velha) em React

Um projeto clássico de **Jogo da Velha (Tic-Tac-Toe)** construído com **React**, focado na prática e refatoração de conceitos fundamentais como gerenciamento de estado, imutabilidade, elevação de estado (*lifting state up*) e viagem no tempo (*time travel/histórico de jogadas*).

---

## 📌 Sobre o Projeto

Este projeto é uma implementação interativa do jogo da velha. Ele permite que dois jogadores joguem alternadamente em turnos (`X` e `O`), detecta automaticamente quando há um vencedor ou empate e fornece um histórico interativo que permite navegar por jogadas passadas.

### 🎯 Objetivo

O objetivo principal deste projeto é estudar e aplicar conceitos essenciais do React, tais como:
* **Componentização:** Divisão da interface em partes reaproveitáveis (`Square`, `Board`, `Game`).
* **Gerenciamento de Estado (`useState`):** Controle dinâmico do estado do tabuleiro e do histórico.
* **Imutabilidade:** Atualização do estado gerando novas cópias dos arrays em vez de alterar os existentes diretamente.
* **Lifting State Up:** Centralização do estado no componente pai (`Game`) para coordenar os componentes filhos (`Board` e `Square`).

---

## 🚀 Funcionalidades

- [x] Alternância automática de turnos entre os jogadores **X** e **O**.
- [x] Detecção automática de vencedor com base nas combinações possíveis do tabuleiro.
- [x] Bloqueio de cliques em casas já preenchidas ou após o término da partida.
- [x] **Histórico de Jogadas (Time Travel):** Possibilidade de voltar a qualquer momento do jogo para revisar ou refazer jogadas.

---

## 🛠️ Tecnologias Utilizadas

* [React](https://react.dev/) — Biblioteca JavaScript para construir interfaces de usuário.
* [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — Lógica do jogo e manipulação do estado.
* [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) — Estilização do tabuleiro e dos elementos do jogo.

---

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a aplicação na sua máquina:

### **Pré-requisitos**

Você precisa ter o [Node.js](https://nodejs.org/) instalado em seu computador (que já vem com o `npm`).

### **Passo a Passo**

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/migueldinois/Jogo-da-velha
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Jogo-da-velha
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse o endereço indicado no terminal (geralmente `http://localhost:5173` ou `http://localhost:3000`).

---

## 📐 Estrutura do Código

* `Square`: Componente funcional simples para renderizar cada célula do tabuleiro.
* `Board`: Renderiza a grade 3x3 e gerencia os cliques de cada quadrado.
* `Game`: Componente principal que mantém o estado global do histórico de jogadas, decide o jogador atual e permite o deslocamento no tempo.
* `calculateWinner`: Função utilitária que percorre as 8 combinações de vitória possíveis para determinar se há um campeão.