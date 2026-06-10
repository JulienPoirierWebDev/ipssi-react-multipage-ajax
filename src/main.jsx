import PageAuteur from "@/pages/PageAuteur";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Layout from "./pages/Layout";
import PageAccueil from "./pages/PageAccueil";
import PageRechercheLivre from "./pages/PageRechercheLivre";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <p>404</p>,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PageAccueil />,
      },
      {
        path: "/rechercher-un-livre",
        element: <PageRechercheLivre />,
      },
      {
        path: "/auteur/:key",
        element: <PageAuteur />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
