const Sequelize=require("sequelize")

const sequelize=new Sequelize('node_app','root','Akash@2803*#$',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize