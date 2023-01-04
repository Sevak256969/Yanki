import { useRoutes } from "react-router";
import Layout from "./Layout";
import Home from "./pages/home";
import CatalogIndex from "./pages/catalog";
import ContactIndex from "./pages/contact/index";
import Wears from "./pages/catalog/Wears";
import WearsItem from "./pages/catalog/WearsItem";
import Error404 from "./Error404";

export default function Router() {
  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "aboutUs", element: <ContactIndex /> },
        { path: "contact", element: <ContactIndex /> },
        { path: "catalog", element: <CatalogIndex /> },
        { path: "catalog/:name", element: <Wears /> },
        { path: "catalog/:name/:id", element: <WearsItem /> },
        { path: "*", element: <Error404 /> },
      ],
    },
  ]);
  return element;
}
