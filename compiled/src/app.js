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
            currentMovies: [{ title: 'test' }, { title: 'second' }],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsImN1cnJlbnRNb3ZpZXMiLCJ0b1dhdGNoIiwid2F0Y2hlZCIsIm1hdGNoZXMiLCJtZXNzYWdlIiwibW92aWVEYXRhIiwic2VhcmNoTW92aWUiLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHRzIiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwidG9Mb3dlckNhc2UiLCJsb3dlckNhc2UiLCJpIiwibGVuZ3RoIiwicHVzaCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicG9zdE1vdmllIiwibW92aWUiLCJzcGxpY2UiLCJnb0NsaWNrIiwiYmluZCIsImFkZENsaWNrIiwiYWRkVG9XYXRjaGVkIiwic2hvd1dhdGNoZWQiLCJzaG93VG9XYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLENBQUMsRUFBQ0MsT0FBTyxNQUFSLEVBQUQsQ0FEQztBQUVUQywyQkFBZSxDQUFDLEVBQUNELE9BQU8sTUFBUixFQUFELEVBQWtCLEVBQUNBLE9BQU8sUUFBUixFQUFsQixDQUZOO0FBR1RFLHFCQUFTLEVBSEE7QUFJVEMscUJBQVMsRUFKQTtBQUtUQyxxQkFBUyxLQUxBO0FBTVRDLHFCQUFTLEVBTkE7QUFPVEMsdUJBQVcsRUFBQyxjQUFjLFlBQWY7QUFQRixTQUFiO0FBRmU7QUFXbEI7Ozs7NENBQ21CO0FBQUE7O0FBQ2hCQyx3QkFBWSxXQUFaLEVBQXlCLFVBQUNDLElBQUQ7QUFBQSx1QkFBVSxPQUFLQyxRQUFMLENBQWMsRUFBQ1IsZUFBZU8sS0FBS0UsT0FBckIsRUFBOEJYLFFBQVFTLEtBQUtFLE9BQTNDLEVBQWQsQ0FBVjtBQUFBLGFBQXpCO0FBQ0g7OztnQ0FDT0MsSyxFQUFPO0FBQUE7O0FBQ1hKLHdCQUFZSSxLQUFaLEVBQW1CLFVBQUNILElBQUQ7QUFBQSx1QkFBVSxPQUFLQyxRQUFMLENBQWMsRUFBQ1IsZUFBZU8sS0FBS0UsT0FBckIsRUFBOEJYLFFBQVFTLEtBQUtFLE9BQTNDLEVBQWQsQ0FBVjtBQUFBLGFBQW5CO0FBQ0EsaUJBQUtELFFBQUwsQ0FBYyxFQUFDTCxTQUFTLEtBQVYsRUFBaUJDLFNBQVMsRUFBMUIsRUFBZDtBQUNBTyxvQkFBUUMsR0FBUixDQUFZLEtBQUtmLEtBQUwsQ0FBV1EsU0FBdkI7QUFDQUssb0JBQVFBLE1BQU1HLFdBQU4sRUFBUjtBQUNBLGdCQUFJQyxZQUFZLEVBQWhCO0FBQ0EsaUJBQUtqQixLQUFMLENBQVdHLGFBQVgsR0FBMkIsRUFBM0I7QUFDQSxpQkFBSyxJQUFJZSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2xCLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmtCLE1BQXRDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUMvQ0QsMEJBQVVHLElBQVYsQ0FBZSxFQUFDbEIsT0FBTyxLQUFLRixLQUFMLENBQVdDLE1BQVgsQ0FBa0JpQixDQUFsQixFQUFxQmhCLEtBQXJCLENBQTJCYyxXQUEzQixFQUFSLEVBQWY7QUFDSDtBQUNELGlCQUFLLElBQUlFLEtBQUksQ0FBYixFQUFnQkEsS0FBSSxLQUFLbEIsS0FBTCxDQUFXQyxNQUFYLENBQWtCa0IsTUFBdEMsRUFBOENELElBQTlDLEVBQW1EO0FBQy9DLG9CQUFLRCxVQUFVQyxFQUFWLEVBQWFoQixLQUFiLENBQW1CbUIsUUFBbkIsQ0FBNEJSLEtBQTVCLENBQUwsRUFBMEM7QUFDdEMseUJBQUtiLEtBQUwsQ0FBV0csYUFBWCxDQUF5QmlCLElBQXpCLENBQStCLEtBQUtwQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JpQixFQUFsQixDQUEvQjtBQUNIO0FBQ0o7QUFDRCxpQkFBS1AsUUFBTCxDQUFjLEVBQUNSLGVBQWUsS0FBS0gsS0FBTCxDQUFXRyxhQUEzQixFQUFkO0FBQ0EsZ0JBQUksS0FBS0gsS0FBTCxDQUFXRyxhQUFYLENBQXlCZ0IsTUFBekIsS0FBb0MsQ0FBeEMsRUFBMkM7QUFDdkMscUJBQUtSLFFBQUwsQ0FBYyxFQUFDTCxTQUFTLElBQVYsRUFBZDtBQUNIO0FBQ0RnQixxQkFBU0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FBbkMsR0FBMEMsRUFBMUM7QUFDSDs7O2lDQUNRWCxLLEVBQU87QUFDWixpQkFBS0YsUUFBTCxDQUFjLEVBQUNMLFNBQVMsS0FBVixFQUFpQkMsU0FBUyxFQUExQixFQUFkO0FBQ0EsaUJBQUtQLEtBQUwsQ0FBV0csYUFBWCxDQUF5QmlCLElBQXpCLENBQThCLEVBQUNsQixPQUFPVyxLQUFSLEVBQTlCO0FBQ0EsaUJBQUtiLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQm1CLElBQWxCLENBQXVCLEVBQUNsQixPQUFPVyxLQUFSLEVBQXZCO0FBQ0EsaUJBQUtiLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQmdCLElBQW5CLENBQXdCLEVBQUNsQixPQUFPVyxLQUFSLEVBQXhCO0FBQ0EsaUJBQUtGLFFBQUwsQ0FBYyxFQUFDUixlQUFlLEtBQUtILEtBQUwsQ0FBV0csYUFBM0IsRUFBZDtBQUNBc0Isc0JBQVVaLEtBQVY7O0FBRUFTLHFCQUFTQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUFwQyxHQUE0QyxFQUE1QztBQUNIOzs7cUNBQ1lFLEssRUFBTztBQUNoQixpQkFBSzFCLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQmUsSUFBbkIsQ0FBd0IsRUFBQ2xCLE9BQU93QixLQUFSLEVBQXhCO0FBQ0EsaUJBQUssSUFBSVIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtsQixLQUFMLENBQVdJLE9BQVgsQ0FBbUJlLE1BQXZDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNoRCxvQkFBSSxLQUFLbEIsS0FBTCxDQUFXSSxPQUFYLENBQW1CYyxDQUFuQixFQUFzQmhCLEtBQXRCLEtBQWdDd0IsS0FBcEMsRUFBMkM7QUFDdkMseUJBQUsxQixLQUFMLENBQVdJLE9BQVgsQ0FBbUJ1QixNQUFuQixDQUEwQlQsQ0FBMUIsRUFBNkIsQ0FBN0I7QUFDSDtBQUNKO0FBQ0RKLG9CQUFRQyxHQUFSLENBQVksS0FBS2YsS0FBTCxDQUFXSyxPQUF2QjtBQUNIOzs7c0NBQ2E7QUFDVixpQkFBS00sUUFBTCxDQUFjLEVBQUNSLGVBQWUsS0FBS0gsS0FBTCxDQUFXSyxPQUEzQixFQUFkO0FBQ0FTLG9CQUFRQyxHQUFSLENBQVksV0FBWjtBQUNIOzs7c0NBQ2E7QUFDVixpQkFBS0osUUFBTCxDQUFjLEVBQUNSLGVBQWUsS0FBS0gsS0FBTCxDQUFXSSxPQUEzQixFQUFkO0FBQ0FVLG9CQUFRQyxHQUFSLENBQVksYUFBWjtBQUNIOzs7aUNBQ1E7QUFDTCxnQkFBSSxLQUFLZixLQUFMLENBQVdNLE9BQWYsRUFBd0I7QUFDcEIscUJBQUtOLEtBQUwsQ0FBV08sT0FBWCxHQUFxQix1Q0FBckI7QUFDSDtBQUNELG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxJQUFHLE9BQVI7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUssd0NBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS1AsS0FBTCxDQUFXRyxhQUEzQixFQUEwQyxTQUFTLEtBQUt5QixPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBbkQsRUFBNEUsVUFBVSxLQUFLQyxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBdEY7QUFBTCxpQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUs3QixLQUFMLENBQVdHLGFBQTlCLEVBQTZDLGVBQWUsS0FBS0gsS0FBTCxDQUFXRyxhQUF2RSxFQUFzRixPQUFPLEtBQUs0QixZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUE3RjtBQUNMLHFDQUFhLEtBQUtHLFdBQUwsQ0FBaUJILElBQWpCLENBQXNCLElBQXRCLENBRFIsRUFDcUMsYUFBYSxLQUFLSSxXQUFMLENBQWlCSixJQUFqQixDQUFzQixJQUF0QixDQURsRDtBQUFMLGlCQUhKO0FBS0k7QUFBQTtBQUFBO0FBQU0seUJBQUs3QixLQUFMLENBQVdPO0FBQWpCO0FBTEosYUFESjtBQVNIOzs7O0VBN0VhMkIsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVzOiBbe3RpdGxlOiAndGVzdCd9XSxcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZpZXM6IFt7dGl0bGU6ICd0ZXN0J30sIHt0aXRsZTogJ3NlY29uZCd9XSxcbiAgICAgICAgICAgIHRvV2F0Y2g6IFtdLFxuICAgICAgICAgICAgd2F0Y2hlZDogW10sXG4gICAgICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbW92aWVEYXRhOiB7J3Rlc3RzZWFyY2gnOiAndGVzdHNlYXJjaCd9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNlYXJjaE1vdmllKCdhZHZlbnR1cmUnLCAoZGF0YSkgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogZGF0YS5yZXN1bHRzLCBtb3ZpZXM6IGRhdGEucmVzdWx0c30pICk7XG4gICAgfVxuICAgIGdvQ2xpY2soaW5wdXQpIHtcbiAgICAgICAgc2VhcmNoTW92aWUoaW5wdXQsIChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW92aWVzOiBkYXRhLnJlc3VsdHMsIG1vdmllczogZGF0YS5yZXN1bHRzfSkgKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzOiBmYWxzZSwgbWVzc2FnZTogJyd9KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllRGF0YSk7XG4gICAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGxvd2VyQ2FzZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb3dlckNhc2UucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCl9KVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICggbG93ZXJDYXNlW2ldLnRpdGxlLmluY2x1ZGVzKGlucHV0KSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCggdGhpcy5zdGF0ZS5tb3ZpZXNbaV0gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IHRoaXMuc3RhdGUuY3VycmVudE1vdmllc30pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzOiB0cnVlfSlcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29JbnB1dCcpLnZhbHVlPSAnJ1xuICAgIH1cbiAgICBhZGRDbGljayhpbnB1dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzOiBmYWxzZSwgbWVzc2FnZTogJyd9KVxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCh7dGl0bGU6IGlucHV0fSk7XG4gICAgICAgIHRoaXMuc3RhdGUubW92aWVzLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgICAgICB0aGlzLnN0YXRlLnRvV2F0Y2gucHVzaCh7dGl0bGU6IGlucHV0fSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IHRoaXMuc3RhdGUuY3VycmVudE1vdmllc30pXG4gICAgICAgIHBvc3RNb3ZpZShpbnB1dCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZElucHV0JykudmFsdWUgPSAnJ1xuICAgIH1cbiAgICBhZGRUb1dhdGNoZWQobW92aWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53YXRjaGVkLnB1c2goe3RpdGxlOiBtb3ZpZX0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudG9XYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9XYXRjaFtpXS50aXRsZSA9PT0gbW92aWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvV2F0Y2guc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUud2F0Y2hlZClcbiAgICB9XG4gICAgc2hvd1dhdGNoZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IHRoaXMuc3RhdGUud2F0Y2hlZH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93V2F0Y2gnKVxuICAgIH1cbiAgICBzaG93VG9XYXRjaCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogdGhpcy5zdGF0ZS50b1dhdGNofSlcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3d0b3dhdGNoJylcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lc3NhZ2UgPSAnU29ycnksIHRoYXQgc2VhcmNoIHJldHVybmVkIDAgcmVzdWx0cydcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGVcIj5Nb3ZpZSBMaXN0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSBnb0NsaWNrPXt0aGlzLmdvQ2xpY2suYmluZCh0aGlzKX0gYWRkQ2xpY2s9e3RoaXMuYWRkQ2xpY2suYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30gY3VycmVudE1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSB3YXRjaD17dGhpcy5hZGRUb1dhdGNoZWQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgc2hvd1dhdGNoZWQ9e3RoaXMuc2hvd1dhdGNoZWQuYmluZCh0aGlzKX0gc2hvd1RvV2F0Y2g9e3RoaXMuc2hvd1RvV2F0Y2guYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ==