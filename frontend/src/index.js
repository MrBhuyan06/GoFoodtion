import "./index.css";
import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom/client.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PaymentPages from "./components/PaymentPages.js";
import ErrorComponents from "./components/ErrorComponents.js";
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
  RestaurentDetailsPage,
} from "./components";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponents />,
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
        path: "/cart",
        element: <Carts />,
      },
      {
        path: "/payment",
        element: <PaymentPages />,
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
      {
        path: "/restaurent/:resId",
        element: <RestaurentDetailsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
