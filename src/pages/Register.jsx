import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Cadastro</h1>
        <p>Crie sua conta para começar a organizar suas tarefas.</p>

        <form className="login-form">
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />

          <Link to="/dashboard" className="btn-primary">
            Cadastrar
          </Link>
        </form>

        <p className="auth-switch">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;