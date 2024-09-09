import { makeAutoObservable, runInAction } from "mobx";
import { getImagesByAlbum } from "../../api";
const delay = (ms) => new Promise((_) => setTimeout(_, ms));

export class GalleryStore {
  title = "";
  images = [];
  currentSlide = null;
  currentImage = null;
  currentPage = 1;
  totalPage = 1;
  totalImage = 1;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(title) {
    this.title = title;
  }

  setCurrentSlide(slide) {
    this.currentSlide = slide;
    this.currentImage = this.images[slide - 1];
  }

  setCurrentImage(photo) {
    this.currentImage = photo;
    this.currentSlide = this.images.indexOf(photo) + 1;
  }

  loadImages = async (id) => {
    try {
      this.isLoading = true;
      await delay(1000);
      const data = await getImagesByAlbum(id);
      console.log(data.data);
      runInAction(() => {
        this.isLoading = false;
        this.currentPage = 1;
        this.images = data.data;
        this.totalImage = this.images.length;
        this.totalPage = Math.ceil(this.totalImage / 8);
      });
    } catch {
      this.isLoading = false;
    }
  };

  setCurrentPage(current) {
    this.currentPage = current;
  }

  navigatePrev() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  navigateNext() {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
    }
  }
}
