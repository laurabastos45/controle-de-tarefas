import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <p>Acesse sua conta para gerenciar suas tarefas.</p>

        <form className="login-form">
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />

          <Link to="/dashboard" className="btn-primary">
            Entrar
          </Link>
        </form>

        <p className="auth-switch">
          Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;