const mysql=require("mysql2")

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    database:"node_app",
    password:"Akash@2803*#$"
})

module.exports=pool.promise()