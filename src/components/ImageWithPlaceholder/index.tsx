/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { RenderImageProps } from "react-photo-album";

const ImageWithPlaceholder = (
  props: RenderImageProps & { blurDataURL?: string }
) => {
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

  const backgroundImage =
    !isLoaded && blurDataURL ? `url("${blurDataURL}")` : null;
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
      alt={imageProps.alt || ""}
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

export default ImageWithPlaceholder;
