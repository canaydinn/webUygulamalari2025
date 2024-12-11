const mysql=require('mysql')
require('dotenv/config')

const dbConn=mysql.createConnection({
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    host:process.env.MYSQL_HOSTNAME
})

dbConn.connect((err)=>{
    if(!err){
        console.log('Connected to database')
    }else{
        console.log(err)
    }
})

module.exports=dbConn