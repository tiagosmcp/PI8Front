"use client";

import { Link } from "react-router-dom";
import "./stylePedConf.css";

export default function PedidoConfirmado() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-wrapper">
        {/* Food Illustration */}
        <div className="food-illustration">
          <img
            src="/assets/pictures/pedidoconf.png" // substitua pela imagem real do pedido
            alt="Food illustration with serving dome"
            className="food-image"
          />
        </div>

        {/* Title */}
        <h1 className="confirmation-title">
          PEDIDO
          <br />
          CONFIRMADO
        </h1>

        {/* Message */}
        <p className="confirmation-message">
          Quando o sabor é bom, a vida fica ainda melhor.
          <br />
          Aproveite cada pedaço!
        </p>

        {/* Wait Time */}
        <p className="wait-time">Tempo de espera: 30Min</p>

        {/* Back Button - Navegação para home / cardápio */}
        <Link to="/" className="confirmation-button">
          Voltar ao cardápio
        </Link>
      </div>
    </div>
  );
}
