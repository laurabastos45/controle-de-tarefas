import { Link } from "react-router-dom";

function NovaTarefa() {
  return (
    <main className="nova-tarefa">
      <div className="task-form-card">
        <h1>Nova Tarefa</h1>
        <p>Preencha os dados para adicionar uma nova tarefa.</p>

        <form className="task-form">
          <input type="text" placeholder="Título da tarefa" />

          <textarea placeholder="Descrição da tarefa"></textarea>

          <select defaultValue="">
            <option value="" disabled>
              Selecione o status
            </option>
            <option>Pendente</option>
            <option>Em andamento</option>
            <option>Concluída</option>
          </select>

          <select defaultValue="">
            <option value="" disabled>
              Selecione a prioridade
            </option>
            <option>Baixa</option>
            <option>Média</option>
            <option>Alta</option>
          </select>

          <div className="task-form-actions">
            <Link to="/dashboard" className="btn-primary">
              Criar tarefa
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

export default NovaTarefa;