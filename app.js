var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session= require('express-session');
var recordameMiddleware= require('./Middlewares/recordameMiddlewares');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var ruta = require('./routes/rutas'); // Ruta es el nombre de la variable que trae el archivo "ruta" que se encuentra en la carpeta "routes".

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//!Esto es para el login
app.use(session({ secret: 'session' }));
//TODO esto es para la funcion
app.use(function (req, res, next) {
	res.locals = { usuarioLogeado: req.session.usuarioLogeado };
	next();
});
app.use(recordameMiddleware); //COOKIES



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.urlencoded({ extended: false} )); //lineas para que funcione el metodo post
app.use(express.json()); //lineas para que funcione el metodo post


app.use('/playit', ruta); // Cuando uno busca localhost/playit se muestra la pagina. Esto es gracias a que esta conectado a la variable "ruta" de la linea 10.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
