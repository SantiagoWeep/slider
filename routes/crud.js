const express = require('express');
const router = express.Router();

// Middleware de autenticación
router.use((req, res, next) => {
  if (req.session.authenticated) {
    return next();
  }
  res.redirect('/login');
});

// Ruta de CRUD
router.get('/', (req, res) => {
  res.render('index'); // Renderiza index.ejs
});

module.exports = router;
