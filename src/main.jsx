import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body.jsx";
import Help from "./components/Help.jsx";
import ResturantMenu from "./components/ResturantMenu.jsx";
import Cart from "./components/Cart.jsx";
import SearchBar from "./components/SearchBar.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/search",
        element:<SearchBar/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
