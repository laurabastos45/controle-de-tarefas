function Home() {
  return (
    <div style={{ 
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <h1>Controle de Tarefas</h1>
      <p>Organize suas atividades diárias de forma simples.</p>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Começar
      </button>
    </div>
  );
}

export default Home;