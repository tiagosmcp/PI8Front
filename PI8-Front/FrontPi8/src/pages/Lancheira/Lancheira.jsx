import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import "./styleLancheira.css"

export default function Lancheira() {
  const [cartItems, setCartItems] = useState([])
  const [observation, setObservation] = useState("")
  const navigate = useNavigate()

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="lancheira-page">
      <Header />

      <div className="lancheira-container">
        <h2 className="lancheira-title">Minha Lancheira</h2>

        {/* Lista de produtos */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Sua lancheira está vazia.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  className="item-image"
                  src={item.image}
                  alt={item.name}
                />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">R${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-button"
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>

        {/* Observações */}
        <div className="observation-section">
          <h3 className="observation-title">Alguma observação?</h3>
          <textarea
            placeholder="Ex. Tirar cebola, hambúrguer mal passado"
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            className="observation-textarea"
            rows={3}
          />
        </div>

        {/* Total */}
        <div className="total-section">
          <h2 className="total-text">TOTAL: R${total.toFixed(2)}</h2>
        </div>

        {/* Botões */}
        <div className="action-buttons">
          <button
            className="add-items-button"
            onClick={() => navigate("/")}
          >
            Adicionar mais itens
          </button>

          <button
            className="order-button"
            onClick={() => navigate("/pedido")} // futura tela de pedido
          >
            FAZER PEDIDO
          </button>
        </div>
      </div>
    </div>
  )
}
