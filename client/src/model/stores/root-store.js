import { makeAutoObservable } from "mobx";
import { GalleryStore } from "./gallery-store";

class RootStore {
  gallery = new GalleryStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new RootStore();
