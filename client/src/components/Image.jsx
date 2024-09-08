import { Photo } from "../model/types";
import { useState } from "react";
import { useStores } from "../lib/useStores";
import { Modal } from "./Modal";
import { BASE_URL_ASSETS } from "../lib/consts";

export const Image = ({ photo }) => {
  const [open, setOpen] = useState(false);
  const { gallery } = useStores();

  const handleClickPhoto = () => {
    gallery.setCurrentImage(photo);
    setOpen(true);
  };

  return (
    <div className="relative">
      <img
        src={BASE_URL_ASSETS + photo.url}
        alt="Фото"
        className="w-full h-auto cursor-pointer object-cover object-center rounded-lg"
        onClick={handleClickPhoto}
      />
      {gallery.currentSlide && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
};
