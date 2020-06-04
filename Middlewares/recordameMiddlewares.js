//! Un Middleware es como un controlador
const modulo = require('../modulos/moduloLogin');

function recordameMiddleware(req, res, next) {
	next();
	if (
		(req.cookies.recordame != undefined) &
		(req.session.usuarioLogeado == undefined)
	) {
		//TODO acordarse que el undefined inidcia que el checkbox esta checkeado!! Si hay cookies pero todavia no se abrio la sesion
		modulo.buscarPorEmail(req.cookies.recordame).then((resultado) => {
			console.log(resultado);
			//! Si existe el usuario, esto me lleva al login general
			req.session.usuarioLogeado = resultado.email;
			//?Tendria que modificar el req.body.emaillogin
		});
	}
}

module.exports = recordameMiddleware;

