let playitBD = require('../database/models/index')
const OP = playitBD.Sequelize.Op; //para poder usar las funciones de sequelize

let moduloLogin = {
    chequearUsuario: function (email) {
        return playitBD.usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return playitBD.usuarios.findOne({
            where: [{
                email:email
            }]
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, password) {
        return playitBD.usuarios.findOne({
            where: [{
                email:email,
                password: password,
            }],
        })
        .then(results=>{
            return results;
        })
    }
}
module.exports = moduloLogin;