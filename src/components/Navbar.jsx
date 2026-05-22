import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const usuarioLogado = localStorage.getItem("usuarioLogado");

  const logout = () => {

    localStorage.removeItem("usuarioLogado");

    navigate("/login");

  };

  return (

    <header className="navbar">

      <div className="navbar-logo">
        Controle de Tarefas
      </div>

      <nav className="navbar-links">

        {!usuarioLogado ? (

          <>
            <Link to="/">Início</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Cadastrar</Link>
          </>

        ) : (

          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/nova-tarefa">Nova Tarefa</Link>
            <Link to="/usuarios">Usuários</Link>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Sair
            </button>
          </>

        )}

      </nav>

    </header>

  );
}

export default Navbar;