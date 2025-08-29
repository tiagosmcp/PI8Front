// src/pages/Home/App.jsx
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";
import { entradas, sanduiches, bebidas } from "../../data/products";

const App = () => {
  const ProductCard = ({ product, categoria }) => (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
      {/* Botão Detalhes */}
      <Link to={`/detalhes/${categoria}/${product.id}`} className="details-button">
        Detalhes
      </Link>
    </div>
  );

  const Section = ({ title, subtitle, products, categoria }) => (
    <div className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <Link to={`/lista/${categoria}`} className="see-more">
          Veja Mais <span className="arrow-right">›</span>
        </Link>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} categoria={categoria} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="app">
      <Header />

      <main>
        <Section
          title="ENTRADAS"
          subtitle="O melhor dos petiscos"
          products={entradas}
          categoria="entradas"
        />

        <Section
          title="SANDUÍCHES"
          subtitle="O melhor dos sanduíches"
          products={sanduiches}
          categoria="sanduiches"
        />

        <Section
          title="BEBIDAS"
          subtitle="O melhor das bebidas"
          products={bebidas}
          categoria="bebidas"
        />
      </main>
    </div>
  );
};

export default App;
