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
            movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }],
            currentMovies: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'goClick',
        value: function goClick(input) {
            input = input.toLowerCase();
            var lowerCase = [];
            for (var i = 0; i < this.state.movies.length; i++) {
                lowerCase.push({ title: this.state.movies[i].title.toLowerCase() });
            }
            for (var _i = 0; _i < this.state.movies.length; _i++) {
                if (lowerCase[_i].title.includes(input)) {
                    this.state.currentMovies.push(this.state.movies[_i]);
                }
            }
            console.log(this.state.currentMovies);
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
                    React.createElement(Search, { movies: this.state.movies, goClick: this.goClick.bind(this) })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(MovieList, { movies: this.state.movies, currentMovies: this.state.currentMovies })
                )
            );
        }
    }]);

    return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsImN1cnJlbnRNb3ZpZXMiLCJpbnB1dCIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsInB1c2giLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJnb0NsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLENBQ0osRUFBQ0MsT0FBTyxZQUFSLEVBREksRUFFSixFQUFDQSxPQUFPLFNBQVIsRUFGSSxFQUdKLEVBQUNBLE9BQU8sVUFBUixFQUhJLEVBSUosRUFBQ0EsT0FBTyxVQUFSLEVBSkksRUFLSixFQUFDQSxPQUFPLFlBQVIsRUFMSSxDQURDO0FBUVRDLDJCQUFlO0FBUk4sU0FBYjtBQUZlO0FBY2xCOzs7O2dDQUNPQyxLLEVBQU87QUFDWEEsb0JBQVFBLE1BQU1DLFdBQU4sRUFBUjtBQUNBLGdCQUFJQyxZQUFZLEVBQWhCO0FBQ0EsaUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtQLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sTUFBdEMsRUFBOENELEdBQTlDLEVBQW1EO0FBQy9DRCwwQkFBVUcsSUFBVixDQUFlLEVBQUNQLE9BQU8sS0FBS0YsS0FBTCxDQUFXQyxNQUFYLENBQWtCTSxDQUFsQixFQUFxQkwsS0FBckIsQ0FBMkJHLFdBQTNCLEVBQVIsRUFBZjtBQUNIO0FBQ0QsaUJBQUssSUFBSUUsS0FBSSxDQUFiLEVBQWdCQSxLQUFJLEtBQUtQLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sTUFBdEMsRUFBOENELElBQTlDLEVBQW1EO0FBQy9DLG9CQUFLRCxVQUFVQyxFQUFWLEVBQWFMLEtBQWIsQ0FBbUJRLFFBQW5CLENBQTRCTixLQUE1QixDQUFMLEVBQTBDO0FBQ3RDLHlCQUFLSixLQUFMLENBQVdHLGFBQVgsQ0FBeUJNLElBQXpCLENBQStCLEtBQUtULEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sRUFBbEIsQ0FBL0I7QUFDSDtBQUNKO0FBQ0RJLG9CQUFRQyxHQUFSLENBQVksS0FBS1osS0FBTCxDQUFXRyxhQUF2QjtBQUNIOzs7aUNBQ1E7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxNQUFELElBQVEsUUFBUSxLQUFLSCxLQUFMLENBQVdDLE1BQTNCLEVBQW1DLFNBQVMsS0FBS1ksT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQTVDO0FBQUwsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxTQUFELElBQVcsUUFBUSxLQUFLZCxLQUFMLENBQVdDLE1BQTlCLEVBQXNDLGVBQWUsS0FBS0QsS0FBTCxDQUFXRyxhQUFoRTtBQUFMO0FBRkosYUFESjtBQU1IOzs7O0VBcENhWSxNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZXM6IFtcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdNZWFuIEdpcmxzJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSGFja2Vycyd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnU3Vuc2hpbmUnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdFeCBNYWNoaW5hJ30sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZpZXM6IFtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnb0NsaWNrKGlucHV0KSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGxvd2VyQ2FzZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb3dlckNhc2UucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCl9KVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICggbG93ZXJDYXNlW2ldLnRpdGxlLmluY2x1ZGVzKGlucHV0KSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCggdGhpcy5zdGF0ZS5tb3ZpZXNbaV0gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudE1vdmllcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGdvQ2xpY2s9e3RoaXMuZ29DbGljay5iaW5kKHRoaXMpfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGN1cnJlbnRNb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30vPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19