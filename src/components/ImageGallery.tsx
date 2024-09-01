/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import "react-photo-album/rows.css";

import {
  Photo,
  RenderImage,
  RenderImageContext,
  RenderImageProps,
  RenderPhotoContext,
  RowsPhotoAlbum,
  RowsPhotoAlbumProps,
} from "react-photo-album";
import useLightbox from "./Lightbox/useLightbox";
import { useEffect, useRef, useState } from "react";

const Image = (props: RenderImageProps & { blurDataURL: string }) => {
  const { blurDataURL, ...imageProps } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const onImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      onImageLoad();
    }
  }, []);

  const backgroundImage = !isLoaded ? `url("${blurDataURL}")` : null;
  const placeholderStyle = backgroundImage
    ? {
        backgroundImage,
        filter: "blur(0px)",
        backgroundSize: "cover",
        backgroundPosition: "0% 0%",
      }
    : {};

  return (
    <img
      {...imageProps}
      ref={imageRef}
      onLoad={onImageLoad}
      style={{
        ...imageProps.style,
        ...placeholderStyle,
      }}
    />
  );
};

type PhotoWithDataURL<TPhoto extends Photo> = TPhoto & {
  blurDataURL: string;
};

function ImageGallery<TPhoto extends Photo>(
  props: RowsPhotoAlbumProps<TPhoto>
) {
  const { selectIndex, renderLightbox } = useLightbox();

  return (
    <>
      <RowsPhotoAlbum
        {...props}
        render={{
          image: (imageProps, context) => (
            <Image
              {...imageProps}
              blurDataURL={
                (context.photo as PhotoWithDataURL<TPhoto>).blurDataURL
              }
            />
          ),
        }}
        onClick={({ index }) => selectIndex(index)}
      />
      {renderLightbox({
        slides: props.photos,
      })}
    </>
  );
}

export default ImageGallery;
