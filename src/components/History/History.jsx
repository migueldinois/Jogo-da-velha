import styles from './History.module.css';

function History({ moves }) {
    return (
        <div className={styles.historyContainer}>
            <ol className={styles.historyList}>
                {moves}
            </ol>
        </div>
    );
}


export default History