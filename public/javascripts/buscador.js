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

  /* Header y Footer */

  var queryString = location.search

  queryString = new URLSearchParams(queryString)

  var busqueda = queryString.get("busqueda")



  document.querySelector("input.busqueda").value = busqueda;

  if (busqueda != null) {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&query=" + busqueda + "&page=1&include_adult=false")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      console.log(datos);
          //guardo el array de pelis
      var arrayDePeliculas = datos.results
      var ul = document.querySelector('div ul')
      var li = ""
      //parte fija de la url de la imahen
      var urlImg = "https://image.tmdb.org/t/p/original/"
          // recorro el array de pelis
      for (var i = 0; i < arrayDePeliculas.length; i++) {
        if (arrayDePeliculas[i].poster_path != null) {
        li = "<li>"
        li += "<a href='/playit/detail?idPelicula="+arrayDePeliculas[i].id+"'>" //cambie detalle.html a /playit/detail
        li += "<p>" + arrayDePeliculas[i].title + "</p>"
        li += "<img src = '" + urlImg + arrayDePeliculas[i].poster_path + "' style='width:300px;'>"
        li += "</a>"
        li += "</li>"
        ul.innerHTML += li
        }
        }
    })
    /*No funciona Busequeda*/

    /* if (busqueda.value == null) {
      UIkit.notification({
          message: 'Insert your name',
          status: 'danger',
          pos: 'top-center',
          timeout: 3000
      });
    }else if (email.value == "") {
      UIkit.notification({
          message: 'Insert your mail',
          status: 'warning',
          pos: 'top-center',
          timeout: 3000
      });
    } */

    /*No funciona busqueda*/
    .catch(function(error){
    console.log("the error was:" + error)
    })
  }

})
