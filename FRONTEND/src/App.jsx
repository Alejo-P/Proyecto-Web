import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import { AuthProvider } from './context/AuthContext'

//TODO: Mejorar el diseño de la pagina
//TODO: Implementar un dashboard
//TODO: Implementar la funcionalidad de logueo y registro de usuarios
//TODO: Agregar elementos faltantes al servidor como controladores para administradores y clientes
//TODO: Mejorar la pagina de error 404
//TODO: Reorganizar mejor el proyecto

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes path="/">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App