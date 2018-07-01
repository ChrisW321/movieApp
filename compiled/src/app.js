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
                console.log(this.state.currentMovies, 'current movies');
                console.log(this.state.movies, 'movies');
            }
            document.getElementById('goInput').value = '';
        }
    }, {
        key: 'addClick',
        value: function addClick(input) {
            this.state.currentMovies.push({ title: input });
            this.state.movies.push({ title: input });
            this.setState({
                currentMovies: this.state.currentMovies
            });
            console.log(this.state.currentMovies, 'currentmovies');
            document.getElementById('addInput').value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJjdXJyZW50TW92aWVzIiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyQ2FzZSIsImkiLCJsZW5ndGgiLCJwdXNoIiwidGl0bGUiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImdvQ2xpY2siLCJiaW5kIiwiYWRkQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMSSxhQURDO0FBUVRDLDJCQUFlO0FBUk4sU0FBYjtBQUZlO0FBYWxCOzs7O2dDQUNPQyxLLEVBQU87QUFDWEEsb0JBQVFBLE1BQU1DLFdBQU4sRUFBUjtBQUNBLGdCQUFJQyxZQUFZLEVBQWhCO0FBQ0EsaUJBQUtMLEtBQUwsQ0FBV0UsYUFBWCxHQUEyQixFQUEzQjtBQUNBLGlCQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLE1BQXRDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUMvQ0QsMEJBQVVHLElBQVYsQ0FBZSxFQUFDQyxPQUFPLEtBQUtULEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkssQ0FBbEIsRUFBcUJHLEtBQXJCLENBQTJCTCxXQUEzQixFQUFSLEVBQWY7QUFDSDtBQUNELGlCQUFLLElBQUlFLEtBQUksQ0FBYixFQUFnQkEsS0FBSSxLQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0JNLE1BQXRDLEVBQThDRCxJQUE5QyxFQUFtRDtBQUMvQyxvQkFBS0QsVUFBVUMsRUFBVixFQUFhRyxLQUFiLENBQW1CQyxRQUFuQixDQUE0QlAsS0FBNUIsQ0FBTCxFQUEwQztBQUN0Qyx5QkFBS0gsS0FBTCxDQUFXRSxhQUFYLENBQXlCTSxJQUF6QixDQUErQixLQUFLUixLQUFMLENBQVdDLE1BQVgsQ0FBa0JLLEVBQWxCLENBQS9CO0FBQ0g7QUFDSjtBQUNELGlCQUFLSyxRQUFMLENBQWM7QUFDVlQsK0JBQWUsS0FBS0YsS0FBTCxDQUFXRTtBQURoQixhQUFkO0FBR0EsZ0JBQUksS0FBS0YsS0FBTCxDQUFXRSxhQUFYLENBQXlCSyxNQUF6QixLQUFvQyxDQUF4QyxFQUEyQztBQUN2QyxxQkFBS0ksUUFBTCxDQUFjO0FBQ1ZULG1DQUFlLENBQUMsRUFBQ08sT0FBTyxvREFBUixFQUFEO0FBREwsaUJBQWQ7QUFHQUcsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLYixLQUFMLENBQVdFLGFBQXZCLEVBQXNDLGdCQUF0QztBQUNBVSx3QkFBUUMsR0FBUixDQUFZLEtBQUtiLEtBQUwsQ0FBV0MsTUFBdkIsRUFBK0IsUUFBL0I7QUFDSDtBQUNEYSxxQkFBU0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FBbkMsR0FBMEMsRUFBMUM7QUFFSDs7O2lDQUNRYixLLEVBQU87QUFDWixpQkFBS0gsS0FBTCxDQUFXRSxhQUFYLENBQXlCTSxJQUF6QixDQUE4QixFQUFDQyxPQUFPTixLQUFSLEVBQTlCO0FBQ0EsaUJBQUtILEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sSUFBbEIsQ0FBdUIsRUFBQ0MsT0FBT04sS0FBUixFQUF2QjtBQUNBLGlCQUFLUSxRQUFMLENBQWM7QUFDVlQsK0JBQWUsS0FBS0YsS0FBTCxDQUFXRTtBQURoQixhQUFkO0FBR0FVLG9CQUFRQyxHQUFSLENBQVksS0FBS2IsS0FBTCxDQUFXRSxhQUF2QixFQUFzQyxlQUF0QztBQUNBWSxxQkFBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsR0FBMkMsRUFBM0M7QUFDSDs7O2lDQUNRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUssd0NBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS2hCLEtBQUwsQ0FBV0UsYUFBM0IsRUFBMEMsU0FBUyxLQUFLZSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBbkQsRUFBNEUsVUFBVSxLQUFLQyxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBdEY7QUFBTCxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtsQixLQUFMLENBQVdFLGFBQTlCLEVBQTZDLGVBQWUsS0FBS0YsS0FBTCxDQUFXRSxhQUF2RTtBQUFMO0FBRkosYUFESjtBQU1IOzs7O0VBeERha0IsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVzOiBbXG4gICAgICAgICAgICAgICAgLy8ge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuICAgICAgICAgICAgICAgIC8vIHt0aXRsZTogJ0hhY2tlcnMnfSxcbiAgICAgICAgICAgICAgICAvLyB7dGl0bGU6ICdUaGUgR3JleSd9LFxuICAgICAgICAgICAgICAgIC8vIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gICAgICAgICAgICAgICAgLy8ge3RpdGxlOiAnRXggTWFjaGluYSd9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiBbXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuICAgIGdvQ2xpY2soaW5wdXQpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgbG93ZXJDYXNlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvd2VyQ2FzZS5wdXNoKHt0aXRsZTogdGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKX0pXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCBsb3dlckNhc2VbaV0udGl0bGUuaW5jbHVkZXMoaW5wdXQpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5wdXNoKCB0aGlzLnN0YXRlLm1vdmllc1tpXSApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXNcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZpZXM6IFt7dGl0bGU6ICdTb3JyeSwgbm8gbW92aWVzIG1hdGNoZWQgd2hhdCB5b3Ugd2VyZSBsb29raW5nIGZvcid9XVxuICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXMsICdjdXJyZW50IG1vdmllcycpIFxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXMsICdtb3ZpZXMnKSAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0lucHV0JykudmFsdWU9ICcnXG5cbiAgICB9XG4gICAgYWRkQ2xpY2soaW5wdXQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgICAgICB0aGlzLnN0YXRlLm1vdmllcy5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXNcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzLCAnY3VycmVudG1vdmllcycpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRJbnB1dCcpLnZhbHVlPSAnJ1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PFNlYXJjaCBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30gZ29DbGljaz17dGhpcy5nb0NsaWNrLmJpbmQodGhpcyl9IGFkZENsaWNrPXt0aGlzLmFkZENsaWNrLmJpbmQodGhpcyl9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9IGN1cnJlbnRNb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30vPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19