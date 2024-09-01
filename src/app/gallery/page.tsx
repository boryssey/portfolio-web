// import Image from "next/image";
import { blurHashToDataURL } from "@/utils/helpers";
import styles from "./page.module.scss";
// import { Gallery as GridGallery } from "react-grid-gallery";
import ImageGallery from "@/components/ImageGallery";
import { UnstableSSR as SSR } from "react-photo-album/ssr";

const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/collections/2?populate=images`;

const getCollections = async () => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch collections");
  }
  return res.json();
};

const Gallery = async () => {
  const collections = await getCollections();
  const images = collections?.data?.attributes?.images.data.map(
    ({ attributes }: any) => ({
      src: attributes.url,
      width: attributes.width,
      height: attributes.height,
      blurDataURL:
        attributes.blurhash && blurHashToDataURL(attributes.blurhash),
      srcSet: [
        {
          src: attributes.formats.small.url,
          width: attributes.formats.small.width,
          height: attributes.formats.small.height,
        },
        {
          src: attributes.formats.medium.url,
          width: attributes.formats.medium.width,
          height: attributes.formats.medium.height,
        },
        {
          src: attributes.formats.large.url,
          width: attributes.formats.large.width,
          height: attributes.formats.large.height,
        },
      ],
    })
  );
  return (
    <main className={styles.container}>
      <SSR breakpoints={[400, 600, 800]}>
        <ImageGallery
          photos={images}
          targetRowHeight={300}
          // defaultContainerWidth={Math.min((width || 1200) - 160, 1920 - 160)}
          // sizes={{ size: "min(1920px - 160px, calc(100vw - 160px))" }}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 160px)" },
            ],
          }}
        />
      </SSR>
    </main>
  );
};

export default Gallery;
