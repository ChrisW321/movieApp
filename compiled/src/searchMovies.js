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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanMiXSwibmFtZXMiOlsic2VhcmNoTW92aWUiLCJxIiwiY2FsbGJhY2siLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwia2V5IiwicXVlcnkiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUtBLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUlDLFFBQUosRUFBaUI7QUFDbENDLElBQUVDLElBQUYsQ0FBTztBQUNMQyxVQUFNLEtBREQ7QUFFTEMsU0FBSyw4SUFGQTtBQUdMQyxVQUFNO0FBQ0pDLFdBQUssa0NBREQ7QUFFSkgsWUFBTSxNQUZGO0FBR0pJLGFBQU9SO0FBSEgsS0FIRDtBQVFMUyxhQUFTLGlCQUFTSCxJQUFULEVBQWU7QUFDdEJMLGVBQVNLLElBQVQ7QUFDQUksY0FBUUMsR0FBUixDQUFZTCxJQUFaO0FBQ0QsS0FYSTtBQVlMTSxXQUFPLGVBQVNBLE1BQVQsRUFBZ0I7QUFDbkJGLGNBQVFFLEtBQVIsQ0FBY0EsTUFBZDtBQUNIO0FBZEksR0FBUDtBQWdCRCxDQWpCRDs7QUFtQkVDLE9BQU9kLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6InNlYXJjaE1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAgc2VhcmNoTW92aWUgPSAocSwgY2FsbGJhY2spID0+IHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6ICdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PWZiNGI3NGI3ZjI5YTQxZTZkMzViNzA3Y2Q0MGEzYThmJmxhbmd1YWdlPWVuLVVTJnF1ZXJ5PWFkdmVudHVyZSZwYWdlPTEmaW5jbHVkZV9hZHVsdD1mYWxzZScsXG4gICAgZGF0YToge1xuICAgICAga2V5OiAnZmI0Yjc0YjdmMjlhNDFlNmQzNWI3MDdjZDQwYTNhOGYnLFxuICAgICAgdHlwZTogJ2pzb24nLFxuICAgICAgcXVlcnk6IHFcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9KTtcbn07XG4gIFxuICB3aW5kb3cuc2VhcmNoTW92aWUgPSBzZWFyY2hNb3ZpZTsiXX0=