import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { observer } from "mobx-react-lite";
import { useStores } from "../lib/useStores";
import { useNavigate, useParams } from "react-router-dom";

export const Modal = observer(({ open, setOpen }) => {
  const { gallery } = useStores();
  const navigate = useNavigate();
  const { albumId } = useParams();

  const onClose = () => {
    setOpen(false);
    gallery.setCurrentSlide(null);
    navigate(`/album/${albumId}`);
  };

  return (
    <>
      {" "}
      {open && gallery.currentImage && (
        <div className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white text-gray-900 p-7 rounded-lg max-w-full max-h-full overflow-hidden">
            <button
              onClick={() => onClose()}
              className="absolute top-0 right-0"
            >
              <XMarkIcon aria-hidden="true" className="h-4 w-4" />
            </button>
            <div className="flex items-center justify-center max-w-full max-h-full">
              <img
                src={`http://127.0.0.1:8055/assets/${gallery.currentImage.url}`}
                alt="Photo"
                className="max-w-[50vw] max-h-[50vh] object-contain"
              />
            </div>
            <div className="absolute bottom-0 sm:flex sm:flex-1 sm:justify-between sm:items-center">
              <p className="relative inline-flex mr-2 text-sm text-gray-700">
                <span> {gallery.currentSlide}</span>/
                <span>{gallery.totalImage}</span>
              </p>
              <div className="relative inline-flex ">
                <button
                  disabled={gallery.currentSlide === 1}
                  onClick={() =>
                    gallery.setCurrentSlide(gallery.currentSlide - 1)
                  }
                  className="relative inline-flex ring-1 ring-inset disabled:text-white focus:outline-offset-0"
                >
                  <ChevronLeftIcon aria-hidden="true" className="h-4 w-4" />
                </button>

                <button
                  disabled={gallery.currentSlide === gallery.totalImage}
                  onClick={() =>
                    gallery.setCurrentSlide(gallery.currentSlide + 1)
                  }
                  className="relative z-50 inline-flex ring-1 ring-inset disabled:text-white focus:outline-offset-0"
                >
                  <ChevronRightIcon aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
