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
            message: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'goClick',
        value: function goClick(input) {
            this.setState({ matches: false, message: '' });
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
            this.setState({
                currentMovies: this.state.currentMovies
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsImN1cnJlbnRNb3ZpZXMiLCJ0b1dhdGNoIiwid2F0Y2hlZCIsIm1hdGNoZXMiLCJtZXNzYWdlIiwiaW5wdXQiLCJzZXRTdGF0ZSIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsInB1c2giLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm1vdmllIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImdvQ2xpY2siLCJiaW5kIiwiYWRkQ2xpY2siLCJhZGRUb1dhdGNoZWQiLCJzaG93V2F0Y2hlZCIsInNob3dUb1dhdGNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsQ0FBQyxFQUFDQyxPQUFPLE1BQVIsRUFBRCxDQURDO0FBRVRDLDJCQUFlLENBQUMsRUFBQ0QsT0FBTyxNQUFSLEVBQUQsRUFBa0IsRUFBQ0EsT0FBTyxRQUFSLEVBQWxCLENBRk47QUFHVEUscUJBQVMsRUFIQTtBQUlUQyxxQkFBUyxFQUpBO0FBS1RDLHFCQUFTLEtBTEE7QUFNVEMscUJBQVM7QUFOQSxTQUFiO0FBRmU7QUFVbEI7Ozs7Z0NBQ09DLEssRUFBTztBQUNYLGlCQUFLQyxRQUFMLENBQWMsRUFBQ0gsU0FBUyxLQUFWLEVBQWlCQyxTQUFTLEVBQTFCLEVBQWQ7QUFDQUMsb0JBQVFBLE1BQU1FLFdBQU4sRUFBUjtBQUNBLGdCQUFJQyxZQUFZLEVBQWhCO0FBQ0EsaUJBQUtYLEtBQUwsQ0FBV0csYUFBWCxHQUEyQixFQUEzQjtBQUNBLGlCQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLWixL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LElBQUcsT0FBUjtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxNQUFELElBQVEsUUFBUSxLQUFLUCxLQUFMLENBQVdHLGFBQTNCLEVBQTBDLFNBQVMsS0FBS29CLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFuRCxFQUE0RSxVQUFVLEtBQUtDLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF0RjtBQUFMLGlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUssd0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS3hCLEtBQUwsQ0FBV0csYUFBOUIsRUFBNkMsZUFBZSxLQUFLSCxLQUFMLENBQVdHLGFBQXZFLEVBQXNGLE9BQU8sS0FBS3VCLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCLENBQTdGO0FBQ0wscUNBQWEsS0FBS0csV0FBTCxDQUFpQkgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEUixFQUNxQyxhQUFhLEtBQUtJLFdBQUwsQ0FBaUJKLElBQWpCLENBQXNCLElBQXRCLENBRGxEO0FBQUwsaUJBSEo7QUFLSTtBQUFBO0FBQUE7QUFBTSx5QkFBS3hCLEtBQUwsQ0FBV087QUFBakI7QUFMSixhQURKO0FBU0g7Ozs7RUF4RWFzQixNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZXM6IFt7dGl0bGU6ICd0ZXN0J31dLFxuICAgICAgICAgICAgY3VycmVudE1vdmllczogW3t0aXRsZTogJ3Rlc3QnfSwge3RpdGxlOiAnc2Vjb25kJ31dLFxuICAgICAgICAgICAgdG9XYXRjaDogW10sXG4gICAgICAgICAgICB3YXRjaGVkOiBbXSxcbiAgICAgICAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgfVxuICAgIH1cbiAgICBnb0NsaWNrKGlucHV0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXM6IGZhbHNlLCBtZXNzYWdlOiAnJ30pXG4gICAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGxvd2VyQ2FzZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb3dlckNhc2UucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCl9KVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICggbG93ZXJDYXNlW2ldLnRpdGxlLmluY2x1ZGVzKGlucHV0KSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCggdGhpcy5zdGF0ZS5tb3ZpZXNbaV0gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudE1vdmllczogdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVzOiB0cnVlfSlcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29JbnB1dCcpLnZhbHVlPSAnJ1xuXG4gICAgfVxuICAgIGFkZENsaWNrKGlucHV0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXM6IGZhbHNlLCBtZXNzYWdlOiAnJ30pXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpZXMucHVzaCh7dGl0bGU6IGlucHV0fSk7XG4gICAgICAgIHRoaXMuc3RhdGUudG9XYXRjaC5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZElucHV0JykudmFsdWU9ICcnXG4gICAgfVxuICAgIGFkZFRvV2F0Y2hlZChtb3ZpZSkge1xuICAgICAgICB0aGlzLnN0YXRlLndhdGNoZWQucHVzaCh7dGl0bGU6IG1vdmllfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50b1dhdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b1dhdGNoW2ldLnRpdGxlID09PSBtb3ZpZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9XYXRjaC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS53YXRjaGVkKVxuICAgIH1cbiAgICBzaG93V2F0Y2hlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vdmllczogdGhpcy5zdGF0ZS53YXRjaGVkfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3dXYXRjaCcpXG4gICAgfVxuICAgIHNob3dUb1dhdGNoKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLnRvV2F0Y2h9KVxuICAgICAgICBjb25zb2xlLmxvZygnc2hvd3Rvd2F0Y2gnKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVzc2FnZSA9ICdTb3JyeSwgdGhhdCBzZWFyY2ggcmV0dXJuZWQgMCByZXN1bHRzJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPk1vdmllIExpc3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9IGdvQ2xpY2s9e3RoaXMuZ29DbGljay5iaW5kKHRoaXMpfSBhZGRDbGljaz17dGhpcy5hZGRDbGljay5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSBjdXJyZW50TW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9IHdhdGNoPXt0aGlzLmFkZFRvV2F0Y2hlZC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICBzaG93V2F0Y2hlZD17dGhpcy5zaG93V2F0Y2hlZC5iaW5kKHRoaXMpfSBzaG93VG9XYXRjaD17dGhpcy5zaG93VG9XYXRjaC5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19