
import "../src/index.css"
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
  import App from "./App";
  import Contato from "./assets/pages/contato";
  import Home from "./assets/pages/home";
  import Sobre from "./assets/pages/sobre";

const router = createBrowserRouter([
  {
        path: "/",
        element: <App/>,
  },
  {
    path: "/Contato",
    element: <Contato/>,
},
{
  path: "/Home",
  element: <Home/>,
},
{
  path: "/Sobre",
  element: <Sobre/>,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
