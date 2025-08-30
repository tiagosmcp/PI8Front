// src/pages/Lista/Lista.jsx
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import { entradas, sanduiches, bebidas } from "../../data/products";
import "./styleLista.css";

const Lista = () => {
  const { categoria } = useParams();

  // Mesma estrutura usada no App.jsx
  const categorias = {
    entradas,
    sanduiches,
    bebidas,
  };

  const produtos = categorias[categoria] || [];

  if (produtos.length === 0) {
    return (
      <div className="app">
        <Header backTo="/" />
        <main>
          <h1 className="category-title">{categoria.toUpperCase()}</h1>
          <p style={{ padding: "24px" }}>Nenhum produto encontrado.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Header backTo="/" />

      <main>
        <h1 className="category-title">{categoria.toUpperCase()}</h1>
        <div className="products-grid">
          {produtos.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
              </div>

              {/* Botão de detalhes */}
              <Link
                to={`/detalhes/${categoria}/${product.id}`}
                className="details-button"
              >
                Detalhes
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Lista;
