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

      // A tener en cuenta: Una cosa es el register (Me va a insertar la data en tabla de usuarios).
      // Despues esta el login. Lo vamos a hacer mas local. Modulo con 3 metodos para chequear datos en la base.
      // Voy a poder meterme y editar resenas. Aprieto click para editar la resena, y me va a pedir la verificacion. Esa verificacion corre por modulo de login. 

    login: (req,res)=>{ //ESTO ES REGISTRACION
       if(errores.length>0){
           res.send ("HAY ERRORES") // Si hay errores en los datos completados por el usuario, salta un cartel de ERROR
       } 
       else{
           playitBD.tablaUsuarios.create(usuario) // Estoy creando una fila en nuestra BD en la tabla tablaUsuarios con los datos del form del log in
           req.body.registracion // Esto toma la info que el usuario completo en el form de log in
       
        }
    }  
}

module.exports = controlador;