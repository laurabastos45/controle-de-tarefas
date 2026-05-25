import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NovaTarefa() {

  const navigate = useNavigate();

  const [descricao, setDescricao] = useState("");
  const [observacao, setObservacao] = useState("");

  const criarTarefa = async (e) => {

    e.preventDefault();

    try {

      await fetch(
        "https://controle-de-tarefas-backend-1.onrender.com/tarefas",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            descricao,
            observacao
          })
        }
      );

      alert("Tarefa criada com sucesso!");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Erro ao criar tarefa");

    }
  };

  return (

    <main className="nova-tarefa">

      <div className="task-form-card">

        <h1>Nova Tarefa</h1>

        <p>
          Preencha os dados para adicionar uma nova tarefa.
        </p>

        <form
          className="task-form"
          onSubmit={criarTarefa}
        >

          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <textarea
            placeholder="Observação"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          ></textarea>

          <div className="task-form-actions">

            <button
              type="submit"
              className="btn-primary"
            >
              Criar tarefa
            </button>

            <Link
              to="/dashboard"
              className="btn-secondary"
            >
              Cancelar
            </Link>

          </div>

        </form>

      </div>

    </main>
  );
}

export default NovaTarefa;