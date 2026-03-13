import checklistImage from "../assets/undraw_checklist_bwxa.svg";
import dashboardImage from "../assets/undraw_dashboard_p93p.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      <section className="hero">
        <div className="hero-text">
          <span className="hero-badge">Organização e produtividade</span>
          <h1>Gerencie suas tarefas de forma simples e eficiente</h1>
          <p>
            Organize atividades diárias, acompanhe prazos e mantenha seu foco
            no que realmente importa.
          </p>

          <div className="hero-buttons">
            <Link to="/dashboard" className="btn-primary">Começar agora</Link>
            <button className="btn-secondary">Saiba mais</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={checklistImage} alt="Checklist de tarefas" />
          <img src={dashboardImage} alt="Dashboard de tarefas" />
        </div>
      </section>


      <section className="features">
        <h2>Funcionalidades do sistema</h2>
        <p className="features-subtitle">
          Tudo que você precisa para organizar sua rotina.
        </p>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Organize tarefas</h3>
            <p>
              Cadastre e gerencie suas atividades diárias em um único lugar.
            </p>
          </div>

          <div className="feature-card">
            <h3>Defina prioridades</h3>
            <p>
              Classifique tarefas por importância e mantenha foco no essencial.
            </p>
          </div>

          <div className="feature-card">
            <h3>Acompanhe o progresso</h3>
            <p>
              Visualize quais tarefas estão pendentes, em andamento ou concluídas.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;