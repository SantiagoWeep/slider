const express = require('express');
const router = express.Router();

// Ruta de login
router.get('/login', (req, res) => {
  res.render('login', { errorMessage: req.session.errorMessage });
});

router.post('/login', (req, res) => {
  if (req.body.username === 'estacion' && req.body.password === 'asd123$') {
    req.session.authenticated = true;
    req.session.errorMessage = null;
    res.redirect('/crud');
  } else {
    req.session.errorMessage = 'Usuario o clave incorrectos';
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
