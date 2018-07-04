"use strict";

var MovieList = function MovieList(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { id: "watch", onClick: function onClick() {
                        return props.showWatched();
                    } },
                "Watch"
            ),
            React.createElement(
                "button",
                { id: "toWatch", onClick: function onClick() {
                        return props.showToWatch();
                    } },
                "To watch"
            )
        ),
        "Movies: ",
        props.movies.map(function (movie) {
            return React.createElement(MovieListEntry, { movie: movie, key: movie.title, watch: props.watch });
        })
    );
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic2hvd1dhdGNoZWQiLCJzaG93VG9XYXRjaCIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwidGl0bGUiLCJ3YXRjaCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLGtCQUFRLElBQUcsT0FBWCxFQUFtQixTQUFTO0FBQUEsK0JBQU1BLE1BQU1DLFdBQU4sRUFBTjtBQUFBLHFCQUE1QjtBQUFBO0FBQUEsYUFBTDtBQUEwRTtBQUFBO0FBQUEsa0JBQVEsSUFBRyxTQUFYLEVBQXFCLFNBQVM7QUFBQSwrQkFBTUQsTUFBTUUsV0FBTixFQUFOO0FBQUEscUJBQTlCO0FBQUE7QUFBQTtBQUExRSxTQURKO0FBQUE7QUFFYUYsY0FBTUcsTUFBTixDQUFhQyxHQUFiLENBQWlCO0FBQUEsbUJBQ3RCLG9CQUFDLGNBQUQsSUFBZ0IsT0FBT0MsS0FBdkIsRUFBOEIsS0FBS0EsTUFBTUMsS0FBekMsRUFBZ0QsT0FBT04sTUFBTU8sS0FBN0QsR0FEc0I7QUFBQSxTQUFqQjtBQUZiLEtBREo7QUFRSCxDQVREOztBQVdBQyxPQUFPVCxTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJtb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBpZD1cIndhdGNoXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2hvd1dhdGNoZWQoKX0+V2F0Y2g8L2J1dHRvbj48YnV0dG9uIGlkPVwidG9XYXRjaFwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNob3dUb1dhdGNoKCl9PlRvIHdhdGNoPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICBNb3ZpZXM6IHtwcm9wcy5tb3ZpZXMubWFwKG1vdmllID0+IFxuICAgICAgICAgICAgICAgIDxNb3ZpZUxpc3RFbnRyeSBtb3ZpZT17bW92aWV9IGtleT17bW92aWUudGl0bGV9IHdhdGNoPXtwcm9wcy53YXRjaH0vPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==