import styles from "./cv.module.scss";

const CV = () => {
  return (
    <main className={styles.documentContainer}>
      <iframe src="/cv.pdf" height="100%" />
    </main>
  );
};

export default CV;
