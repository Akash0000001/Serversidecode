const Sequelize=require("sequelize")

const sequelize=require("../util/database")

const User=sequelize.define("users",{
    Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Phone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Date:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Time:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=User