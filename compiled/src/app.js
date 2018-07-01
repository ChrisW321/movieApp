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
            movies: [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement(Search, null)
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(MovieList, { movies: this.state.movies })
                )
            );
        }
    }]);

    return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLENBQ0osRUFBQ0MsT0FBTyxZQUFSLEVBREksRUFFSixFQUFDQSxPQUFPLFNBQVIsRUFGSSxFQUdKLEVBQUNBLE9BQU8sVUFBUixFQUhJLEVBSUosRUFBQ0EsT0FBTyxVQUFSLEVBSkksRUFLSixFQUFDQSxPQUFPLFlBQVIsRUFMSTtBQURDLFNBQWI7QUFGZTtBQVdsQjs7OztpQ0FDUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLE1BQUQ7QUFBTCxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtGLEtBQUwsQ0FBV0MsTUFBOUI7QUFBTDtBQUZKLGFBREo7QUFNSDs7OztFQXBCYUUsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVzOiBbXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ0hhY2tlcnMnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdUaGUgR3JleSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnRXggTWFjaGluYSd9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PFNlYXJjaCAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19