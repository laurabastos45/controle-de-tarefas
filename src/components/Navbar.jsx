import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Controle de Tarefas</div>

      <nav className="navbar-links">
        <Link to="/">Início</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastrar</Link>
      </nav>
    </header>
  );
}

export default Navbar;