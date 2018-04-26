const mysql = require("mysql");

let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "garrett",
  database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.log(`Error connecting ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
})

module.exports = connection;