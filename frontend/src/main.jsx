import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Authentication from "./components/Authentication/Authentication";
import ForgetPassword from "./components/Authentication/ForgetPassword";

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
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
