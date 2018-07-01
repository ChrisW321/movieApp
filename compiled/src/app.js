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
            movies: [
                // {title: 'Mean Girls'},
                // {title: 'Hackers'},
                // {title: 'The Grey'},
                // {title: 'Sunshine'},
                // {title: 'Ex Machina'},
            ],
            currentMovies: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'goClick',
        value: function goClick(input) {
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
                this.setState({
                    currentMovies: [{ title: 'Sorry, no movies matched what you were looking for' }]
                });
            }
        }
    }, {
        key: 'addClick',
        value: function addClick(input) {
            this.state.currentMovies.push({ title: input });
            this.state.movies.push({ title: input });
            this.setState({
                currentMovies: this.state.currentMovies
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(Search, { movies: this.state.currentMovies, goClick: this.goClick.bind(this), addClick: this.addClick.bind(this) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(MovieList, { movies: this.state.currentMovies, currentMovies: this.state.currentMovies })
                )
            );
        }
    }]);

    return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJjdXJyZW50TW92aWVzIiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyQ2FzZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwidGl0bGUiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwiZ29DbGljayIsImJpbmQiLCJhZGRDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxJLGFBREM7QUFRVEMsMkJBQWU7QUFSTixTQUFiO0FBRmU7QUFhbEI7Ozs7Z0NBQ09DLEssRUFBTztBQUNYQSxvQkFBUUEsTUFBTUMsV0FBTixFQUFSO0FBQ0EsZ0JBQUlDLFlBQVksRUFBaEI7QUFDQSxpQkFBS0wsS0FBTCxDQUFXRSxhQUFYLEdBQTJCLEVBQTNCO0FBQ0EsaUJBQUssSUFBSUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtOLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sTUFBdEMsRUFBOENELEdBQTlDLEVBQW1EO0FBQy9DRCwwQkFBVUcsSUFBVixDQUFlLEVBQUNDLE9BQU8sS0FBS1QsS0FBTCxDQUFXQyxNQUFYLENBQWtCSyxDQUFsQixFQUFxQkcsS0FBckIsQ0FBMkJMLFdBQTNCLEVBQVIsRUFBZjtBQUNIO0FBQ0QsaUJBQUssSUFBSUUsS0FBSSxDQUFiLEVBQWdCQSxLQUFJLEtBQUtOLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sTUFBdEMsRUFBOENELElBQTlDLEVBQW1EO0FBQy9DLG9CQUFLRCxVQUFVQyxFQUFWLEVBQWFHLEtBQWIsQ0FBbUJDLFFBQW5CLENBQTRCUCxLQUE1QixDQUFMLEVBQTBDO0FBQ3RDLHlCQUFLSCxLQUFMLENBQVdFLGFBQVgsQ0FBeUJNLElBQXpCLENBQStCLEtBQUtSLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkssRUFBbEIsQ0FBL0I7QUFDSDtBQUNKO0FBQ0QsaUJBQUtLLFFBQUwsQ0FBYztBQUNWVCwrQkFBZSxLQUFLRixLQUFMLENBQVdFO0FBRGhCLGFBQWQ7QUFHQSxnQkFBSSxLQUFLRixLQUFMLENBQVdFLGFBQVgsQ0FBeUJLLE1BQXpCLEtBQW9DLENBQXhDLEVBQTJDO0FBQ3ZDLHFCQUFLSSxRQUFMLENBQWM7QUFDVlQsbUNBQWUsQ0FBQyxFQUFDTyxPQUFPLG9EQUFSLEVBQUQ7QUFETCxpQkFBZDtBQUdIO0FBQ0o7OztpQ0FDUU4sSyxFQUFPO0FBQ1osaUJBQUtILEtBQUwsQ0FBV0UsYUFBWCxDQUF5Qk0sSUFBekIsQ0FBOEIsRUFBQ0MsT0FBT04sS0FBUixFQUE5QjtBQUNBLGlCQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLElBQWxCLENBQXVCLEVBQUNDLE9BQU9OLEtBQVIsRUFBdkI7QUFDQSxpQkFBS1EsUUFBTCxDQUFjO0FBQ1ZULCtCQUFlLEtBQUtGLEtBQUwsQ0FBV0U7QUFEaEIsYUFBZDtBQUdIOzs7aUNBQ1E7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxNQUFELElBQVEsUUFBUSxLQUFLRixLQUFMLENBQVdFLGFBQTNCLEVBQTBDLFNBQVMsS0FBS1UsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQW5ELEVBQTRFLFVBQVUsS0FBS0MsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQXRGO0FBQUwsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxTQUFELElBQVcsUUFBUSxLQUFLYixLQUFMLENBQVdFLGFBQTlCLEVBQTZDLGVBQWUsS0FBS0YsS0FBTCxDQUFXRSxhQUF2RTtBQUFMO0FBRkosYUFESjtBQU1IOzs7O0VBbERhYSxNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZXM6IFtcbiAgICAgICAgICAgICAgICAvLyB7dGl0bGU6ICdNZWFuIEdpcmxzJ30sXG4gICAgICAgICAgICAgICAgLy8ge3RpdGxlOiAnSGFja2Vycyd9LFxuICAgICAgICAgICAgICAgIC8vIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gICAgICAgICAgICAgICAgLy8ge3RpdGxlOiAnU3Vuc2hpbmUnfSxcbiAgICAgICAgICAgICAgICAvLyB7dGl0bGU6ICdFeCBNYWNoaW5hJ30sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZpZXM6IFtcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnb0NsaWNrKGlucHV0KSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGxvd2VyQ2FzZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb3dlckNhc2UucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCl9KVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICggbG93ZXJDYXNlW2ldLnRpdGxlLmluY2x1ZGVzKGlucHV0KSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCggdGhpcy5zdGF0ZS5tb3ZpZXNbaV0gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudE1vdmllczogdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50TW92aWVzOiBbe3RpdGxlOiAnU29ycnksIG5vIG1vdmllcyBtYXRjaGVkIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3InfV1cbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQ2xpY2soaW5wdXQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgICAgICB0aGlzLnN0YXRlLm1vdmllcy5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXNcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9IGdvQ2xpY2s9e3RoaXMuZ29DbGljay5iaW5kKHRoaXMpfSBhZGRDbGljaz17dGhpcy5hZGRDbGljay5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSBjdXJyZW50TW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9Lz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ==