import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Authentication from "./components/Authentication/Authentication";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import Pricing from "./components/Others/Pricing/Pricing";
import Privacy from "./components/Others/Privacy/Privacy";
import Works from "./components/Others/Works/Works";
import Vault from "./pages/Vault";
import PersonalPage from "./pages/PersonalPage";
import SubscribeToUpdate from "./components/Others/Subscribe/SubscribeToUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth",
        children: [
          { path: "login", element: <Authentication mode={"login"} /> },
          { path: "sign-up", element: <Authentication mode={"sign-up"} /> },
        ],
      },
      {
        path: "personal",
        element: <PersonalPage/>
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "vault",
        element: <Vault />,
      },
      {
        path: "subscribe",
        element: <SubscribeToUpdate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
