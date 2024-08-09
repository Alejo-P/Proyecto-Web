import { Link } from "react-router-dom"
import Images from "../assets/images"

const NavBar = () => {
  return (
    <div className="contenedor-header">
        <header>
            <div className="logo">
                <img src={Images.logo} alt=""/>   
            </div>
        
            <nav id="nav">
                <ul>
                    <Link to="#inicio">Inicio</Link>
                    <Link to="#acerca">Acerca de Nosostros</Link>
                    <Link to="#servicios">Servicios</Link>
                    <Link to="#contacto">Contactanos</Link>
                </ul>
            </nav>
            <div className="nav-responsive">
                <i className="fa-solid fa-bars"></i>
            </div> 
            <div className="Botones">
                <Link to="/login" ><span>Iniciar Sesión</span> </Link>
                <Link to="/register" ><span>Registrarse</span> </Link>
            </div>
        </header>
    </div>
  )
}

export default NavBar