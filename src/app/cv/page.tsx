import styles from "./cv.module.scss";

const CV = () => {
  return (
    <main className={styles.documentContainer}>
      <iframe
        src="https://d26gnvwaf4fni9.cloudfront.net/documents/borys-melnyk-full-stack-cv-web.pdf"
        height="100%"
      />
    </main>
  );
};

export default CV;
