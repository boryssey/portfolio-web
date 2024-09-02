/* eslint-disable @next/next/no-img-element */
"use client";
import "react-photo-album/rows.css";

import { Photo, RowsPhotoAlbum, RowsPhotoAlbumProps } from "react-photo-album";
import useLightbox from "./Lightbox/useLightbox";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

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
            <ImageWithPlaceholder
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
