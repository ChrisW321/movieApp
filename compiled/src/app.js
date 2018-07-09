'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            movies: [{ title: 'test' }],
            currentMovies: [{ title: 'test', vote_average: 5.5 }, { title: 'second', vote_average: 6.7 }],
            toWatch: [],
            watched: [],
            matches: false,
            message: '',
            movieData: { 'testsearch': 'testsearch' }
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            searchMovie('adventure', function (data) {
                return _this2.setState({ currentMovies: data.results, movies: data.results });
            });
        }
    }, {
        key: 'goClick',
        value: function goClick(input) {
            var _this3 = this;

            searchMovie(input, function (data) {
                return _this3.setState({ currentMovies: data.results, movies: data.results });
            });
            this.setState({ matches: false, message: '' });
            console.log(this.state.movieData);
            input = input.toLowerCase();
            var lowerCase = [];
            this.state.currentMovies = [];
            for (var i = 0; i < this.state.movies.length; i++) {
                lowerCase.push({ title: this.state.movies[i].title.toLowerCase() });
            }
            for (var _i = 0; _i < this.state.movies.length; _i++) {
                if (lowerCase[_i].title.includes(input)) {
                    this.state.currentMovies.push(this.state.movies[_i]);
                }
            }
            this.setState({ currentMovies: this.state.currentMovies });
            if (this.state.currentMovies.length === 0) {
                this.setState({ matches: true });
            }
            document.getElementById('goInput').value = '';
        }
    }, {
        key: 'addClick',
        value: function addClick(input) {
            this.setState({ matches: false, message: '' });
            this.state.currentMovies.push({ title: input });
            this.state.movies.push({ title: input });
            this.state.toWatch.push({ title: input });
            this.setState({ currentMovies: this.state.currentMovies });
            postMovie(input);

            document.getElementById('addInput').value = '';
        }
    }, {
        key: 'addToWatched',
        value: function addToWatched(movie) {
            this.state.watched.push({ title: movie });
            for (var i = 0; i < this.state.toWatch.length; i++) {
                if (this.state.toWatch[i].title === movie) {
                    this.state.toWatch.splice(i, 1);
                }
            }
            console.log(this.state.watched);
        }
    }, {
        key: 'showWatched',
        value: function showWatched() {
            this.setState({ currentMovies: this.state.watched });
            console.log('showWatch');
        }
    }, {
        key: 'showToWatch',
        value: function showToWatch() {
            this.setState({ currentMovies: this.state.toWatch });
            console.log('showtowatch');
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.matches) {
                this.state.message = 'Sorry, that search returned 0 results';
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: 'title' },
                    'Movie List'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(Search, { movies: this.state.currentMovies, goClick: this.goClick.bind(this), addClick: this.addClick.bind(this) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(MovieList, { movies: this.state.currentMovies, currentMovies: this.state.currentMovies, watch: this.addToWatched.bind(this),
                        showWatched: this.showWatched.bind(this), showToWatch: this.showToWatch.bind(this) })
                ),
                React.createElement(
                    'div',
                    null,
                    this.state.message
                )
            );
        }
    }]);

    return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsImN1cnJlbnRNb3ZpZXMiLCJ2b3RlX2F2ZXJhZ2UiLCJ0b1dhdGNoIiwid2F0Y2hlZCIsIm1hdGNoZXMiLCJtZXNzYWdlIiwibW92aWVEYXRhIiwic2VhcmNoTW92aWUiLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwidG9Mb3dlckNhc2UiLCJsb3dlckNhc2UiLCJpIiwibGVuZ3RoIiwicHVzaCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicG9zdE1vdmllIiwibW92aWUiLCJzcGxpY2UiLCJnb0NsaWNrIiwiYmluZCIsImFkZENsaWNrIiwiYWRkVG9XYXRjaGVkIiwic2hvd1dhdGNoZWQiLCJzaG93VG9XYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLENBQUMsRUFBQ0MsT0FBTyxNQUFSLEVBQUQsQ0FEQztBQUVUQywyQkFBZSxDQUFDLEVBQUNELE9BQU8sTUFBUixFQUFnQkUsY0FBYyxHQUE5QixFQUFELEVBQXFDLEVBQUNGLE9BQU8sUUFBUixFQUFrQkUsY0FBYyxHQUFoQyxFQUFyQyxDQUZOO0FBR1RDLHFCQUFTLEVBSEE7QUFJVEMscUJBQVMsRUFKQTtBQUtUQyxxQkFBUyxLQUxBO0FBTVRDLHFCQUFTLEVBTkE7QUFPVEMsdUJBQVcsRUFBQyxjQUFjLFlBQWY7QUFQRixTQUFiO0FBRmU7QUFXbEI7Ozs7NENBQ21CO0FBQUE7O0FBQ2hCQyx3QkFBWSxXQUFaLEVBQXlCLFVBQUNDLElBQUQ7QUFBQSx1QkFBVSxPQUFLQyxRQUFMLENBQWMs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QWlCSCxJQUFqQixDQUFzQixJQUF0QixDQURSLEVBQ3FDLGFBQWEsS0FBS0ksV0FBTCxDQUFpQkosSUFBakIsQ0FBc0IsSUFBdEIsQ0FEbEQ7QUFBTCxpQkFISjtBQUtJO0FBQUE7QUFBQTtBQUFNLHlCQUFLOUIsS0FBTCxDQUFXUTtBQUFqQjtBQUxKLGFBREo7QUFTSDs7OztFQTdFYTJCLE1BQU1DLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vdmllczogW3t0aXRsZTogJ3Rlc3QnfV0sXG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBbe3RpdGxlOiAndGVzdCcsIHZvdGVfYXZlcmFnZTogNS41fSwge3RpdGxlOiAnc2Vjb25kJywgdm90ZV9hdmVyYWdlOiA2Ljd9XSxcbiAgICAgICAgICAgIHRvV2F0Y2g6IFtdLFxuICAgICAgICAgICAgd2F0Y2hlZDogW10sXG4gICAgICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbW92aWVEYXRhOiB7J3Rlc3RzZWFyY2gnOiAndGVzdHNlYXJjaCd9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNlYXJjaE1vdmllKCdhZHZlbnR1cmUnLCAoZGF0YSkgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogZGF0YS5yZXN1bHRzLCBtb3ZpZXM6IGRhdGEucmVzdWx0c30pICk7XG4gICAgfVxuICAgIGdvQ2xpY2soaW5wdXQpIHtcbiAgICAgICAgc2VhcmNoTW92aWUoaW5wdXQsIChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW92aWVzOiBkYXRhLnJlc3VsdHMsIG1vdmllczogZGF0YS5yZXN1bHRzfSkgKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzOiBmYWxzZSwgbWVzc2FnZTogJyd9KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllRGF0YSk7XG4gICAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGxvd2VyQ2FzZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb3dlckNhc2UucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCl9KVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICggbG93ZXJDYXNlW2ldLnRpdGxlLmluY2x1ZGVzKGlucHV0KSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCggdGhpcy5zdGF0ZS5tb3ZpZXNbaV0gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IHRoaXMuc3RhdGUuY3VycmVudE1vdmllc30pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzOiB0cnVlfSlcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29JbnB1dCcpLnZhbHVlPSAnJ1xuICAgIH1cbiAgICBhZGRDbGljayhpbnB1dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzOiBmYWxzZSwgbWVzc2FnZTogJyd9KVxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCh7dGl0bGU6IGlucHV0fSk7XG4gICAgICAgIHRoaXMuc3RhdGUubW92aWVzLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgICAgICB0aGlzLnN0YXRlLnRvV2F0Y2gucHVzaCh7dGl0bGU6IGlucHV0fSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IHRoaXMuc3RhdGUuY3VycmVudE1vdmllc30pXG4gICAgICAgIHBvc3RNb3ZpZShpbnB1dCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZElucHV0JykudmFsdWUgPSAnJ1xuICAgIH1cbiAgICBhZGRUb1dhdGNoZWQobW92aWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53YXRjaGVkLnB1c2goe3RpdGxlOiBtb3ZpZX0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudG9XYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9XYXRjaFtpXS50aXRsZSA9PT0gbW92aWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvV2F0Y2guc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUud2F0Y2hlZClcbiAgICB9XG4gICAgc2hvd1dhdGNoZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IHRoaXMuc3RhdGUud2F0Y2hlZH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93V2F0Y2gnKVxuICAgIH1cbiAgICBzaG93VG9XYXRjaCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogdGhpcy5zdGF0ZS50b1dhdGNofSlcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3d0b3dhdGNoJylcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lc3NhZ2UgPSAnU29ycnksIHRoYXQgc2VhcmNoIHJldHVybmVkIDAgcmVzdWx0cydcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGVcIj5Nb3ZpZSBMaXN0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSBnb0NsaWNrPXt0aGlzLmdvQ2xpY2suYmluZCh0aGlzKX0gYWRkQ2xpY2s9e3RoaXMuYWRkQ2xpY2suYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30gY3VycmVudE1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSB3YXRjaD17dGhpcy5hZGRUb1dhdGNoZWQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgc2hvd1dhdGNoZWQ9e3RoaXMuc2hvd1dhdGNoZWQuYmluZCh0aGlzKX0gc2hvd1RvV2F0Y2g9e3RoaXMuc2hvd1RvV2F0Y2guYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ==