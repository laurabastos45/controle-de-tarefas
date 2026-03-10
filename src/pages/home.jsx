import checklistImage from '../assets/undraw_checklist_bwxa.svg';
import dashboardImage from '../assets/undraw_dashboard_p93p.svg';
 
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
            <button className="btn-primary">Começar agora</button>
            <button className="btn-secondary">Saiba mais</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={checklistImage} alt="Ilustração de controle de tarefas" />
          <img src={dashboardImage} alt="Ilustração de dashboard" />
        </div>
      </section>
    </main>
  );
}

export default Home;