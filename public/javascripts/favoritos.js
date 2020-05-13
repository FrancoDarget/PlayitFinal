window.addEventListener('load' ,function(){

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

  var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

  if (jsonFavoritas == null) {
    var favoritas = []
  } else {
    // Paso 2 - Desempaqueto el json
    var favoritas = JSON.parse(jsonFavoritas)
  }

  for (var i = 0; i < favoritas.length; i++) {
    fetch("https://api.themoviedb.org/3/movie/ "+ favoritas[i] +" ?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(pelicula) {



          document.querySelector(".peliculasfavoritas").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+pelicula.id+'"><img src="https://image.tmdb.org/t/p/original/' + pelicula.poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'

      })
  }

  /* Header y Footer */



})
