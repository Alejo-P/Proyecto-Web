import { useState } from 'react';
import libsImages from '../assets/images';
import { useNavigate, Link } from 'react-router-dom';

const RegistrationForm = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    usuario: '',
    cedula: '',
    correo: '',
    contrasena: '',
    contacto: '',
    c_contrasena: '',
    fecha: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contrasena !== formData.c_contrasena) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Aquí iría el código para enviar los datos al servidor
    // Por ejemplo, usando fetch o axios para hacer una solicitud POST

    // Si la solicitud es exitosa, redirige o muestra un mensaje
    // Si ocurre un error, maneja el error apropiadamente

    console.log('Formulario enviado:', formData);
    setError(''); // Limpiar el error
  };

  return (
    <div className="Registro text-center">
      <div className="row">
        <div className="col">
          <h1><em>Bienvenid@ </em></h1>
          <img className="logo-forms" src={libsImages.logo} alt="Logo" />
        </div>
        <div className="col">
          <form onSubmit={handleSubmit} className="formulario-ingreso">
            <h2>Registro de usuarios</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
              <div className="col">
                <label htmlFor="usuario">Usuario: </label><br />
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Nombre de usuario"
                  value={formData.usuario}
                  onChange={handleChange}
                  required
                /><br />
              </div>
              <div className="col">
                <label htmlFor="cedula">Cedula:</label><br />
                <input
                  type="number"
                  id="cedula"
                  name="cedula"
                  placeholder="Numero de cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  required
                /><br />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="correo">Correo</label><br />
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="ejemplo@gmail.com"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                /><br />
              </div>
              <div className="col">
                <label htmlFor="contrasena">Contraseña: </label><br />
                <input
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  placeholder="Ingresa tu contraseña"
                  value={formData.contrasena}
                  onChange={handleChange}
                  required
                /><br />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="contacto">Contacto</label><br />
                <input
                  type="number"
                  id="contacto"
                  name="contacto"
                  placeholder="Número de telefono"
                  value={formData.contacto}
                  onChange={handleChange}
                  required
                /><br />
              </div>
              <div className="col">
                <label htmlFor="c_contrasena">Confirmar contraseña: </label><br />
                <input
                  type="password"
                  id="c_contrasena"
                  name="c_contrasena"
                  placeholder="Ingresar tu contraseña"
                  value={formData.c_contrasena}
                  onChange={handleChange}
                  required
                /><br />
              </div>
            </div>
            <label htmlFor="fecha">Fecha de nacimiento:</label><br />
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            /><br />
            <div id="caja-elementos">
              <Link to={"/login"} >¿Ya tienes cuenta?</Link>
            </div>
            <div className="botones">
              <button type="submit">Registrarse</button>
              <button
                type="button"
                className="cancelar"
                onClick={() => navigate('/')}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;