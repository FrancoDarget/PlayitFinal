// NUEVA VERSION

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
          where:{ idPelicula: idPelicula}, // uno es mi nombre de la columna de mi bd, el otro es la var que cree arriba 
        include:[{association: 'users'}] } // incluyo la asociacion que une tablas, creada en el modelo
    
      )
    .then(function(resenas){
      var idPelicula = req.query.idPelicula    
    res.render("detail", {resenas: resenas, idPelicula:idPelicula})  //mando a la vista las variables creadas
    })

  },
    
        
       users:(req,res)=>{
        res.render('users') // te lleva al buscador de usarios, por ruta x get
        },

     
        resultadoUsuarios: (req,res)=>{ // Buscador de Usuarios
          var busqueda = req.query.nombreUsuario // Saca de la url lo que el usuario escribio en el buscador
          playitBD.usuarios.findAll({ // buscame en la base de datos, tabla de usuarios ..
            where:{
              [OP.or]:[
                {name:{[OP.like]: "%"+ busqueda + "%"}},  // por nombre O por email, si existe con cualquiera de las dos
                {email: {[OP.like]:"%"+ busqueda + "%"}}
              ]
            }
          })
          .then (function(resultado){ // resultado es lo que trae de la bd el find all
            console.log(resultado)
            if (resultado.length >0 ){
            res.render("resultados", {resultado:resultado}) }// si hay un resultado mandame a la vista (donde voy a ver todos os usuarios que matchean con mi busqueda)
            else{
              
              res.redirect ('/playit/users') // sino hay resultado volveme a cargar la pag asi busco otra cosa
            }
              
            
          })
      },
     

      userdetails:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque sus datos
        playitBD.usuarios.findByPk (req.params.id)  // busca por Primary Key (id) en la tabla usuarios, 
                                                    // donde el id tiene que ser igual al que esta en la url (ruta x get)
        .then(resultado=>{
        res.render('userDetail', {resultado:resultado})}) // mando a la vista el rtdo del fin by pk
      },

      registrate:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque registrarse
        res.render('registrate')
      },

      myReviews:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque sus reviews
        if(req.session.usuarioLogeado){   // si hay un usuario logeado ( usuarioLogeado esta definido en app js)
          modulo.buscarPorEmail(req.session.usuarioLogeado) // buscame por mail del que se logeo (funcion creada en el modulo de login)
          .then(resultado=>{
            console.log(resultado)
            playitBD.resenas.findAll({  // busca en la tabla de resenas 
                where:[ {idUsuario: resultado.id }] //todos los que el id del usuario sea igual al que busque arriba con el find all
              })
             .then(resultsResenas=>{ //me trae todas las resenas de ese usuario
              console.log (resultsResenas)
               res.render('myReviews', {resultado:resultado,resultsResenas:resultsResenas})
              })

          })
        }
        
      },

      login:  (req, res) =>{ // Es la pagina que muestra el form de login, ruta por get
        
        res.render('login')
      },
      loginPost: (req,res)=>{ // ruta por post
        modulo.validar(req.body.email, req.body.password) // uso funcion del modulo de log in, uso req.body porque es una ruta por POST para agarrar los datos del form
        .then(resultado=>{  // si el usuario existe en mi bd: 
          console.log(resultado)
          if(resultado != null){
            req.session.usuarioLogeado = req.body.email // uso log in general, me guarda en la sesion el email del usuario
            if (req.body.recordame != undefined) { // si el usuario toco el cuadrado de recordame:
              res.cookie('recordame', req.session.usuarioLogeado, { // uso cookies
                maxAge: 300000    
                //! Esto deja abierta la sesion por 5 minutos, aunque cierres la pestana
              });
            }
            res.redirect('/playit/myreviews') // te redirige a tus reviews una ves que te logueaste
           
            

            
          }
          else{
            
              res.redirect('/playit/registrate') // si no existis en la bd te manda a registrarte
          }
        })

      },
      logout: function (req, res) { // si apretas el boton de log out
        req.session.destroy(); // se te cierra la sesion
        res.redirect('/playit/home'); // te redirige a home
      },
    
    registration: (req,res)=>{ //ESTO ES REGISTRACION
        // Estoy creando un nuevo usuario en la base de datos con la informacion que el usuario completo en el registration. 
        let passEncriptada = bcrypt.hashSync(req.body.password, 10); // Incripta los datos para usar en la pass
           let usuario= {
               name: req.body.user, // Esto toma el name que el usuario completo en el form de registration
               email: req.body.email,
               password:passEncriptada, // Guarda la password encriptada.
               birthdate: req.body.date,
               generoFavorito: req.body.generoFavorito,
               peliculaFavorita: req.body.peliculaFavorita,
           }
           playitBD.usuarios.create(usuario) //estoy creando usuarios(let dentro de registration) en mi base de datos (playiBD esta definida arriba)
           res.redirect("/playit/login")   //cuando apretas submit nos lleva a log in
     
        },
        generoFavorito: function(req,res){
          var generoFavorito= req.body.generoFavorito 
        },
      nuevaResena: (req,res)  =>{
        if(req.session.usuarioLogeado){ // si hay una sesion abierta: 
          modulo.buscarPorEmail(req.session.usuarioLogeado)  //busca un usuario por email en la bd (del usuario que ya esta logueado)
          .then(resultado=>{  
          console.log(resultado) //me muestra los datos de la bd del usuario encontrado
        
          if(resultado != null){ // si existe un resultado, crea la resena
          let nuevaResena= {   
            resena: req.body.comment, //saca la info de lo q competa el usuario. req.body porque el form esta por POST
            puntaje: req.body.puntaje, // saca la info de lo q completa el usuario
            idUsuario: resultado.id, //lo saca de los datos que me trajo mi base de datos cuando busque x email
            idPelicula: req.body.idPelicula, //idPelicula es un campo en hidden
            createdAt: playitBD.sequelize.literal("CURRENT_DATE"),// para que se guarde la fecha de hoy
            updatedAt: playitBD.sequelize.literal("CURRENT_DATE") , // para que guarde la fecha de hoy
          }
          console.log (nuevaResena) // muestra en consola lo que acabo de crear
          playitBD.resenas.create(nuevaResena) //crea la resena en la tabla de la bd cn lo que escribio el usuario
          .then ( function (){
            var idPelicula = req.body.idPelicula // lo mismo que antes, es un campo en hidden
            return res.redirect('/playit/detail?idPelicula='+idPelicula)}) //te redirecciona al detalle de esa pelicula (con tu resena)
        }

          else{
            return res.send ("hay un error") 
          }
          
        })
      }
        
      

      },
      editar: (req,res)=>{ // para editar un resena en My Reviews 
       modulo.buscarPorEmail(req.session.usuarioLogeado)  //busca un usuario por email en la bd (del usuario que ya esta logueado)
       .then(results=>{
         var dataUsuario= results
         playitBD.resenas.findByPk(req.params.id) // busca por primary key
           
         .then(resultado=>{
           if(resultado.idUsuario == dataUsuario.id)
            res.render ('edit',{resultado:resultado})
         })
       })

      },
      editacionResena: (req,res)=>{

     
            playitBD.resenas.update({
              resena: req.body.comment,
              puntaje:req.body.puntaje,
              updatedAt: playitBD.sequelize.literal("CURRENT_DATE") ,
            }, {
              where: {
                id: req.params.id,
              }
            })
            .then( r => {
              return res.redirect('/playit/myreviews')
            })

            .catch( e => console.log(e))

          },
          
         
      delete: (req,res)=>{
        modulo.buscarPorEmail(req.session.usuarioLogeado) 
        .then(results=>{
          var dataUsuario= results
          playitBD.resenas.findByPk(req.params.id)
            
          .then(resultado=>{
            if(resultado.idUsuario == dataUsuario.id)
             res.render ('delete',{resultado:resultado})
          })
        })

       },
 
      deletePost: (req,res)=>{
        
          
         playitBD.resenas.destroy( {
              where: {
                id: req.params.id,
              }
            })
            .then( r => {
              res.redirect('/playit/myreviews')
            })

            .catch( e => console.log(e))

         

      },
      resenasOrdenadas:(req,res)=>{
        res.render('resenasOrdenadas')

      },
      masPuntuadas: (req,res)=>{
        playitBD.resenas.findAll(
          {order:[['puntaje', 'DESC']],
          limit: 15}
        )
        .then(resultados=>{
          res.render('masPuntuadas', {resultados:resultados})
        })
      }, 
      peorPuntuadas: (req,res)=>{
        playitBD.resenas.findAll(
          {order:[['puntaje', 'ASC']],
          limit: 15}
        )
        .then(resultados=>{
          res.render('peorPuntuadas', {resultados:resultados})
        })
      },
      latestReviews: (req,res)=>{
        playitBD.resenas.findAll(
          {order:[['updatedAt', 'DESC']],
          limit: 15}
        )
        .then(resultados=>{
          res.render('latestReviews', {resultados:resultados})
        })
      }

          

        

      



        
    }  


module.exports = controlador;