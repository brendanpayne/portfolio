export const Loader = () => {
    return (
        <div 
            className={styles.loader}
            aria-label="Loading"
        >
            <div className={styles.loader__spinner}></div>
        </div>
    );
}
