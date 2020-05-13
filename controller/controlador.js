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
}

module.exports = controlador;