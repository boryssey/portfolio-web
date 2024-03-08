"use client";
import { blurHashToDataURL } from "@/utils/helpers";
import { useWindowSize } from "@/utils/hooks";
import Image from "next/image";
import { useState } from "react";

import PhotoAlbum, {
  Photo,
  RenderPhoto,
  RenderPhotoProps,
} from "react-photo-album";
import useLightbox from "./Lightbox/useLightbox";

function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick, blurDataURL },
  wrapperStyle,
}: RenderPhotoProps & {
  imageProps: RenderPhotoProps["imageProps"] & { blurDataURL: string };
}) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick, blurDataURL }}
      />
    </div>
  );
}

const ImageGallery = (data: any) => {
  console.log("🚀 ~ ImageGallery ~ data:", data);
  const { lightboxIndex, selectIndex, renderLightbox } = useLightbox();

  const { width } = useWindowSize();

  const images = data?.data?.data?.attributes?.images.data.map(
    ({ attributes }: any) => ({
      src: attributes.url,
      width: attributes.width,
      height: attributes.height,
      blurDataURL: blurHashToDataURL(attributes.blurhash),
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
      <PhotoAlbum
        photos={images}
        layout="rows"
        renderPhoto={NextJsImage as RenderPhoto<Photo>}
        targetRowHeight={300}
        defaultContainerWidth={Math.min((width || 1200) - 160, 1920 - 160)}
        sizes={{ size: "min(1920px - 160px, calc(100vw - 160px))" }}
        onClick={({ index }) => selectIndex(index)}
      />
      {renderLightbox({
        slides: images,
      })}
    </>
  );
};

export default ImageGallery;
