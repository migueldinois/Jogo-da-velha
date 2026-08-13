# 🎮 Jogo da Velha (Tic-Tac-Toe) em React

Este é um projeto clássico de **Jogo da Velha (Tic-Tac-Toe)** construído utilizando **React** e **CSS** [cite: 1, 2]. Ele possui uma funcionalidade de **histórico de jogadas (Time Travel)**, permitindo que os jogadores voltem a qualquer momento do jogo [cite: 1].

---

## 🚀 Funcionalidades

- **Alternância de Jogadores:** Suporte para dois jogadores (`X` e `O`) jogando alternadamente [cite: 1].
- **Detecção de Vitórias:** Identifica automaticamente se houve um vencedor (linhas, colunas e diagonais) e exibe o status atual [cite: 1].
- **Histórico de Jogadas (Time Travel):** Mantém o registro de todas as jogadas efetuadas e permite retornar a estados anteriores da partida com apenas um clique [cite: 1].
- **Estilização com CSS:** Interface simples e organizada com suporte a CSS Modules/Global CSS [cite: 1, 2].

---

## 📁 Estrutura de Componentes

O código é dividido nos seguintes componentes principais [cite: 1]:

- `Square`: Representa um único quadrado/casa do tabuleiro [cite: 1].
- `Board`: Renderiza o tabuleiro completo (3x3), controla o clique nos quadrados e verifica o vencedor [cite: 1].
- `Game`: Componente principal que gerencia o estado global do jogo, o histórico de jogadas e permite navegar entre os lances [cite: 1].
- `calculateWinner`: Função utilitária que checa as combinações de vitória (linhas, colunas e diagonais) [cite: 1].

---

## 🛠️ Tecnologias Utilizadas

- **React** (Hooks como `useState`) [cite: 1]
- **JavaScript (ES6+)** [cite: 1]
- **CSS3** [cite: 2]

---

## 📦 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** (ou yarn) instalados em sua máquina.

### Passos:

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/jogo-da-velha.git
   cd jogo-da-velha
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   *Se você estiver usando Vite:*
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra `http://localhost:3000` (ou a URL exibida no seu terminal) para jogar.

---

## 📄 Licença

Este projeto é livre para fins de estudo e aprendizado.