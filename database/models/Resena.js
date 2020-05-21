module.exports=(sequelize,DataTypes)=>{
    let cols= {
        id:{type: DataTypes.INTEGER,
            primaryKey:true },
        idPelicula: {type: DataTypes.INTEGER},
        idUsuario: {type: DataTypes.INTEGER},
        resena:{ type: DataTypes.STRING},
        fechaCreacion: {type: DataTypes.DATE},
        fechaActualizacion: {type: DataTypes.STRING},
        puntaje: {type: DataTypes.INTEGER},

    }
    let config= {tableName:"resenas",
                  timeStamps: false} 
    const Resena= sequelize.define("Resena",cols,config)
    return Resena;
}