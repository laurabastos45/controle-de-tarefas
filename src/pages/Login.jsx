import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

 const handleLogin = async () => {
  console.log("CLIQUEI");

    try {
      const response = await fetch("https://controle-de-tarefas-backend-1.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          senha: senha
        })
      });

      console.log("RESPOSTA:", response);

      if (!response.ok) {
        alert("Login inválido");
        return;
      }

      const data = await response.json();

      console.log("USUÁRIO:", data);

      // opcional (recomendado): salvar usuário
      localStorage.setItem("usuarioLogado", "true");

      navigate("/usuarios");

    } catch (error) {
      console.error("ERRO:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <p>Acesse sua conta para gerenciar suas tarefas.</p>

        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">
            Entrar
          </button>
        </form>

        <p className="auth-switch">
          Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;