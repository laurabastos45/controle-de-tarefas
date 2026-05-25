import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditarTarefa() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [descricao, setDescricao] = useState("");
  const [observacao, setObservacao] = useState("");

  const editarTarefa = async (e) => {

    e.preventDefault();

    try {

      await fetch(`https://controle-de-tarefas-backend-1.onrender.com/tarefas/${id}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          descricao,
          observacao
        })

      });

      alert("Tarefa atualizada com sucesso!");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);
      alert("Erro ao atualizar tarefa");

    }
  };

  return (

    <main className="nova-tarefa">

      <div className="task-form-card">

        <h1>Editar Tarefa</h1>

        <p>Atualize as informações da tarefa.</p>

        <form
          className="task-form"
          onSubmit={editarTarefa}
        >

          <input
            type="text"
            placeholder="Descrição da tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <textarea
            placeholder="Observação"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />

          <div className="task-form-actions">

            <button
              type="submit"
              className="btn-primary"
            >
              Salvar alterações
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/dashboard")}
            >
              Cancelar
            </button>

          </div>

        </form>

      </div>

    </main>

  );
}

export default EditarTarefa;