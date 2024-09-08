import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../lib/useStores";
import { useParams } from "react-router-dom";
import { Image } from "./Image";
import { Pagination } from "./album/Pagination";
import { ImageList } from "./ImageList";

export const Gallery = observer(() => {
  const { albumId } = useParams();
  const { gallery } = useStores();

  useEffect(() => {
    if (albumId) {
      gallery.loadImages(Number(albumId));
    }
  }, []);

  return (
    <div>
      <h2>{gallery.title}</h2>
      <ImageList />
      <Pagination />
    </div>
  );
});
