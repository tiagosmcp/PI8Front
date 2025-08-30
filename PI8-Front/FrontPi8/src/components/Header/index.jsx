import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ backTo = null }) => {
  return (
    <header className="header">
      {/* Botão voltar (se a prop backTo for passada) */}
      {backTo ? (
        <Link to={backTo} className="back-button">
          <span className="back-arrow">‹</span>
        </Link>
      ) : (
        <button className="back-button">
          <span className="back-arrow">‹</span>
        </button>
      )}

      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Pesquisar" className="search-input" />
      </div>

      {/* Botão do conta agora é Link */}
      <Link to="/conta" className="conta-button">
        <span className="conta-icon">☰</span>
      </Link>

      {/* Botão do carrinho agora é Link */}
      <Link to="/lancheira" className="cart-button">
        <span className="cart-icon">🛒</span>
      </Link>
    </header>
  );
};

export default Header;
