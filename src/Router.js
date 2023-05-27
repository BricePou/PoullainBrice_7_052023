import React from "react";
import Home from "./pages/Home.js"
import {
  createBrowserRouter,
} from "react-router-dom";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);

export default Router