var express = require('express');
var router = express.Router();
let controlador = require("../controller/controlador") // "controlador" es el nombre de la variable. Se vincula con la pagina de controladores dentro de la carpeta "controller"

router.get('/home', controlador.home); // Busca del objeto literal "controlador" el item home

router.get('/genre', controlador.genre); // Busca del objeto literal "controlador" el item genre

router.get('/movies', controlador.movies); // Busca del objeto literal "controlador" el item movies

router.get('/search', controlador.search); // Busca del objeto literal "controlador" el item search

router.get('/favorite', controlador.favorite); // Busca del objeto literal "controlador" el item favorite

router.get('/detail', controlador.detail); // Busca del objeto literal "controlador" el item favorite

module.exports = router; // Exporta el archivo de rutas para ser requerido en otras paginas