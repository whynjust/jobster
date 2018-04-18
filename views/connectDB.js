const mysql = requie('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'jobster'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
