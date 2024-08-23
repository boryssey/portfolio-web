"use client";
import { blurHashToDataURL } from "@/utils/helpers";
import { useWindowSize } from "@/utils/hooks";
import Image from "next/image";
import { UnstableSSR as SSR } from "react-photo-album/ssr";
import "react-photo-album/rows.css";

import PhotoAlbum, {
  Photo,
  RenderImageContext,
  RenderImageProps,
  RenderPhoto,
  RenderPhotoProps,
} from "react-photo-album";
import useLightbox from "./Lightbox/useLightbox";

function NextJsImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

const ImageGallery = (data: any) => {
  const { selectIndex, renderLightbox } = useLightbox();

  const { width } = useWindowSize();

  const images = data?.data?.data?.attributes?.images.data.map(
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
    <>
      <SSR breakpoints={[240, 380, 600, 900]}>
        <PhotoAlbum
          photos={images}
          layout="rows"
          // renderPhoto={NextJsImage as RenderPhoto<Photo>}
          // render={{ image: NextJsImage as RenderPhoto<Photo> }}
          targetRowHeight={200}
          // defaultContainerWidth={Math.min((width || 1200) - 160, 1920 - 160)}
          // sizes={{ size: "min(1920px - 160px, calc(100vw - 160px))" }}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
          onClick={({ index }) => selectIndex(index)}
        />
      </SSR>
      {renderLightbox({
        slides: images,
      })}
    </>
  );
};

export default ImageGallery;
