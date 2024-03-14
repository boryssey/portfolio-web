import { pdfjs, Document, Page, Outline } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "./cv.module.scss";
import { useWindowSize } from "@/utils/hooks";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const CV = () => {
  return (
    <main className={styles.documentContainer}>
      <iframe src="/cv.pdf" height="100%" />
    </main>
  );
};

export default CV;
