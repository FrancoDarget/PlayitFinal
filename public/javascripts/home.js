window.addEventListener('load' ,function(){

/* Header y Footer */

document.getElementById('user').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex'
})


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

// LOGIN

/* Cuando se ingresa algo, id= user2 i display none, pero el id=user2 p display block, con el innerhtml de lo que puso la persona */
/* Cuando no se ingresa nada, no se muestra el link a favoritos */

// LOGIN

fetch("https://api.themoviedb.org/3/movie/popular?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    var peliculas = datos.results
    console.log(peliculas);

    for (var i = 0; i < peliculas.length; i++) {
      document.querySelector(".contenedor-populares").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + peliculas[i].poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
    }
  })

  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var peliculas = datos.results
      console.log(peliculas);

      for (var i = 0; i < peliculas.length; i++) {
        document.querySelector(".contenedor-puntaje").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + peliculas[i].poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
      }
    })

    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(datos) {
        var peliculas = datos.results
        console.log(peliculas);

        for (var i = 0; i < peliculas.length; i++) {
          document.querySelector(".contenedor-proximamente").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + peliculas[i].poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
        }
      })

  /*  for (var i = 0; i < 6; i++) {

      if (generos[i].name == "Action") {

      } */

})
