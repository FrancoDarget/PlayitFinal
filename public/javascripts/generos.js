window.onload = function(){

  /* Header y Footer */




  document.getElementById('user2').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex'
  })

  document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none'
  })


  document.getElementById('hamburguer').addEventListener('click', function(){
    document.getElementById('hamburguer').style.display = 'none'
    document.querySelector('.responsivo').style.display = 'flex'
  })

  document.querySelector('.cerrar').addEventListener('click', function(){
    document.querySelector('.responsivo').style.display = 'none'
    document.getElementById('hamburguer').style.display = 'flex'
  })

  document.getElementById('logoutbutton').addEventListener('click', function(){
    document.querySelector('.paginalogout').style.display = 'flex'
  })

  document.getElementById('nobutton').addEventListener('click', function(){
    document.querySelector('.paginalogout').style.display = 'none'
  })

  /* Header y Footer */

fetch("https://api.themoviedb.org/3/discover/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    console.log(datos);
    var peliculas = datos.results

    for (var i = 0; i < peliculas.length; i++) {
      document.querySelector(".contenedor-action").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
    }
  })

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var peliculas = datos.results
      console.log(peliculas);

      for (var i = 0; i < peliculas.length; i++) {
        document.querySelector(".contenedor-horror").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
      }
    })

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(datos) {
        var peliculas = datos.results
        console.log(peliculas);

        for (var i = 0; i < peliculas.length; i++) {
          document.querySelector(".contenedor-fantasy").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
        }
      })

      fetch("https://api.themoviedb.org/3/discover/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878")
        .then(function(respuesta) {
          return respuesta.json()
        })
        .then(function(datos) {
          var peliculas = datos.results
          console.log(peliculas);

          for (var i = 0; i < peliculas.length; i++) {
            document.querySelector(".contenedor-fiction").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
          }
        })

        fetch("https://api.themoviedb.org/3/discover/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18")
          .then(function(respuesta) {
            return respuesta.json()
          })
          .then(function(datos) {
            var peliculas = datos.results
            console.log(peliculas);

            for (var i = 0; i < peliculas.length; i++) {
              document.querySelector(".contenedor-drama").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
            }
          })

          fetch("https://api.themoviedb.org/3/discover/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80")
            .then(function(respuesta) {
              return respuesta.json()
            })
            .then(function(datos) {
              var peliculas = datos.results
              console.log(peliculas);

              for (var i = 0; i < peliculas.length; i++) {
                document.querySelector(".contenedor-crime").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original' + peliculas[i].poster_path + '" alt=""><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
              }
            })



  /*  for (var i = 0; i < 6; i++) {

      if (generos[i].name == "Action") {

      } */

}
