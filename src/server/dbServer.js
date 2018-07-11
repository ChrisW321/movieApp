var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlsucks',
    database: 'movies'
})
connection.connect();

// var MongoClient = require('mongodb').MongoClient

// // Connection URL
// var url = 'mongodb://localhost:8000';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   console.log("Connected successfully to server");
//   if (err) console.log(err);

//   db.close();
// });

var postUserAddedMovie = (input) => {
    console.log(input)
    connection.query(`INSERT INTO movies(title) values ('${input.title}')`, (err, result) => {
        console.log('inserted');
    });
}
var getStoredMovies = (callback) => {
    connection.query(`SELECT * FROM movies`, (err, result) => {
        console.log(result);
        callback(null, result);
    })
}
 
// module.exports.connection = connection;
module.exports.postUserAddedMovie = postUserAddedMovie;
module.exports.connection = connection;
module.exports.getStoredMovies = getStoredMovies;