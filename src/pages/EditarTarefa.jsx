import { Link } from "react-router-dom";

function EditarTarefa() {
  return (
    <main className="nova-tarefa">
      <div className="task-form-card">
        <h1>Editar Tarefa</h1>
        <p>Atualize as informações da tarefa.</p>

        <form className="task-form">
          <input type="text" defaultValue="Estudar React" />

          <textarea defaultValue="Revisar componentes, props e useState."></textarea>

          <select defaultValue="Pendente">
            <option>Pendente</option>
            <option>Em andamento</option>
            <option>Concluída</option>
          </select>

          <select defaultValue="Alta">
            <option>Baixa</option>
            <option>Média</option>
            <option>Alta</option>
          </select>

          <div className="task-form-actions">
            <Link to="/dashboard" className="btn-primary">
              Salvar alterações
            </Link>

            <Link to="/dashboard" className="btn-secondary">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditarTarefa;