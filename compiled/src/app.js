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
            currentMovies: [{ title: 'test' }],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsImN1cnJlbnRNb3ZpZXMiLCJ0b1dhdGNoIiwid2F0Y2hlZCIsIm1hdGNoZXMiLCJtZXNzYWdlIiwiaW5wdXQiLCJzZXRTdGF0ZSIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsInB1c2giLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm1vdmllIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImdvQ2xpY2siLCJiaW5kIiwiYWRkQ2xpY2siLCJhZGRUb1dhdGNoZWQiLCJzaG93V2F0Y2hlZCIsInNob3dUb1dhdGNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsQ0FBQyxFQUFDQyxPQUFPLE1BQVIsRUFBRCxDQURDO0FBRVRDLDJCQUFlLENBQUMsRUFBQ0QsT0FBTyxNQUFSLEVBQUQsQ0FGTjtBQUdURSxxQkFBUyxFQUhBO0FBSVRDLHFCQUFTLEVBSkE7QUFLVEMscUJBQVMsS0FMQTtBQU1UQyxxQkFBUztBQU5BLFNBQWI7QUFGZTtBQVVsQjs7OztnQ0FDT0MsSyxFQUFPO0FBQ1gsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDSCxTQUFTLEtBQVYsRUFBaUJDLFNBQVMsRUFBMUIsRUFBZDtBQUNBQyxvQkFBUUEsTUFBTUUsV0FBTixFQUFSO0FBQ0EsZ0JBQUlDLFlBQVksRUFBaEI7QUFDQSxpQkFBS1gsS0FBTCxDQUFXRyxhQUFYLEdBQTJCLEVBQTNCO0FBQ0EsaUJBQUssSUFBSVMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtaLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlksTUFBdEMs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QUFMLENBQVdHLGFBQTNCLEVBQTBDLFNBQVMsS0FBS29CLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFuRCxFQUE0RSxVQUFVLEtBQUtDLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF0RjtBQUFMLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUssd0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS3hCLEtBQUwsQ0FBV0csYUFBOUIsRUFBNkMsZUFBZSxLQUFLSCxLQUFMLENBQVdHLGFBQXZFLEVBQXNGLE9BQU8sS0FBS3VCLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCLENBQTdGO0FBQ0wscUNBQWEsS0FBS0csV0FBTCxDQUFpQkgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEUixFQUNxQyxhQUFhLEtBQUtJLFdBQUwsQ0FBaUJKLElBQWpCLENBQXNCLElBQXRCLENBRGxEO0FBQUwsaUJBRko7QUFJSTtBQUFBO0FBQUE7QUFBTSx5QkFBS3hCLEtBQUwsQ0FBV087QUFBakI7QUFKSixhQURKO0FBUUg7Ozs7RUF2RWFzQixNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZXM6IFt7dGl0bGU6ICd0ZXN0J31dLFxuICAgICAgICAgICAgY3VycmVudE1vdmllczogW3t0aXRsZTogJ3Rlc3QnfV0sXG4gICAgICAgICAgICB0b1dhdGNoOiBbXSxcbiAgICAgICAgICAgIHdhdGNoZWQ6IFtdLFxuICAgICAgICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIGdvQ2xpY2soaW5wdXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWF0Y2hlczogZmFsc2UsIG1lc3NhZ2U6ICcnfSlcbiAgICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgbG93ZXJDYXNlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvd2VyQ2FzZS5wdXNoKHt0aXRsZTogdGhpcy5zdGF0ZS5tb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKX0pXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1vdmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCBsb3dlckNhc2VbaV0udGl0bGUuaW5jbHVkZXMoaW5wdXQpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5wdXNoKCB0aGlzLnN0YXRlLm1vdmllc1tpXSApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXNcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudE1vdmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXM6IHRydWV9KVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb0lucHV0JykudmFsdWU9ICcnXG5cbiAgICB9XG4gICAgYWRkQ2xpY2soaW5wdXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWF0Y2hlczogZmFsc2UsIG1lc3NhZ2U6ICcnfSlcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgICAgICB0aGlzLnN0YXRlLm1vdmllcy5wdXNoKHt0aXRsZTogaW5wdXR9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS50b1dhdGNoLnB1c2goe3RpdGxlOiBpbnB1dH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLmN1cnJlbnRNb3ZpZXN9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSW5wdXQnKS52YWx1ZT0gJydcbiAgICB9XG4gICAgYWRkVG9XYXRjaGVkKG1vdmllKSB7XG4gICAgICAgIHRoaXMuc3RhdGUud2F0Y2hlZC5wdXNoKHt0aXRsZTogbW92aWV9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnRvV2F0Y2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvV2F0Y2hbaV0udGl0bGUgPT09IG1vdmllKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b1dhdGNoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLndhdGNoZWQpXG4gICAgfVxuICAgIHNob3dXYXRjaGVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW92aWVzOiB0aGlzLnN0YXRlLndhdGNoZWR9KVxuICAgICAgICBjb25zb2xlLmxvZygnc2hvd1dhdGNoJylcbiAgICB9XG4gICAgc2hvd1RvV2F0Y2goKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb3ZpZXM6IHRoaXMuc3RhdGUudG9XYXRjaH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93dG93YXRjaCcpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWF0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlID0gJ1NvcnJ5LCB0aGF0IHNlYXJjaCByZXR1cm5lZCAwIHJlc3VsdHMnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSBnb0NsaWNrPXt0aGlzLmdvQ2xpY2suYmluZCh0aGlzKX0gYWRkQ2xpY2s9e3RoaXMuYWRkQ2xpY2suYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudE1vdmllc30gY3VycmVudE1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TW92aWVzfSB3YXRjaD17dGhpcy5hZGRUb1dhdGNoZWQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgc2hvd1dhdGNoZWQ9e3RoaXMuc2hvd1dhdGNoZWQuYmluZCh0aGlzKX0gc2hvd1RvV2F0Y2g9e3RoaXMuc2hvd1RvV2F0Y2guYmluZCh0aGlzKX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ==