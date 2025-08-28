import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home/App";
import ListaSanduiches from "./pages/ListaVejaMais/Lista";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<ListaSanduiches />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
