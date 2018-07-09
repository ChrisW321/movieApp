var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies'
})
connection.connect();

var postUserAddedMovie = (input) => {
    connection.query(`INSERT INTO movies(title) values (${input})`, (err, result) => {
        console.log('inserted');
    });
}
 
module.exports.connection = connection;
module.exports.postUserAddedMovie = postUserAddedMovie;