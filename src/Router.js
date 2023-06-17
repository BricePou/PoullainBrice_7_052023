import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout/layout";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Accomodations from "./pages/Accommodations/accommodations";
import Error from "./pages/Error/error";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodations />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router