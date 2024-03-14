// import Image from "next/image";
import styles from "./page.module.scss";
// import { Gallery as GridGallery } from "react-grid-gallery";
import ImageGallery from "@/components/ImageGallery";

const getCollections = async () => {
  const res = await fetch(
    "https://cdn.boryssey.com/api/collections/2?populate=images"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch collections");
  }
  return res.json();
};

const Gallery = async () => {
  const data = await getCollections();

  return (
    <main className={styles.container}>
      <ImageGallery data={data}></ImageGallery>
    </main>
  );
};

export default Gallery;
