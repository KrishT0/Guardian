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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
