window.addEventListener("load", function() {

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

  var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var idPelicula = queryString.get("idPelicula")

  console.log(idPelicula);

  // INICIO BLOQUE 1 - Leer el array de storage

    // Paso 1 - Leo de localStorage
    var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

    if (jsonFavoritas == null) {
      var favoritas = []
    } else {
      // Paso 2 - Desempaqueto el json
      var favoritas = JSON.parse(jsonFavoritas)

    }
  // CIERRA BLOQUE 1

  if (favoritas.indexOf(idPelicula) >= 0) {
    document.querySelector(".estrellita").style.backgroundColor = "gold"
  }

  // Bloque 3 - Que pasa al clickear en la estrella
  document.querySelector(".estrellita").onclick = function(e) {
    e.preventDefault()
    // Bloque 3 a - Modifico el array
    if (favoritas.indexOf(idPelicula) >= 0) {
      // La quito
      var pos = favoritas.indexOf(idPelicula)
      favoritas.splice(pos,1)
      document.querySelector(".estrellita").style.backgroundColor = "white"
    } else {
      // La agrego
      favoritas.push(idPelicula)
      document.querySelector(".estrellita").style.backgroundColor = "gold"
    }
    // Fin bloque 3 a

    // Bloque 3 b


      var json = JSON.stringify(favoritas)

      localStorage.setItem("peliculasFavoritas", json)
    // Fin bloque 3 b
  }
  // Fin bloque 3



  fetch("https://api.themoviedb.org/3/movie/ "+ idPelicula +" ?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(pelicula) {
      console.log(pelicula);
     var urlImg = "https://image.tmdb.org/t/p/original/"

    document.querySelector(".posterPeli").innerHTML = "<img src='"+ urlImg + pelicula.poster_path+ "'style='width:300px;'>";


      document.querySelector("h1").innerHTML = pelicula.title;
      document.querySelector(".fecha").innerHTML= pelicula.release_date;
      document.querySelector(".sipnopsis").innerHTML= pelicula.overview;
      document.querySelector(".lenguaje").innerHTML= pelicula. original_language;

     var genero= pelicula.genres
     for (i=0; i< genero.length; i++) {
       pelicula.genres[i]
       document.querySelector(".generoDetalle").innerHTML= "<a href='generos.html'>"+pelicula.genres[i].name+"</a>"
 }
})
var url = "https://api.themoviedb.org/3/movie/ "+idPelicula+"/videos?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US"
fetch(url)
  .then(function(response){
    return response.json();
    })
    .then(function(peliculaTrailer) {
     console.log(peliculaTrailer);
     console.log(peliculaTrailer.results[0].key);
      var urlTrailer= '<iframe width="850" height="472" src="https://www.youtube.com/embed/'+ peliculaTrailer.results[0].key +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      document.querySelector(".infoDePeli").innerHTML= urlTrailer;

      })
       .catch(function(error) {
         console.log("the error was: " + error);
        })

/*NUEVA API*/
fetch("https://api.themoviedb.org/3/movie/"+idPelicula+"/recommendations?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    var peliculas = datos.results
    console.log(peliculas);

    for (var i = 0; i < peliculas.length; i++) {
      document.querySelector(".contenedor-recomendados").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idPelicula='+peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + peliculas[i].poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
    }
  })
/*NUEVA API*/
})
