// src/pages/DetalhesProduto/Detalhes.jsx
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { productsData } from "../../data/products";
import "./styleDetalhes.css";

export default function Detalhes() {
  const { categoria, id } = useParams();
  const produtos = productsData[categoria] || [];
  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) {
    return (
      <div className="app-container">
        <Header backTo={`/lista/${categoria}`} />
        <p className="not-found">Produto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header backTo={`/lista/${categoria}`} />

      <div className="product-container">
        <div className="product-image-wrapper">
          <img
          className="product-image"
            src={produto.image}
            alt={produto.name}
          />
        </div>

        <div className="product-details">
          <h1 className="product-title">{produto.name}</h1>
          <p className="product-price">{produto.price}</p>
          <p className="product-description">{produto.description}</p>

          {produto.ingredients && produto.ingredients.length > 0 && (
            <div className="ingredients-section">
              <h2 className="ingredients-title">Ingredientes</h2>
              <ul className="ingredients-list">
                {produto.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="add-to-cart-button">Adicionar à Lancheira</button>
        </div>
      </div>
    </div>
  );
}
