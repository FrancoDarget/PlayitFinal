 module.exports=(sequelize,DataTypes)=>{
    let cols= {
        id:{type: DataTypes.INTEGER,
        primaryKey: true },
        name:{ type: DataTypes.STRING},
        birthdate: {type: DataTypes.DATE},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},

    }
    let config= {tableName:"usuarios",
                  timeStamps: false} 
    const Usuario= sequelize.define("Usuario",cols,config)
    return Usuario;
}
