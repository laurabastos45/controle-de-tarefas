import { useEffect, useState } from "react";

function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);

  // carregar usuários
  const carregarUsuarios = async () => {

    try {

      const response = await fetch("https://controle-de-tarefas-backend-1.onrender.com/usuarios");

      const data = await response.json();

      setUsuarios(data);

    } catch (error) {

      console.error(error);
      alert("Erro ao carregar usuários");

    }
  };

  // deletar usuário
  const deletarUsuario = async (id) => {

    try {

      await fetch(`https://controle-de-tarefas-backend-1.onrender.com/usuarios/${id}`, {
        method: "DELETE"
      });

      carregarUsuarios();

    } catch (error) {

      console.error(error);
      alert("Erro ao deletar usuário");

    }
  };

  // editar usuário
  const editarUsuario = async (usuario) => {

    const novoNome = prompt("Novo nome:", usuario.nome);

    const novoLogin = prompt("Novo login:", usuario.login);

    const novaSenha = prompt("Nova senha:");

    if (!novoNome || !novoLogin || !novaSenha) {
      return;
    }

    try {

      await fetch(`https://controle-de-tarefas-backend-1.onrender.com/usuarios/${usuario.usuario_id}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          nome: novoNome,
          login: novoLogin,
          senha: novaSenha
        })

      });

      carregarUsuarios();

    } catch (error) {

      console.error(error);
      alert("Erro ao editar usuário");

    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (

    <main className="usuarios-page">

      <div className="usuarios-container">

        <h1>Usuários</h1>

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Login</th>
              <th>Ações</th>
            </tr>

          </thead>

          <tbody>

            {usuarios.map((usuario) => (

              <tr key={usuario.usuario_id}>

                <td>{usuario.usuario_id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.login}</td>

                <td>

                  <button
                    onClick={() => editarUsuario(usuario)}
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => deletarUsuario(usuario.usuario_id)}
                  >
                    Excluir
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>

  );
}

export default Usuarios;