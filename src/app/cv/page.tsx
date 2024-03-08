'use client'
import { pdfjs, Document, Page, Outline } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from './cv.module.scss';
import { useWindowSize } from '@/utils/hooks';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
  

const CV = () => {
    const {width, height} = useWindowSize();
    const pageWidth = Math.min(width - 160, 1280-160);
    console.log({pageWidth, width})
    return (
        <main className={styles.documentContainer}>
            
            <Document className={styles.documentContainer} file="/cv.pdf" onLoadError={(err) => console.error(err)}>
                <Outline /> 
                    <Page className={styles.documentContainer} width={pageWidth} pageNumber={1} />
                    <Page className={styles.documentContainer} width={pageWidth} pageNumber={2} />
            </Document>
        </main>
    )
}

export default CV;