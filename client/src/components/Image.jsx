import { useState } from "react";
import { useStores } from "../lib/useStores";
import { Modal } from "./Modal";

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
        src={"http://127.0.0.1:8055/assets/" + photo.url}
        alt="Фото"
        className="w-full h-auto cursor-pointer object-cover object-center rounded-lg"
        onClick={handleClickPhoto}
      />
      {gallery.currentSlide && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
};
