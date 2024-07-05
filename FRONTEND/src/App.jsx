import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'


function App() {

  return (
    <Router>
      <NavBar/>
      <Routes path="/">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
