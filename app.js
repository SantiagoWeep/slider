const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuración de Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración del middleware de sesión
app.use(session({
  secret: 'mi_clave_secreta',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 } // 1 hora en milisegundos
}));

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', require('./routes/auth'));
app.use('/crud', require('./routes/crud')); // Ruta para /crud

// Ruta de inicio
app.get('/', (req, res) => {
  res.redirect('/crud'); // Redirige a /crud por defecto
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
