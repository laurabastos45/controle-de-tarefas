import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("https://controle-de-tarefas-backend-1.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,
          email,
          senha
        })
      });

      if (!response.ok) {
        alert("Erro ao cadastrar");
        return;
      }

      alert("Cadastro realizado com sucesso!");
      navigate("/login");

    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Cadastro</h1>
        <p>Crie sua conta para começar a organizar suas tarefas.</p>

        <form className="login-form">
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            type="button"
            onClick={handleRegister}
            className="btn-primary"
          >
            Cadastrar
          </button>
        </form>

        <p className="auth-switch">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;