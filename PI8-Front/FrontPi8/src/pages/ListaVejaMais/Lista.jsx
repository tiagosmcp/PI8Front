import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import "./styleLista.css";
import { productsData } from "../../data/products";

function Lista() {
  const { categoria } = useParams();
  const produtos = productsData[categoria] || [];

  return (
    <div className="app-container">
      <Header backTo="/" />

      <div className="title-section">
        <h1 className="title">{categoria.toUpperCase()}</h1>
      </div>

      <div className="product-list">
        {produtos.map((item) => (
          <div key={item.id} className="product-item">
            <div className="product-info">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </div>

            <Link
              to={`/detalhes/${categoria}/${item.id}`}
              className="details-button"
            >
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lista;
