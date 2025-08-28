"use client"

import "./stylePagamento.css"

export default function Pagamento({ onPaymentSelect }) {
  const handlePaymentClick = (paymentMethod) => {
    console.log(`${paymentMethod} selected`)
    if (onPaymentSelect) {
      onPaymentSelect(paymentMethod)
    }
  }

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        {/* Header */}
        <h1 className="payment-header">SELECIONAR PAGAMENTO</h1>

        {/* Payment Options */}
        <div className="payment-options">
          <button className="payment-button" onClick={() => handlePaymentClick("Crédito")}>
            CRÉDITO
          </button>

          <button className="payment-button" onClick={() => handlePaymentClick("Débito")}>
            DÉBITO
          </button>

          <button className="payment-button" onClick={() => handlePaymentClick("PIX")}>
            PIX
          </button>

          <button className="payment-button" onClick={() => handlePaymentClick("Dinheiro")}>
            DINHEIRO
          </button>
        </div>
      </div>
    </div>
  )
}
