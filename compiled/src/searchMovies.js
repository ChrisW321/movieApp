'use strict';

var searchMovie = function searchMovie(q, callback) {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:8000/api/movies',
    // url: 'https://api.themoviedb.org/3/search/movie?api_key=fb4b74b7f29a41e6d35b707cd40a3a8f&language=en-US&query=adventure&page=1&include_adult=false',
    // data: {
    //   key: 'fb4b74b7f29a41e6d35b707cd40a3a8f',
    //   type: 'json',
    //   query: q
    // },
    success: function success(data) {
      console.log(data);
      callback(data);
    },
    error: function error(_error) {
      console.error(_error);
    }
  });
};

window.searchMovie = searchMovie;
// window.getMovie = getMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanMiXSwibmFtZXMiOlsic2VhcmNoTW92aWUiLCJxIiwiY2FsbGJhY2siLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFLQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxRQUFKLEVBQWlCO0FBQ2xDQyxJQUFFQyxJQUFGLENBQU87QUFDTEMsVUFBTSxLQUREO0FBRUxDLFNBQUssa0NBRkE7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsYUFBUyxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCQyxjQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQU4sZUFBU00sSUFBVDtBQUVELEtBYkk7QUFjTEcsV0FBTyxlQUFTQSxNQUFULEVBQWdCO0FBQ25CRixjQUFRRSxLQUFSLENBQWNBLE1BQWQ7QUFDSDtBQWhCSSxHQUFQO0FBa0JELENBbkJEOztBQXNCRUMsT0FBT1osV0FBUCxHQUFxQkEsV0FBckI7QUFDQSIsImZpbGUiOiJzZWFyY2hNb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgIHNlYXJjaE1vdmllID0gKHEsIGNhbGxiYWNrKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9tb3ZpZXMnLFxuICAgIC8vIHVybDogJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP2FwaV9rZXk9ZmI0Yjc0YjdmMjlhNDFlNmQzNWI3MDdjZDQwYTNhOGYmbGFuZ3VhZ2U9ZW4tVVMmcXVlcnk9YWR2ZW50dXJlJnBhZ2U9MSZpbmNsdWRlX2FkdWx0PWZhbHNlJyxcbiAgICAvLyBkYXRhOiB7XG4gICAgLy8gICBrZXk6ICdmYjRiNzRiN2YyOWE0MWU2ZDM1YjcwN2NkNDBhM2E4ZicsXG4gICAgLy8gICB0eXBlOiAnanNvbicsXG4gICAgLy8gICBxdWVyeTogcVxuICAgIC8vIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcblxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4gIFxuICB3aW5kb3cuc2VhcmNoTW92aWUgPSBzZWFyY2hNb3ZpZTtcbiAgLy8gd2luZG93LmdldE1vdmllID0gZ2V0TW92aWU7Il19