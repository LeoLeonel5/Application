const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '12345',
    database :'film'
}
);

db.connect(err=>{
    if(err){
        throw err;
    }
    console.log("MySQL Connected");
});

module.exports = db;