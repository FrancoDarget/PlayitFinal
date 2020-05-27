const playitBD = require('../database/models/index'); // Agarra la base de datos
const bcrypt = require('bcryptjs'); // Comando para incriptar la data
const modulo = require('../modulos/moduloLogin'); // requiero el modulo de log in
const OP = playitBD.Sequelize.Op;




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
      var idPelicula = req.query.idPelicula  //agarra el id de la pelicula de la url
      playitBD.resenas.findAll( //pide que busque en la bd tds las resenas de la pelicula con ese id
        {
          where:{
              idPelicula: idPelicula, // uno es mi nombre de la columna de mi bd, el otro es la var que cree arriba
          }}
    
      )
    .then(function(resenas){
      var idPelicula = req.query.idPelicula    
    res.render("detail", {resenas: resenas, idPelicula:idPelicula})  //mando a la vista las variables creadas
    })

  },
      users:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque los usuarios
        res.render('users')
      },

      usersPost: (req,res)=>{
        var nombreUsuario = req.body.nombreUsuario // Agarra el input del buscador de usuarios que tiene de name "nombreUsuario" y lo guarda en una variable "nombreUsuario"
        console.log(nombreUsuario) // Imprime en consola lo que puso el usuario
        modulo.buscarPorName(nombreUsuario) // Chequea si el nombre insertado en el imput existe en la base de datos
        .then(resultado =>{  
          if(resultado != null){ // Si el resultado es distinto a null...
            res.send(resultado) // Imprime el resultado en consola
          }else{ // Si no...
            print('No existe') // Imprime que hubo un error
          }
        })
      },

      userdetails:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque sus datos
        res.render('userDetail')
      },

      myReviews:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque sus reviews
        res.render('myReviews')
      },

      login:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque sus reviews
        
        res.render('login')
      },
      loginPost: (req,res)=>{
        modulo.validar(req.body.email, req.body.password)
        .then(resultado=>{  
          console.log(resultado)
          if(resultado != null){
            res.redirect('/playit/myreviews')
          }
          else{
            res.redirect('/playit/home')
          }
        })

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
     
        },
      nuevaResena: (req,res)  =>{
        modulo.validar(req.body.email, req.body.password)  //valida lo que el usuario completa en el form
        .then(resultado=>{  
          console.log(resultado) //me muestra los datos de la bd del usuario
        
          if(resultado != null){ // si existe un resultado, crea la resena. Resultado esta definido en el mdulo de login
          let nuevaResena= {   
            resena: req.body.comment, //saca la info de lo q competa el usuario
            puntaje: req.body.puntaje, // saca la info de lo q completa el usuario
            idUsuario: resultado.id, //lo saca de los datos que me trajo mi base de datos
            idPelicula: req.body.idPelicula, //idPelicula esta definida arriba de todo
            createdAt: playitBD.sequelize.literal("CURRENT_DATE") // para que se guarde la fecha de hoy
          }
          console.log (nuevaResena)
          playitBD.resenas.create(nuevaResena) //crea la resena en la tabla de la bd cn lo que escribio el usuario
          .then ( function (){
            var idPelicula = req.body.idPelicula
            return res.redirect('/playit/detail?idPelicula='+idPelicula)}) //te redirecciona al detalle
        }

          else{
            return res.send ("hay un error")
          }
          
        })
        
      

      }

        
    }  


module.exports = controlador;