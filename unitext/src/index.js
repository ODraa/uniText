import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  routes,
  Link,
  Outlet,
} from "react-router-dom";

import Notes from "./routes/Notes";
import Notes1 from "./routes/Notes1";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>
  <Navbar />
  <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "notes1",
        element: <Notes1 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);