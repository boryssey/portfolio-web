import * as React from "react";
import dynamic from "next/dynamic";
import type { LightboxExternalProps } from "yet-another-react-lightbox";

const Lightbox = dynamic(() => import("@/components/Lightbox/Lightbox"));

export default function useLightbox() {
  const [interactive, setInteractive] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(-1);

  const selectIndex = React.useCallback((index: number) => {
    if (index > -1) {
      setInteractive(true);
    }
    setLightboxIndex(index);
  }, []);

  const renderLightbox = React.useCallback(
    (props?: LightboxExternalProps) =>
      interactive ? (
        <Lightbox
          open={lightboxIndex > -1}
          index={lightboxIndex}
          close={() => selectIndex(-1)}
          on={{
            view: ({ index: currentIndex }) => setLightboxIndex(currentIndex),
          }}
          {...props}
        />
      ) : null,
    [interactive, lightboxIndex, selectIndex]
  );

  return { lightboxIndex, selectIndex, renderLightbox };
}
