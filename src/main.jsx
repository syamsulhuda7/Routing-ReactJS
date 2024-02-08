import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Komponen/home.jsx";
import About from "./Komponen/about.jsx";
import Kategori from "./Komponen/kategori.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="kategori/:name" element={<Kategori />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
