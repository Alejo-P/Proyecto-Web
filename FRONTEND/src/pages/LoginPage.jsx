import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Images from '../assets/images'
import DropDownList from '../components/DropDownList'
import { AuthContext } from '../context/AuthContext'

const URL = 'http://localhost:3000/api/getAsUsers'

const LoginPage = () => {
    const { user, setUser, login } = useContext(AuthContext)
    const [asUsersList, setAsUsersList] = useState([])
    const navigate = useNavigate()
    const [form, setForm] = useState({
        tipo: "Administrador",
        usuario: '',
        contrasena: ''
    })

    const handleChage = (e) => {
        console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const estado = await login(form)
            if(estado) navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await axios.get(URL)
                const data = await response.data
                const lista = data.map((asUser) => asUser.Tipo_Usuario)
                setAsUsersList(lista)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [])

  return (
    <div className='ventanaLogin'>
        <div className="container text-center"> 
            <div className="divLogo">
                <h1><em>Bienvenid@ </em></h1>
                <img className="logo-forms" src={Images.logo} alt="Logo"/>
            </div>
            <div className = "formLogin">
                <form action="" className="formulario-ingreso" method="post">
                    <h2>Inicio de sesión</h2> <br/>
                    <label htmlFor="tipoUsuario">Tipo de Usuario: </label><br/>
                    {asUsersList.length > 0 ? (
                        <DropDownList 
                        elements={asUsersList}
                        handleSelection={handleChage}/>
                        ) : (
                        <p>Cargando...</p>
                        )
                    }
                    <br/>
                    <label htmlFor="usuario">Email: </label><br/>
                    <input 
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Ingresa tu nombre de usuario"
                        required
                        onChange={handleChage}
                    /><br/>
                    
                    <label htmlFor="contrasena">Contraseña: </label><br/>
                    <input 
                        type="password" 
                        id="contrasena" 
                        name="contrasena" 
                        placeholder="Ingresa tu contrasena" 
                        required
                        onChange={handleChage}
                    /><br/>
                    
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