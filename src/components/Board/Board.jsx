import Game from "../Game/Game.jsx";
import { useState } from 'react';
import Square from "../Square/Square.jsx";
import styles from './Board.module.css'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay, scoreX, scoreO }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && !squares.includes(null);
  const isGameOver = winner || isDraw;

  return (
    <>
      <div className={styles.statusContainer}>
        {/* Campo do Resultado (Aparece só se alguem ganhar ou empatar) */}
        {isGameOver && (
          <div className={`${styles.resultado} ${winner ? styles.ganhador : styles.empate}`}>
            {winner ? (
              <>
                Ganhador: <span className={winner === 'X' ? styles.x : styles.o}>{winner}</span>
              </>
            ) : (
              'Empate!'
            )}
          </div>
        )}
        {/* Campo do Proximo Jogador (Aparece só se o jogo nao acabou) */}
        {!isGameOver && (
          <div className={styles.proximoJogador}>
            Próximo Jogador: <span className={xIsNext ? styles.x : styles.o}>{xIsNext ? 'X' : 'O'}</span>
          </div>
        )}
      </div>

      <div className={styles.tabuleiroContainer}>
        <div className={styles.boardRow}>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className={styles.boardRow}>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className={styles.boardRow}>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;