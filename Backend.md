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
    style="width: 60%; height: auto; margin: 0 auto; display: block;"
    >
</div>

<h2>Rutas de la API</h2>

<ul><li>Rutas para clientes</li></ul>

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

<h3>Eliminar un cliente registrado:</h3>

<pre><code>DELETE  /api/clients/:id</code></pre>

<p>Esta ruta elimina un cliente por su ID</p>

<h3>Actualizar un cliente registrado:</h3>

<pre><code>PUT  /api/clients/:id</code></pre>

<p>Esta ruta actualiza un cliente por su ID</p>

<h3>Registrar un nuevo cliente:</h3>

<pre><code>POST  /api/clients</code></pre>

<p>Esta ruta registra un nuevo cliente en la base de datos</p>

<strong>Nota:</strong>

<p>Para las rutas de los clientes se espera recibir un objeto JSON con los siguientes campos:</p>

<pre><code>
{
  "Nombres": "nombre_cliente",
  "Apellidos": "apellidos_cliente",
  "Cédula": 1234567890,
  "Contacto": 1234567890,
  "Correo": "correo_cliente",
  "Fecha_Nacimiento": "2021-10-10",
  "Contraseña": "Contraseña",
  "Dirección": "Dirección",
  "Tipo_Usuario": 3
}
</code></pre>

<ul><li>Rutas para vehiculos</li></ul>

<h3>Obtener todos los vehiculos registrados:</h3>

<pre><code>GET  /api/vehicles</code></pre>

<p>Esta ruta obtiene todos los vehiculos registrados en la base de datos, la respuesta que se espera obtener es en el siguiente formato:</p>

<pre><code>
[
  {
    "Placa": "placa_vehiculo",
    "Marca": "marca_vehiculo",
    "Modelo": "modelo_vehiculo",
    "Año": 2021,
    "Color": "color_vehiculo",
    "Id_Cliente": 1
  },
  ...
]
</code></pre>

<h3>Obtener un vehiculo por su placa:</h3>

<pre><code>GET  /api/vehicles/:placa</code></pre>

<p>Esta ruta obtiene un vehiculo por su placa, la respuesta que se espera obtener es en el siguiente formato:</p>

<pre><code>
{
  "Placa": "placa_vehiculo",
  "Marca": "marca_vehiculo",
  "Modelo": "modelo_vehiculo",
  "Año": 2021,
  "Color": "color_vehiculo",
  "Id_Cliente": 1
}
</code></pre>

<h3>Eliminar un vehiculo registrado:</h3>

<pre><code>DELETE  /api/vehicles/:placa</code></pre>

<p>Esta ruta elimina un vehiculo por su placa</p>

<h3>Actualizar un vehiculo registrado:</h3>

<pre><code>PUT  /api/vehicles/:placa</code></pre>

<p>Esta ruta actualiza un vehiculo por su placa</p>

<h3>Registrar un nuevo vehiculo:</h3>

<pre><code>POST  /api/vehicles</code></pre>

<p>Esta ruta registra un nuevo vehiculo en la base de datos</p>

<strong>Nota:</strong>

<p>Para las rutas de los vehiculos se espera recibir un objeto JSON con los siguientes campos:</p>

<pre><code>
{
  "Placa": "placa_vehiculo",
  "Marca": "marca_vehiculo",
  "Modelo": "modelo_vehiculo",
  "Año": 2021,
  "Color": "color_vehiculo",
  "Id_Cliente": 1
}
</code></pre>

<ul><li>Rutas para mantenimientos</li></ul>

<h3>Obtener todos los mantenimientos registrados:</h3>

<pre><code>GET  /api/maintenances</code></pre>

<p>Esta ruta obtiene todos los mantenimientos registrados en la base de datos, la respuesta que se espera obtener es en el siguiente formato:</p>

<pre><code>
[
  {
    "Placa": "placa_vehiculo",
    "Fecha_Mantenimiento: "2021-10-10",
    "Descripcion": "descripcion_mantenimiento",
    "Costo": 100000,
    "Garantia": "si",
    "Fecha_Siguiente_Mantenimiento": "2021-10-10",
  },
  ...
]
</code></pre>

<h3>Obtener un mantenimiento por su ID:</h3>

<pre><code>GET  /api/maintenances/:id</code></pre>

<p>Esta ruta obtiene un mantenimiento por su ID, la respuesta que se espera obtener es en el siguiente formato:</p>

<pre><code>
{
  "Placa": "placa_vehiculo",
  "Fecha_Mantenimiento: "2021-10-10",
  "Descripcion": "descripcion_mantenimiento",
  "Costo": 100000,
  "Garantia": "si",
  "Fecha_Siguiente_Mantenimiento": "2021-10-10",
}
</code></pre>

<h3>Eliminar un mantenimiento registrado:</h3>

<pre><code>DELETE  /api/maintenances/:id</code></pre>

<p>Esta ruta elimina un mantenimiento por su ID</p>

<h3>Actualizar un mantenimiento registrado:</h3>

<pre><code>PUT  /api/maintenances/:id</code></pre>

<p>Esta ruta actualiza un mantenimiento por su ID</p>

<h3>Registrar un nuevo mantenimiento:</h3>

<pre><code>POST  /api/maintenances</code></pre>

<p>Esta ruta registra un nuevo mantenimiento en la base de datos</p>

<strong>Nota:</strong>

<p>Para las rutas de los mantenimientos se espera recibir un objeto JSON con los siguientes campos:</p>

<pre><code>
{
  "Placa": "placa_vehiculo",
  "Fecha_Mantenimiento: "2021-10-10",
  "Descripcion": "descripcion_mantenimiento",
  "Costo": 100000,
  "Garantia": "si" o "no",
  "Fecha_Siguiente_Mantenimiento": "2021-10-10",
}
</code></pre>