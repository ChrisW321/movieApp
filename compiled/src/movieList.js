"use strict";

var MovieList = function MovieList(props) {
    return React.createElement(
        "div",
        null,
        "Movies: ",
        props.movies.map(function (movie) {
            return React.createElement(MovieListEntry, { movie: movie, key: movie.title });
        })
    );
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwibW92aWVzIiwibWFwIiwibW92aWUiLCJ0aXRsZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFDYUEsY0FBTUMsTUFBTixDQUFhQyxHQUFiLENBQWlCO0FBQUEsbUJBQ3RCLG9CQUFDLGNBQUQsSUFBZ0IsT0FBT0MsS0FBdkIsRUFBOEIsS0FBS0EsTUFBTUMsS0FBekMsR0FEc0I7QUFBQSxTQUFqQjtBQURiLEtBREo7QUFPSCxDQVJEOztBQVVBQyxPQUFPTixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJtb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIE1vdmllczoge3Byb3BzLm1vdmllcy5tYXAobW92aWUgPT4gXG4gICAgICAgICAgICAgICAgPE1vdmllTGlzdEVudHJ5IG1vdmllPXttb3ZpZX0ga2V5PXttb3ZpZS50aXRsZX0vPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==