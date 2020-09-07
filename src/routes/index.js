const express = require ('express');
const router = express.Router();     // este modulo de expres sirve para tener multliples rutas y mantenerlas en archivos por separados
// routes
router.get('/', (req, res) => {
    res.render('index.html',{title:'Wed de exito'});
      // res.sendfile(path.join(__dirname, '/views/index.html'));
  //    res.send ('hello World');
  });
  router.get('/contact', (req, res) => {
    res.render('contact.html',{title: 'contact page'});
});


// POR CADA VEZ QUE QUIERAS TENER UNA PAGINA DEBES TENER UNA RUTA 

module.exports = router;