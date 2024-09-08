import "./App.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { store } from "../model/stores/root-store";
import { RootStoreContext } from "../lib/useStores";

export const App = () => {
  return (
    <RootStoreContext.Provider value={store}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RouterProvider router={routes} />
      </Suspense>
    </RootStoreContext.Provider>
  );
};
