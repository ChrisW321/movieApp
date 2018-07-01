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
            currentMovies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
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
                    React.createElement(Search, { movies: this.state.currentMovies, goClick: this.goClick.bind(this) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsImN1cnJlbnRNb3ZpZXMiLCJpbnB1dCIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsInB1c2giLCJpbmNsdWRlcyIsInNldFN0YXRlIiwiZ29DbGljayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxDQUNKLEVBQUNDLE9BQU8sWUFBUixFQURJLEVBRUosRUFBQ0EsT0FBTyxTQUFSLEVBRkksRUFHSixFQUFDQSxPQUFPLFVBQVIsRUFISSxFQUlKLEVBQUNBLE9BQU8sVUFBUixFQUpJLEVBS0osRUFBQ0EsT0FBTyxZQUFSLEVBTEksQ0FEQztBQVFUQywyQkFBZSxDQUNYLEVBQUNELE9BQU8sWUFBUixFQURXLEVBRVgsRUFBQ0EsT0FBTyxTQUFSLEVBRlcsRUFHWCxFQUFDQSxPQUFPLFVBQVIsRUFIVyxFQUlYLEVBQUNBLE9BQU8sVUFBUixFQUpXLEVBS1gsRUFBQ0EsT0FBTyxZQUFSLEVBTFc7QUFSTixTQUFiO0FBRmU7QUFrQmxCOzs7O2dDQUNPRSxLLEVBQU87QUFDWEEsb0JBQVFBLE1BQU1DLFdBQU4sRUFBUjtBQUNBLGdCQUFJQyxZQUFZLEVBQWhCO0FBQ0EsaUJBQUtOLEtBQUwsQ0FBV0csYUFBWCxHQUEyQixFQUEzQjtBQUNBLGlCQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLUCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLE1BQXRDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUMvQ0QsMEJBQVVHLElBQVYsQ0FBZSxFQUFDUCxPQUFPLEtBQUtGLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk0sQ0FBbEIsRUFBcUJMLEtBQXJCLENBQTJCRyxXQUEzQixFQUFSLEVBQWY7QUFDSDtBQUNELGlCQUFLLElBQUlFLEtBQUksQ0FBYixFQUFnQkEsS0FBSSxLQUFLUCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLE1BQXRDLEVBQThDRCxJQUE5QyxFQUFtRDtBQUMvQyxvQkFBS0QsVUFBVUMsRUFBVixFQUFhTCxLQUFiLENBQW1CUSxRQUFuQixDQUE0Qk4sS0FBNUIsQ0FBTCxFQUEwQztBQUN0Qyx5QkFBS0osS0FBTCxDQUFXRyxhQUFYLENBQXlCTSxJQUF6QixDQUErQixLQUFLVCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLEVBQWxCLENBQS9CO0FBQ0g7QUFDSjtBQUNELGlCQUFLSSxRQUFMLENBQWM7QUFDVlIsK0JBQWUsS0FBS0gsS0FBTCxDQUFXRztBQURoQixhQUFkO0FBR0g7OztpQ0FDUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtILEtBQUwsQ0FBV0csYUFBM0IsRUFBMEMsU0FBUyxLQUFLUyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBbkQ7QUFBTCxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtiLEtBQUwsQ0FBV0csYUFBOUIsRUFBNkMsZUFBZSxLQUFLSCxLQUFMLENBQVdHLGFBQXZFO0FBQUw7QUFGSixhQURKO0FBTUg7Ozs7RUEzQ2FXLE1BQU1DLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vdmllczogW1xuICAgICAgICAgICAgICAgIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnVGhlIEdyZXknfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdW5zaGluZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgY3VycmVudE1vdmllczogW1xuICAgICAgICAgICAgICAgIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnVGhlIEdyZXknfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdW5zaGluZSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnb0NsaWNrKGlucHV0KSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGxvd2VyQ2FzZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb3dlckNhc2UucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUubW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCl9KVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICggbG93ZXJDYXNlW2ldLnRpdGxlLmluY2x1ZGVzKGlucHV0KSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMucHVzaCggdGhpcy5zdGF0ZS5tb3ZpZXNbaV0gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudE1vdmllczogdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSBnb0NsaWNrPXt0aGlzLmdvQ2xpY2suYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30gY3VycmVudE1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfS8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0=