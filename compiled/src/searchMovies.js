'use strict';

var searchMovie = function (q, callback) {
  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie?api_key=fb4b74b7f29a41e6d35b707cd40a3a8f&language=en-US&query=adventure&page=1&include_adult=false',
    data: {
      key: 'fb4b74b7f29a41e6d35b707cd40a3a8f',
      type: 'json',
      query: q
    },
    success: function success(data) {
      callback(data);
      console.log(data);
    },
    error: function error(_error) {
      console.error(_error);
    }
  });
};

var postMovie = function (input) {
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:8000/',
    data: JSON.stringify({input: input}),
    contentType: 'application/json',
    success: function(data) {
      console.log('successful POST input:', input)
    },
    error: function(err) {
      console.error(err);
    }
  });
}

window.searchMovie = searchMovie;
window.postMovie = postMovie;