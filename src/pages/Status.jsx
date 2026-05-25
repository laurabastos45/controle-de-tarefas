import { useEffect, useState } from "react";

function Status() {

  const [status, setStatus] = useState([]);

  const [novaDescricao, setNovaDescricao] = useState("");

  // carregar status
  const carregarStatus = async () => {

    try {

      const response = await fetch(
        "https://controle-de-tarefas-backend-1.onrender.com/status"
      );

      const data = await response.json();

      setStatus(data);

    } catch (error) {

      console.error(error);
      alert("Erro ao carregar status");

    }
  };

  // cadastrar
  const cadastrarStatus = async (e) => {

    e.preventDefault();

    try {

      await fetch(
        "https://controle-de-tarefas-backend-1.onrender.com/status",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            descricao: novaDescricao
          })
        }
      );

      setNovaDescricao("");

      carregarStatus();

    } catch (error) {

      console.error(error);
      alert("Erro ao cadastrar status");

    }
  };

  // deletar
  const deletarStatus = async (id) => {

    try {

      await fetch(
        `https://controle-de-tarefas-backend-1.onrender.com/status/${id}`,
        {
          method: "DELETE"
        }
      );

      carregarStatus();

    } catch (error) {

      console.error(error);
      alert("Erro ao deletar status");

    }
  };

  // editar
  const editarStatus = async (item) => {

    const novaDescricao = prompt(
      "Nova descrição:",
      item.descricao
    );

    if (!novaDescricao) return;

    try {

      await fetch(
        `https://controle-de-tarefas-backend-1.onrender.com/status/${item.status_id}`,
        {

          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            descricao: novaDescricao
          })

        }
      );

      carregarStatus();

    } catch (error) {

      console.error(error);
      alert("Erro ao editar status");

    }
  };

  useEffect(() => {
    carregarStatus();
  }, []);

  return (

    <main className="usuarios-page">

      <div className="usuarios-container">

        <h1>Status</h1>

        <form
          onSubmit={cadastrarStatus}
          style={{
            marginBottom: "20px",
            display: "flex",
            gap: "10px"
          }}
        >

          <input
            type="text"
            placeholder="Novo status"
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
          />

          <button type="submit">
            Adicionar
          </button>

        </form>

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>

          </thead>

          <tbody>

            {status.map((item) => (

              <tr key={item.status_id}>

                <td>{item.status_id}</td>

                <td>{item.descricao}</td>

                <td>

                  <button
                    onClick={() => editarStatus(item)}
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => deletarStatus(item.status_id)}
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

export default Status;