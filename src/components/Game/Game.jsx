import Board from '../Board/Board.jsx'
import History from '../History/History.jsx'
import Square from '../Square/Square.jsx'
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import '../../styles/variables.css'
import styles from './Game.module.css'
import Placar from '../Placar/Placar.jsx'

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    // Pontuacao do placar
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);

        // Verifica se a jogada atual gerou um vencedor para somar a pontuação
        const winner = calculateWinner(nextSquares);
        if (winner === 'X') {
            setScoreX((prev) => prev + 1);
        } else if (winner === 'O') {
            setScoreO((prev) => prev + 1);
        }
    }


    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Ir para a jogada  #' + move;
        } else {
            description = 'Ir para o início do jogo';
        }
        return (
            <li className={styles.historyItem} key={move}>
                <button className={styles.botaoHistorico} onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );

    });

    function resetarJogo() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

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

    function zerarPlacar() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
        setScoreX(0);
        setScoreO(0);
    }

    return (
        <>
            <Header></Header>
            <main>
                <div className={`${styles.gameContainer}`}>

                    <div className='row'>
                        {/* Partida  */}
                        <div className={`col-12 col-md-8 ${styles.secaoPartida}`}>
                            <h2 className={styles.titulo}>Partida</h2>


                            <div className={styles.conteudoPartida}>
                                <Placar scoreX={scoreX} scoreO={scoreO} />
                                <div className={styles.tabuleiroWrapper}>
                                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                                </div>
                                <div className={styles.acoesContainer}>
                                    <button className={styles.botaoReiniciar} onClick={resetarJogo}>Reiniciar</button>
                                    <button className={styles.botaoZerarPlacar} onClick={zerarPlacar}>
                                        Zerar Placar
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Historico */}
                        <div className={`col-12 col-md-4 ${styles.secaoHistorico}`}>
                            <h2 className={styles.titulo}>Histórico</h2>
                            <History moves={moves} />
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Game