"use client"

import "./stylePedConf.css"

export default function PedidoConfirmado({ onBackToMenu }) {
  return (
    <div className="confirmation-container">
      <div className="confirmation-wrapper">
        {/* Food Illustration */}
        <div className="food-illustration">
          <img
            src=""
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

        {/* Back Button */}
        <button className="back-button" onClick={onBackToMenu}>
          Voltar ao cardápio
        </button>
      </div>
    </div>
  )
}
