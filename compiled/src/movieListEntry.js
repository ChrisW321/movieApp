"use strict";

var MovieListEntry = function MovieListEntry(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                props.movie.title
            )
        )
    );
};

window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJwcm9wcyIsIm1vdmllIiwidGl0bGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDNUIsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBS0Esc0JBQU1DLEtBQU4sQ0FBWUM7QUFBakI7QUFESjtBQURKLEtBREo7QUFPSCxDQVJEOztBQVVBQyxPQUFPSixjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJtb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3RFbnRyeSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPntwcm9wcy5tb3ZpZS50aXRsZX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG53aW5kb3cuTW92aWVMaXN0RW50cnkgPSBNb3ZpZUxpc3RFbnRyeTsiXX0=