import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NovaTarefa from "./pages/NovaTarefa";
import EditarTarefa from "./pages/EditarTarefa";
import Usuarios from "./pages/Usuarios";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/nova-tarefa"element={<ProtectedRoute><NovaTarefa /></ProtectedRoute>} />
        <Route path="/editar-tarefa"element={<ProtectedRoute><EditarTarefa /></ProtectedRoute>} />
        <Route path="/usuarios"element={<ProtectedRoute><Usuarios /></ProtectedRoute>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;