import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AlbumPage } from "../pages/AlbumPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Oops...</div>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/album/:albumId",
        element: <AlbumPage />,
      },
    ],
  },
]);
