import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'


function App() {

  return (
    <Router>
      <NavBar/>
      <Routes path="/">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<HomePage/>}/>
        <Route path="/register" element={<HomePage/>}/>
      </Routes>
      <h1>Hola a todos</h1>
    </Router>
  )
}

export default App
