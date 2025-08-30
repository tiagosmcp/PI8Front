import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home/App.jsx";
import Lista from "./pages/ListaVejaMais/Lista.jsx";
import Detalhes from "./pages/DetalhesProduto/Detalhes.jsx";
import Lancheira from "./pages/Lancheira/Lancheira.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista/:categoria" element={<Lista />} />
        <Route path="/detalhes/:categoria/:id" element={<Detalhes />} />
        <Route path="/lancheira" element={<Lancheira />} />
        <Route path="/pedido" element={<h1>Em breve: Tela de Pedido</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
