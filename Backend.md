<h1>Especificaciones de la logica del lado del servidor</h1>

<p>
    Esta parte del proyecto se encarga de la comunicación con la base de datos mediante las dependencias <code>mysql2</code> y <code>sequelize</code> usando un servidor creado con <code>express</code> en Node.js.
</p>

<h2>Estructura de la base de datos</h2>

<p>
    La estructura de la base de datos esta conformada por las siguientes teblas:
</p>

<div align="center">
    <img 
    src="https://github.com/Alejo-P/Proyecto-Web/assets/150528715/0a2e135e-6a2d-40fc-902f-acff7c1ccfff" 
    alt="Estructura de la base de datos"
    style="width: 80%; height: auto; margin: 0 auto; display: block;"
    >
</div>

<h2>Rutas de la API</h2>

<p>
    Las rutas de la API se encuentran en la carpeta <code>.src/routers/</code> y se dividen en varios archivos que permiten la interacción con la base de datos.:
</p>
<h3>Obtener todos los clientes registrados:</h3>
<pre><code>GET  /api/clients</code></pre>

<p>Esta ruta obtiene todos los usuarios registrados en la base de datos, la respuesta que se espera obtener es en el siguiente formato:</p>

<pre><code>
[
  {
    "Id_Cliente": 1,
    "Nombres": "nombre_cliente",
    "Apellidos": "apellidos_cliente",
    "Cédula": 1234567890,
    "Contacto": 1234567890,
    "Correo": "correo_cliente",
    "Fecha_Nacimiento": "2021-10-10",
    "Contraseña": "Contraseña_encritada",
    "Dirección": "Dirección",
    "Tipo_Usuario": 3
    },
    ...]
  </code></pre>

<h3>Obtener un cliente por su ID:</h3>

<pre><code>GET  /api/clients/:id</code></pre>

<p>Esta ruta obtiene un cliente por su ID, la respuesta que se espera obtener es en el siguiente formato:</p>

<pre><code>
{
  "Id_Cliente": 1,
  "Nombres": "nombre_cliente",
  "Apellidos": "apellidos_cliente",
  "Cédula": 1234567890,
  "Contacto": 1234567890,
  "Correo": "correo_cliente",
  "Fecha_Nacimiento": "2021-10-10",
  "Contraseña": "Contraseña_encritada",
  "Dirección": "Dirección",
  "Tipo_Usuario": 3
}
</code></pre>
