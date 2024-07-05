import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../assets/images'

const LoginPage = () => {
  return (
    <div className="container text-center"> 
        <div className="row">
            <div className="col">
                <h1><em>Bienvenid@ </em></h1>
                <img className="logo-forms" src={Images.logo} alt="Logo"/>
        
            </div>
            
            <div className="col"> 
                <form action="" className="formulario-ingreso" method="post">
                    <h2>Inicio de sesión</h2> <br/>
                    <select id="miMenuDesplegable" name="tipo_usuario">
        
                        <option value="opcion1">Seleccione el tipo de usuario..</option>
                        <option value="Clientes">Clientes</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Asesor de servicio">Asesor de servicio</option>
                        <option value="Técnico">Técnico</option>
                    </select><br/>
                    
                    <label htmlFor="usuario">Email: </label><br/>
                    <input type="text" id="usuario" name="usuario" placeholder="Ingresa tu nombre de usuario" required/><br/>
                    
                    <label htmlFor="contrasena">Contraseña: </label><br/>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Ingresa tu contrasena" required/><br/>
                    
                    <div id="caja1"> <br/>
                        <Link to='/register'>
                        ¿Aun no tienes cuenta?
                        </Link><br/>
                    </div>
                    <div id="caja2"> <br/>
                        <a href="RecuperarClave.php" id="olvidasteContrasena">¿Olvidaste la contraseña?</a>
                    </div>
            
                    <div className="botones"> 
                        <button>Ingresar</button>
                        <Link to="/" className="cancelar">
                            <button>Cancelar</button>      
                        </Link>
                    </div>                   
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage