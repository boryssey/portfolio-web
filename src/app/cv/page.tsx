import styles from "./cv.module.scss";

const CV = () => {
  return (
    <main className={styles.documentContainer}>
      <iframe
        src="https://r2-portfolio.boryssey.com/Borys-Melnyk-CV-redacted.pdf"
        height="100%"
      />
    </main>
  );
};

export default CV;
