import { createContext, useContext } from "react";
import { RootStore } from "../model/stores/root-store";

export const RootStoreContext = createContext(null);
export const useStores = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error("");
  }
  return context;
};
