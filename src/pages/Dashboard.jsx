import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  // carregar tarefas
  const carregarTarefas = async () => {

    try {

      const response = await fetch(
        "https://controle-de-tarefas-backend-1.onrender.com/tarefas"
      );

      const data = await response.json();

      setTasks(data);

    } catch (error) {

      console.error(error);

      alert("Erro ao carregar tarefas");

    }
  };

  // deletar tarefa
  const deleteTask = async (id) => {

    try {

      await fetch(
        `https://controle-de-tarefas-backend-1.onrender.com/tarefas/${id}`,
        {
          method: "DELETE"
        }
      );

      carregarTarefas();

    } catch (error) {

      console.error(error);

      alert("Erro ao deletar tarefa");

    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (

    <main className="dashboard">

      <div className="dashboard-header">

        <div>

          <h1>Minhas Tarefas</h1>

          <p>
            Gerencie suas atividades diárias de forma prática.
          </p>

        </div>

        <Link
          to="/nova-tarefa"
          className="btn-primary"
        >
          + Nova tarefa
        </Link>

      </div>

      <div className="tasks-container">

        {tasks.map((task) => (

          <div
            className="task-card"
            key={task.tarefa_id}
          >

            <h3>{task.descricao}</h3>

            <p>{task.observacao}</p>

            <div className="task-actions">

              <Link
                to={`/editar-tarefa/${task.tarefa_id}`}
                className="btn-edit"
              >
                ✏ Editar
              </Link>

              <button
                className="btn-delete"
                onClick={() => deleteTask(task.tarefa_id)}
              >
                🗑 Excluir
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Dashboard;