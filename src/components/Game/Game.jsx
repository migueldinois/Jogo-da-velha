import Board from '../Board/Board.jsx'
import Square from '../Square/Square.jsx'
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import '../../styles/variables.css'
import styles from './Game.module.css'

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

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
                                <div className={styles.blocoPlacar}>Placar</div>
                                <div className={styles.tabuleiroWrapper}>
                                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                                </div>
                                <div className={styles.acoesContainer}>
                                    <div>Placar</div>
                                    <div>Placar</div>
                                    <div>Placar</div>
                                </div>
                            </div>
                        </div>

                        {/* Historico */}
                        <div className={`col-12 col-md-4 ${styles.secaoHistorico}`}>
                            <h2 className={styles.titulo}>Histórico</h2>
                            <div className="game-info">
                                <ol>{moves}</ol>
                            </div>
                        </div>

                    </div> 
                </div>
            </main>
        </>
    );
}

export default Game