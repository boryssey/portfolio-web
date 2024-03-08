// import Image from "next/image";
import styles from "./page.module.scss";
// import { Gallery as GridGallery } from "react-grid-gallery";
import ImageGallery from "@/components/ImageGallery";

const getCollections = async () => {
  const res = await fetch(
    "http://localhost:1337/api/collections/2?populate=images",
    {
      next: { revalidate: 1 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch collections");
  }
  return res.json();
};

const Gallery = async () => {
  const data = await getCollections();
  console.log("🚀 ~ Gallery ~ data:", data);

  return (
    <main className={styles.container}>
      <ImageGallery data={data}></ImageGallery>
    </main>

    // <div className={styles.imageGalleryContainer}>
    //         {data?.data?.attributes?.images.data.map(({attributes}: any) => (
    //             <div className={styles.imageWrapper} key={attributes.hash} >
    //                     <Image src={attributes.formats.medium.url} width={attributes.formats.medium.width} height={attributes.formats.medium.height} alt={attributes.alternativeText} />
    //             </div>
    //         ))}
    // </div>
  );
};

export default Gallery;
