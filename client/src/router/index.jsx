import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));
const AlbumPage = lazy(() => import("../pages/AlbumPage"));

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
