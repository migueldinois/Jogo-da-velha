<div align="center">
	<img src="./src/assets/logo.svg" alt="Logo do Jogo da Velha" width="96" />

	# Jogo da Velha

	Jogo da velha para dois jogadores desenvolvido com React e Vite.
</div>

## Sobre o projeto

O projeto implementa uma partida de jogo da velha em uma interface web. Os jogadores se alternam entre `X` e `O`, acompanham o resultado no tabuleiro e podem consultar o histórico de jogadas durante a partida.

## Funcionalidades

- Alternância automática entre os jogadores `X` e `O`.
- Detecção de vitória em linhas, colunas e diagonais.
- Identificação de empate quando todas as casas são preenchidas.
- Bloqueio de casas ocupadas e de novas jogadas após o encerramento da partida.
- Histórico navegável de todas as jogadas realizadas.
- Retorno a uma jogada anterior para continuar a partida a partir daquele ponto.
- Placar com a quantidade de vitórias de `X` e `O`.
- Reinício da partida atual.
- Zeramento do placar e reinício da partida.
- Alternância entre tema claro e tema escuro.

## Tecnologias utilizadas

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [Bootstrap](https://getbootstrap.com/) 5
- JavaScript com ES modules
- CSS Modules

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- `npm`, incluído na instalação do Node.js.

## Como executar

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/migueldinois/Jogo-da-velha.git
cd Jogo-da-velha
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção na pasta `dist`. |
| `npm run preview` | Executa uma prévia do build de produção. |
| `npm run lint` | Executa a verificação de código com ESLint. |

## Estrutura do projeto

```text
src/
├── assets/
│   ├── logo.svg       # Logo da aplicação
│   ├── moon.svg       # Ícone do tema escuro
│   └── sun.svg        # Ícone do tema claro
├── components/
│   ├── Board/         # Tabuleiro e regras de vitória/empate
│   ├── Game/          # Estado da partida, placar e histórico
│   ├── Header/        # Cabeçalho e alternância de tema
│   ├── History/       # Lista de jogadas da partida
│   └── Square/        # Casa individual do tabuleiro
├── styles/
│   └── variables.css  # Variáveis de cores, sombras e transições
├── App.jsx            # Componente principal da aplicação
└── main.jsx           # Ponto de entrada do React
```

## Como jogar

1. O jogador `X` inicia a partida.
2. Clique em uma casa vazia para marcar o tabuleiro.
3. Os jogadores se alternam a cada jogada.
4. Vence quem completar uma linha, coluna ou diagonal com o próprio símbolo.
5. Caso todas as casas sejam preenchidas sem uma combinação vencedora, a partida termina em empate.
6. Use o histórico para consultar jogadas anteriores ou o botão `Reiniciar` para começar uma nova partida.
