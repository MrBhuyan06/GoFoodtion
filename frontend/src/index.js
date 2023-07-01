import "./index.css";
import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom/client.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import {
  Carts,
  Menu,
  About,
  Body,
  NightLife,
  DinningOut,
  TapFeature,
  TapOption,
  MenuCreateContainer,
  MenuContainer,
} from "./components";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "createitem",
            element: <MenuCreateContainer />,
          },
          {
            path: "",
            element: <MenuContainer />,
          },
        ],
      },
      {
        path: "/booking/:optionid",
        element: <TapFeature />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
