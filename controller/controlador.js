const playitBD = require('../database/models/index'); // Agarra la base de datos
const bcrypt = require('bcryptjs'); // Comando para incriptar la data


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

      users:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque los usuarios
        res.render('users')
      },

      userdetails:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque sus datos
        res.render('userDetail')
      },

      myReviews:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque sus reviews
        res.render('myReviews')
      },

    registration: (req,res)=>{ //ESTO ES REGISTRACION
        // Estoy creando un nuevo usuario en la base de datos con la informacion que el usuario completo en el registration. 
        let passEncriptada = bcrypt.hashSync(req.body.password, 10); // Incripta los datos para usar en la pass
           let usuario= {
               name: req.body.user, // Esto toma el name que el usuario completo en el form de registration
               email: req.body.email,
               password:passEncriptada, // Guarda la password encriptada.
               birthdate: req.body.date,
           }
           playitBD.usuarios.create(usuario) //estoy creando usuarios(let dentro de registration) en mi base de datos (playiBD esta definida arriba)
           res.redirect("/playit/home")   //cuando apretas submit nos lleva a home
     
        }
    }  


module.exports = controlador;