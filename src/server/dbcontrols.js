var db = require('./dbServer.js');

module.exports = {
    postUserAddedMovie: (input) => {
        db.connection.query(`INSERT INTO movies(title) values (${input})`, (err, result) => {
            console.log('inserted');
        });
    }
}