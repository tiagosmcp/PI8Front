import { Link } from "react-router-dom";
import Header from "../../components/Header/index.jsx";
import "./style.css";

const App = () => {
  const entradas = [
    {
      id: 1,
      name: "Batata Frita",
      price: "R$ 30,00",
      description: "Porção de 250g",
      image: "/src/pages/Home/pictures/batata.png",
    },
    {
      id: 2,
      name: "Batata Frita",
      price: "R$ 30,00",
      description: "Porção de 250g",
      image: "/src/pages/Home/pictures/batata.png",
    },
    {
      id: 3,
      name: "Batata Frita",
      price: "R$ 30,00",
      description: "Porção de 250g",
      image: "/src/pages/Home/pictures/batata.png",
    },
  ];

  const sanduiches = [
    {
      id: 1,
      name: "Bandido",
      price: "R$ 30,00",
      description: "Smash de 180g",
      image: "/src/pages/Home/pictures/hamburguer.png",
    },
    {
      id: 2,
      name: "Bandido",
      price: "R$ 30,00",
      description: "Smash de 180g",
      image: "/src/pages/Home/pictures/hamburguer.png",
    },
    {
      id: 3,
      name: "Bandido",
      price: "R$ 30,00",
      description: "Smash de 180g",
      image: "/src/pages/Home/pictures/hamburguer.png",
    },
  ];

  const bebidas = [
    {
      id: 1,
      name: "Refrigerante",
      price: "R$ 8,00",
      description: "Long neck 350ml",
      image: "/src/pages/Home/pictures/coca.png",
    },
    {
      id: 2,
      name: "Refrigerante",
      price: "R$ 8,00",
      description: "Long neck 350ml",
      image: "/src/pages/Home/pictures/coca.png",
    },
    {
      id: 3,
      name: "Refrigerante",
      price: "R$ 8,00",
      description: "Long neck 350ml",
      image: "/src/pages/Home/pictures/coca.png",
    },
  ];

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src =
              "/placeholder.svg?height=140&width=200&text=Image+Not+Found";
          }}
          onLoad={(e) => {
            const img = e.target;
            if (img.naturalWidth > img.naturalHeight) {
              img.classList.add("landscape");
            } else {
              img.classList.add("portrait");
            }
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );

  const Section = ({ title, subtitle, products }) => (
    <div className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* LINK PARA OUTRA TELA */}
        <Link to="/lista" className="see-more">
          Veja Mais <span className="arrow-right">›</span>
        </Link>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="app">
      {/* Header reutilizado */}
      <Header />

      {/* Main Content */}
      <main>
        <Section
          title="ENTRADAS"
          subtitle="O melhor dos pestiscos"
          products={entradas}
        />

        <Section
          title="SANDUÍCHES"
          subtitle="O melhor dos sanduíches"
          products={sanduiches}
        />

        <Section
          title="BEBIDAS"
          subtitle="O melhor das bebidas"
          products={bebidas}
        />
      </main>
    </div>
  );
};

export default App;
