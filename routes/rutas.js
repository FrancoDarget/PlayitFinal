var express = require('express');
var router = express.Router();
let controlador = require("../controller/controlador") // "controlador" es el nombre de la variable. Se vincula con la pagina de controladores dentro de la carpeta "controller"

router.get('/home', controlador.home); // Busca del objeto literal "controlador" el item home

router.get('/genre', controlador.genre); // Busca del objeto literal "controlador" el item genre

router.get('/movies', controlador.movies); // Busca del objeto literal "controlador" el item movies

router.get('/search', controlador.search); // Busca del objeto literal "controlador" el item search

router.get('/favorite', controlador.favorite); // Busca del objeto literal "controlador" el item favorite

router.get('/detail', controlador.detail); // Busca del objeto literal "controlador" el item detail

router.post('/registration', controlador.registration); // Agarra los datos que el usuario llena en el registration

router.get('/registrate', controlador.registrate); // Busca la pagina registrate

router.get('/users', controlador.users); // Busca del objeto literal "controlador" el item usuarios

router.get('/listadoUsuarios', controlador.resultadoUsuarios) // Postea los usuarios en dicha ruta

router.get('/usersdetails/:id', controlador.userdetails); // Busca del objeto literal "controlador" el item usuerdetails

router.post('/registrate', controlador.generoFavorito);

router.get('/logout', controlador.logout);

router.get('/myreviews', controlador.myReviews); // Busca del objeto literal "controlador" el item myReviews

router.get('/login', controlador.login); // Busca del objeto literal "controlador" el item myReviews

router.post('/loginPost', controlador.loginPost) 

router.post ('/resenas', controlador.nuevaResena);

router.get ('/edit/:id', controlador.editar);

router.post('/edit/:id', controlador.editacionResena);

router.get('/delete/:id', controlador.delete);

router.post('/delete/:id', controlador.deletePost);

router.get('/resenasOrdenadas', controlador.resenasOrdenadas);

router.get ('/resenasOrdenadas/masPuntuadas', controlador.masPuntuadas); 

router.get ('/resenasOrdenadas/peorPuntuadas', controlador.peorPuntuadas); 

router.get ('/resenasOrdenadas/latestReviews', controlador.latestReviews); 


module.exports = router; // Exporta el archivo de rutas para ser requerido en otras 




