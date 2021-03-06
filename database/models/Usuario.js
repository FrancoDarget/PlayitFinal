 module.exports=(sequelize,DataTypes)=>{
    let cols= {   //estoy diciendo que columnas de mi bd quiero usar y su tipo de dato
        id:{type: DataTypes.INTEGER, 
        primaryKey: true }, //id es la primary key
        name:{ type: DataTypes.STRING},
        birthdate: {type: DataTypes.DATE},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
        generoFavorito: {type: DataTypes.STRING},
        peliculaFavorita: {type: DataTypes.STRING},

    }
    let config= {tableName:"usuarios", //el nombre de mi tabla en la base de datos
                  timestamps: false, }  // no tiene las columnas created at y updated at
    const usuarios= sequelize.define("usuarios",cols,config) //defino el modelo usuarios
    
    usuarios.associate= function(models){ //asociacion entre la tabla de resenas y usuario 
        usuarios.hasMany(models.resenas, {
            as: "users",
            foreignKey: "idUsuario"})}
  return usuarios;
}
