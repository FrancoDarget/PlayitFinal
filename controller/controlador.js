const playitBD = require('basededatos'); // Agarra la base de datos
const bcrypt = require('bcryptjs'); // Comando para incriptar la data
let passEncriptada = bcrypt.hashSync(req.body.formlogin.password, 10); // Incripta los datos para usar en la pass

// Controlador: Objeto literal que tiene todos los controladores de la ruta. 
let controlador = {
    
    home:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque home
        res.render('home')
    },

    genre:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque genre
        res.render('genre')
    },

    movies:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque movies que esta en genre
        res.render('genre#movies')
    },

    search:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque search
       res.render('search')
    },

    favorite:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque favorite
      res.render('favorite')
    },

    detail:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque el detalle de una pelicula
        res.render('detail')
      },

    registration: (req,res)=>{ //ESTO ES REGISTRACION
       if(errores.length>0){
           res.send ("HAY ERRORES") // Si hay errores en los datos completados por el usuario, salta un cartel de ERROR
       } 
       else{ // Estoy creando un nuevo usuario en la base de datos con la informacion que el usuario completo en el registration. 
           playitBD.usuarios.create({
               name: req.body.formlogin.name, // Esto toma el name que el usuario completo en el form de registration
               email: req.body.formlogin.email,
               password:passEncriptada, // Guarda la password encriptada.
               birthdate: req.body.formlogin.date,
           }) 
       
        }
    }  
}

module.exports = controlador;