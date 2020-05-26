module.exports=(sequelize,DataTypes)=>{
    let cols= {     // digo que columnas voy a usar y su tipo dato 
        id:{type: DataTypes.INTEGER,
            primaryKey:true }, 
        idPelicula: {type: DataTypes.INTEGER},
        idUsuario: {type: DataTypes.INTEGER},
        resena:{ type: DataTypes.STRING},
        fechaCreacion: {type: DataTypes.DATE},
        fechaActualizacion: {type: DataTypes.STRING},
        puntaje: {type: DataTypes.INTEGER},

    }
    let config= {tableName:"resenas", // nombre de mi table en la base de datos
                  timestamps: true}  // si tiene las columnas updated ni created at
    const resenas= sequelize.define("resenas",cols,config) // creo el modelo
    return resenas;
    resenas.associate= function(models){ //asociacion entre la tabla de resenas y usuario 
        resenas.belongsTo(models.usuarios, {
            as: "users",
            ForeignKey: "idUsuario"
        })
    }
}
