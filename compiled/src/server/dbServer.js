'use strict';

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'movies'
// })
// connection.connect();

// var MongoClient = require('mongodb').MongoClient

// // Connection URL
// var url = 'mongodb://localhost:8000';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   console.log("Connected successfully to server");
//   if (err) console.log(err);

//   db.close();
// });

var postUserAddedMovie = function postUserAddedMovie(input) {
    connection.query('INSERT INTO movies(title) values (' + input + ')', function (err, result) {
        console.log('inserted');
    });
};

// module.exports.connection = connection;
module.exports.postUserAddedMovie = postUserAddedMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvZGJTZXJ2ZXIuanMiXSwibmFtZXMiOlsicG9zdFVzZXJBZGRlZE1vdmllIiwiaW5wdXQiLCJjb25uZWN0aW9uIiwicXVlcnkiLCJlcnIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDQyxlQUFXQyxLQUFYLHdDQUFzREYsS0FBdEQsUUFBZ0UsVUFBQ0csR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQzdFQyxnQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDSCxLQUZEO0FBR0gsQ0FKRDs7QUFNQTtBQUNBQyxPQUFPQyxPQUFQLENBQWVULGtCQUFmLEdBQW9DQSxrQkFBcEMiLCJmaWxlIjoiZGJTZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpO1xuXG4vLyB2YXIgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuLy8gICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuLy8gICAgIHVzZXI6ICdyb290Jyxcbi8vICAgICBwYXNzd29yZDogJycsXG4vLyAgICAgZGF0YWJhc2U6ICdtb3ZpZXMnXG4vLyB9KVxuLy8gY29ubmVjdGlvbi5jb25uZWN0KCk7XG5cbi8vIHZhciBNb25nb0NsaWVudCA9IHJlcXVpcmUoJ21vbmdvZGInKS5Nb25nb0NsaWVudFxuXG4vLyAvLyBDb25uZWN0aW9uIFVSTFxuLy8gdmFyIHVybCA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjgwMDAnO1xuXG4vLyAvLyBVc2UgY29ubmVjdCBtZXRob2QgdG8gY29ubmVjdCB0byB0aGUgc2VydmVyXG4vLyBNb25nb0NsaWVudC5jb25uZWN0KHVybCwgZnVuY3Rpb24oZXJyLCBkYikge1xuLy8gICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCBzdWNjZXNzZnVsbHkgdG8gc2VydmVyXCIpO1xuLy8gICBpZiAoZXJyKSBjb25zb2xlLmxvZyhlcnIpO1xuXG4vLyAgIGRiLmNsb3NlKCk7XG4vLyB9KTtcblxudmFyIHBvc3RVc2VyQWRkZWRNb3ZpZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbm5lY3Rpb24ucXVlcnkoYElOU0VSVCBJTlRPIG1vdmllcyh0aXRsZSkgdmFsdWVzICgke2lucHV0fSlgLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luc2VydGVkJyk7XG4gICAgfSk7XG59XG4gXG4vLyBtb2R1bGUuZXhwb3J0cy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcbm1vZHVsZS5leHBvcnRzLnBvc3RVc2VyQWRkZWRNb3ZpZSA9IHBvc3RVc2VyQWRkZWRNb3ZpZTsiXX0=