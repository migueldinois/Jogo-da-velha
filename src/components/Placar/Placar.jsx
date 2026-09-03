import styles from './Placar.module.css';

function Placar({ scoreX, scoreO }) {
    return (
        <div className={styles.placarContainer}>
            <div className={styles.placarItem}>
                <span className={styles.placarLabel}>X: </span>
                <span className={styles.placarScore}>{scoreX}</span>
            </div>
            <div className={styles.placarItem}>
                <span className={styles.placarLabel}>Empate: </span>
                <span className={styles.placarScore}>0</span>
            </div>
            <div className={styles.placarItem}>
                <span className={styles.placarLabel}>O: </span>
                <span className={styles.placarScore}>{scoreO}</span>
            </div>
        </div>
    );
}   

export default Placar;