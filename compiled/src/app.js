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
                return _this2.setState({ currentMovies: data, movies: data });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsImN1cnJlbnRNb3ZpZXMiLCJ2b3RlX2F2ZXJhZ2UiLCJ0b1dhdGNoIiwid2F0Y2hlZCIsIm1hdGNoZXMiLCJtZXNzYWdlIiwibW92aWVEYXRhIiwic2VhcmNoTW92aWUiLCJkYXRhIiwic2V0U3RhdGUiLCJpbnB1dCIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwidG9Mb3dlckNhc2UiLCJsb3dlckNhc2UiLCJpIiwibGVuZ3RoIiwicHVzaCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicG9zdE1vdmllIiwibW92aWUiLCJzcGxpY2UiLCJnb0NsaWNrIiwiYmluZCIsImFkZENsaWNrIiwiYWRkVG9XYXRjaGVkIiwic2hvd1dhdGNoZWQiLCJzaG93VG9XYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLENBQUMsRUFBQ0MsT0FBTyxNQUFSLEVBQUQsQ0FEQztBQUVUQywyQkFBZSxDQUFDLEVBQUNELE9BQU8sTUFBUixFQUFnQkUsY0FBYyxHQUE5QixFQUFELEVBQXFDLEVBQUNGLE9BQU8sUUFBUixFQUFrQkUsY0FBYyxHQUFoQyxFQUFyQyxDQUZOO0FBR1RDLHFCQUFTLEVBSEE7QUFJVEMscUJBQVMsRUFKQTtBQUtUQyxxQkFBUyxLQUxBO0FBTVRDLHFCQUFTLEVBTkE7QUFPVEMsdUJBQVcsRUFBQyxjQUFjLFlBQWY7QUFQRixTQUFiO0FBRmU7QUFXbEI7Ozs7NENBQ21CO0FBQUE7O0FBQ2hCQyx3QkFBWSxXQUFaLEVBQXlCLFVBQUNDLElBQUQ7QUFBQSx1QkFBVSxPQUFLQyxRQUFMLENBQWMs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QUFzQixJQUF0QixDQURSLEVBQ3FDLGFBQWEsS0FBS0ksV0FBTCxDQUFpQkosSUFBakIsQ0FBc0IsSUFBdEIsQ0FEbEQ7QUFBTCxpQkFISjtBQUtJO0FBQUE7QUFBQTtBQUFNLHlCQUFLOUIsS0FBTCxDQUFXUTtBQUFqQjtBQUxKLGFBREo7QUFTSDs7OztFQTdFYTJCLE1BQU1DLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vdmllczogW3t0aXRsZTogJ3Rlc3QnfV0sXG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBbe3RpdGxlOiAndGVzdCcsIHZvdGVfYXZlcmFnZTogNS41fSwge3RpdGxlOiAnc2Vjb25kJywgdm90ZV9hdmVyYWdlOiA2Ljd9XSxcbiAgICAgICAgICAgIHRvV2F0Y2g6IFtdLFxuICAgICAgICAgICAgd2F0Y2hlZDogW10sXG4gICAgICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbW92aWVEYXRhOiB7J3Rlc3RzZWFyY2gnOiAndGVzdHNlYXJjaCd9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNlYXJjaE1vdmllKCdhZHZlbnR1cmUnLCAoZGF0YSkgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogZGF0YSwgbW92aWVzOiBkYXRhfSkgKTtcbiAgICB9XG4gICAgZ29DbGljayhpbnB1dCkge1xuICAgICAgICBzZWFyY2hNb3ZpZShpbnB1dCwgKGRhdGEpID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IGRhdGEucmVzdWx0cywgbW92aWVzOiBkYXRhLnJlc3VsdHN9KSApXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXM6IGZhbHNlLCBtZXNzYWdlOiAnJ30pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVEYXRhKTtcbiAgICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgbG93ZXJDYXNlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvd2VyQ2FzZS5wdXNoKHt0aXRsZTogdGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKX0pXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCBsb3dlckNhc2VbaV0udGl0bGUuaW5jbHVkZXMoaW5wdXQpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5wdXNoKCB0aGlzLnN0YXRlLm1vdmllc1tpXSApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXM6IHRydWV9KVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0lucHV0JykudmFsdWU9ICcnXG4gICAgfVxuICAgIGFkZENsaWNrKGlucHV0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXM6IGZhbHNlLCBtZXNzYWdlOiAnJ30pXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZXMucHVzaCh7dGl0bGU6IGlucHV0fSk7XG4gICAgICAgIHRoaXMuc3RhdGUudG9XYXRjaC5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSlcbiAgICAgICAgcG9zdE1vdmllKGlucHV0KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSW5wdXQnKS52YWx1ZSA9ICcnXG4gICAgfVxuICAgIGFkZFRvV2F0Y2hlZChtb3ZpZSkge1xuICAgICAgICB0aGlzLnN0YXRlLndhdGNoZWQucHVzaCh7dGl0bGU6IG1vdmllfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50b1dhdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b1dhdGNoW2ldLnRpdGxlID09PSBtb3ZpZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9XYXRjaC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS53YXRjaGVkKVxuICAgIH1cbiAgICBzaG93V2F0Y2hlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogdGhpcy5zdGF0ZS53YXRjaGVkfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3dXYXRjaCcpXG4gICAgfVxuICAgIHNob3dUb1dhdGNoKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLnRvV2F0Y2h9KVxuICAgICAgICBjb25zb2xlLmxvZygnc2hvd3Rvd2F0Y2gnKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVzc2FnZSA9ICdTb3JyeSwgdGhhdCBzZWFyY2ggcmV0dXJuZWQgMCByZXN1bHRzJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPk1vdmllIExpc3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9IGdvQ2xpY2s9e3RoaXMuZ29DbGljay5iaW5kKHRoaXMpfSBhZGRDbGljaz17dGhpcy5hZGRDbGljay5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSBjdXJyZW50TW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9IHdhdGNoPXt0aGlzLmFkZFRvV2F0Y2hlZC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICBzaG93V2F0Y2hlZD17dGhpcy5zaG93V2F0Y2hlZC5iaW5kKHRoaXMpfSBzaG93VG9XYXRjaD17dGhpcy5zaG93VG9XYXRjaC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19