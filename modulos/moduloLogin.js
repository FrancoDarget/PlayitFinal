let playitBD = require('../database/models/index')
const OP = playitBD.Sequelize.Op; //para poder usar las funciones de sequelize
const bcrypt = require('bcryptjs'); 

let moduloLogin = {
    chequearUsuario: function (email) {
        return playitBD.usuarios.findOne({ //busca usuario x email. retorna SOLO si existe o no
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorName: function (name){
        return playitBD.usuarios.findOne({
            where: [{
                name:{[OP.like]: '%'+name+'%'}      //busca usuario x name, si existe retorna TODOS SUS DATOS. El OP.like permite que no tengas que poner el dato completo
            }]
        })
        .then(resultado=> {
            return resultado
        })
    },
    
    buscarPorEmail: function (email){
        return playitBD.usuarios.findOne({
            where: [{
                email: email      //busca usuario x email, si existe retorna TODOS SUS DATOS. 
            }]
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, password) {
        return playitBD.usuarios.findOne({    // me dice si existe un usuario con ese mail y contrasena
            where: [{
                email:email,
                
            }],
        })
        .then(results=>{
            if(results && bcrypt.compareSync(   //para la contra encriptada
                password,results.password)){
                    return results;    
                }
                else {
                    return null;
                }
 
        })
    }
}
module.exports = moduloLogin;