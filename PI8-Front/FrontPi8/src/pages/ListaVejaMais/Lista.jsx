import Header from "../../components/Header";
import "./styleLista.css";

const sandwiches = [
  { id: 1, name: "BANDIDO", price: "R$30,00" },
  { id: 2, name: "ZORRERO", price: "R$30,00" },
  { id: 3, name: "PEQUI", price: "R$30,00" },
  { id: 4, name: "TRINCHEIRA", price: "R$30,00" },
  { id: 5, name: "CANIVETE", price: "R$30,00" },
];

function Lista() {
  return (
    <div className="app-container">
      {/* Header compartilhado, com voltar para home */}
      <Header backTo="/" />

      {/* Title */}
      <div className="title-section">
        <h1 className="title">SANDUÍCHES</h1>
      </div>

      {/* Sandwich List */}
      <div className="sandwich-list">
        {sandwiches.map((sandwich) => (
          <div key={sandwich.id} className="sandwich-item">
            <div className="sandwich-info">
              <div className="sandwich-image">
                <img
                  src="/src/pages/ListaVejaMais/pictures/hamburguer.png"
                  alt={sandwich.name}
                />
              </div>
              <div className="sandwich-details">
                <h3>{sandwich.name}</h3>
                <p>{sandwich.price}</p>
              </div>
            </div>

            <button className="details-button">Detalhes</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lista;
