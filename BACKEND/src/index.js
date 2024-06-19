import app from "./server.js";

// Inicializacion del servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port http://localhost:${app.get('port')}`);
});