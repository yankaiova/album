import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../lib/useStores";
import { Image } from "./Image";

export const ImageList = observer(() => {
  const { gallery } = useStores();

  const visibleImages = gallery.images.slice(
    gallery.currentPage * 8 - 8,
    gallery.currentPage * 8
  );

  if (gallery.isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {visibleImages.map((image) => (
        <Image photo={image} key={image.id} />
      ))}
    </div>
  );
});
