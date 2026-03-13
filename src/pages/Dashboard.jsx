import { Link } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Revisar componentes, props e useState.",
      status: "Pendente",
      priority: "Alta"
    },
    {
      id: 2,
      title: "Fazer atividade da faculdade",
      description: "Finalizar o sistema de tarefas.",
      status: "Em andamento",
      priority: "Média"
    },
    {
      id: 3,
      title: "Organizar documentação",
      description: "Atualizar README do projeto.",
      status: "Concluída",
      priority: "Alta"
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getStatusClass = (status) => {
    if (status === "Pendente") return "pending";
    if (status === "Em andamento") return "progress";
    if (status === "Concluída") return "done";
    return "";
  };

  const getPriorityClass = (priority) => {
    if (priority === "Alta") return "high";
    if (priority === "Média") return "medium";
    if (priority === "Baixa") return "low";
    return "";
  };

  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Minhas Tarefas</h1>
          <p>Gerencie suas atividades diárias de forma prática.</p>
        </div>

        <Link to="/nova-tarefa" className="btn-primary">
          + Nova tarefa
        </Link>
      </div>

      <div className="tasks-container">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <div className="task-info">
              <span className={`task-status ${getStatusClass(task.status)}`}>
                {task.status}
              </span>

              <span className={`task-priority ${getPriorityClass(task.priority)}`}>
                {task.priority}
              </span>
            </div>

            <div className="task-actions">
              <Link to="/editar-tarefa" className="btn-edit">
                ✏ Editar
              </Link>

              <button
                className="btn-delete"
                onClick={() => deleteTask(task.id)}
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