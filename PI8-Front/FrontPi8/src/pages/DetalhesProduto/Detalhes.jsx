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
        <p style={{ padding: "24px" }}>Produto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="burger-container">
      <Header backTo={`/lista/${categoria}`} />

      <div className="burger-image-wrapper">
        <img
          src={produto.image}
          alt={produto.name}
          className="burger-image cover-mode"
        />
      </div>

      <div className="product-info">
        <div className="title-price-section">
          <h1 className="product-title">{produto.name.toUpperCase()}</h1>
          <p className="product-price">{produto.price}</p>
        </div>

        <p className="product-description">{produto.description}</p>

        <div className="ingredients-section">
          <h2 className="ingredients-title">Ingredientes</h2>
          <div className="ingredients-list">
            {produto.ingredients.map((ing, index) => (
              <p key={index}>{ing}</p>
            ))}
          </div>
        </div>

        <div className="button-wrapper">
          <button className="add-to-cart-button">ADICIONAR À LANCHEIRA</button>
        </div>
      </div>
    </div>
  );
}
