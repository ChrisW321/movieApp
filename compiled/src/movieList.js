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
        props.movies.map(function (movie) {
            return React.createElement(MovieListEntry, { movie: movie, key: movie.title, watch: props.watch });
        })
    );
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic2hvd1dhdGNoZWQiLCJzaG93VG9XYXRjaCIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwidGl0bGUiLCJ3YXRjaCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLGtCQUFRLElBQUcsT0FBWCxFQUFtQixTQUFTO0FBQUEsK0JBQU1BLE1BQU1DLFdBQU4sRUFBTjtBQUFBLHFCQUE1QjtBQUFBO0FBQUEsYUFBTDtBQUEwRTtBQUFBO0FBQUEsa0JBQVEsSUFBRyxTQUFYLEVBQXFCLFNBQVM7QUFBQSwrQkFBTUQsTUFBTUUsV0FBTixFQUFOO0FBQUEscUJBQTlCO0FBQUE7QUFBQTtBQUExRSxTQURKO0FBRUtGLGNBQU1HLE1BQU4sQ0FBYUMsR0FBYixDQUFpQjtBQUFBLG1CQUNkLG9CQUFDLGNBQUQsSUFBZ0IsT0FBT0MsS0FBdkIsRUFBOEIsS0FBS0EsTUFBTUMsS0FBekMsRUFBZ0QsT0FBT04sTUFBTU8sS0FBN0QsR0FEYztBQUFBLFNBQWpCO0FBRkwsS0FESjtBQVFILENBVEQ7O0FBV0FDLE9BQU9ULFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIGlkPVwid2F0Y2hcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zaG93V2F0Y2hlZCgpfT5XYXRjaDwvYnV0dG9uPjxidXR0b24gaWQ9XCJ0b1dhdGNoXCIgb25DbGljaz17KCkgPT4gcHJvcHMuc2hvd1RvV2F0Y2goKX0+VG8gd2F0Y2g8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKG1vdmllID0+IFxuICAgICAgICAgICAgICAgIDxNb3ZpZUxpc3RFbnRyeSBtb3ZpZT17bW92aWV9IGtleT17bW92aWUudGl0bGV9IHdhdGNoPXtwcm9wcy53YXRjaH0vPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==