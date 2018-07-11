var  searchMovie = (q, callback) => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8000/api/movies',
    // url: 'https://api.themoviedb.org/3/search/movie?api_key=fb4b74b7f29a41e6d35b707cd40a3a8f&language=en-US&query=adventure&page=1&include_adult=false',
    // data: {
    //   key: 'fb4b74b7f29a41e6d35b707cd40a3a8f',
    //   type: 'json',
    //   query: q
    // },
    success: function(data) {
      console.log(data);
      callback(data);

    },
    error: function(error) {
        console.error(error);
    }
  });
};

  
  window.searchMovie = searchMovie;
  // window.getMovie = getMovie;