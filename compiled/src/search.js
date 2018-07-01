"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            input: ''
        };
        return _this;
    }

    _createClass(Search, [{
        key: "handleInput",
        value: function handleInput(event) {
            this.setState({
                input: event.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement("input", { type: "text",
                    onKeyUp: function onKeyUp(event) {
                        return _this2.handleInput(event);
                    },
                    placeholder: "Search movies" }),
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this2.props.goClick(_this2.state.input);
                        } },
                    "Go!"
                )
            );
        }
    }]);

    return Search;
}(React.Component);
// () => this.handleGoClick()


window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0IiwiZ29DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPO0FBREUsU0FBYjtBQUZlO0FBS2xCOzs7O29DQUNXQyxLLEVBQU87QUFDZixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZGLHVCQUFPQyxNQUFNRSxNQUFOLENBQWFDO0FBRFYsYUFBZDtBQUdIOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSwrQ0FBTyxNQUFLLE1BQVo7QUFDQSw2QkFBUyxpQkFBQ0gsS0FBRDtBQUFBLCtCQUFXLE9BQUtJLFdBQUwsQ0FBaUJKLEtBQWpCLENBQVg7QUFBQSxxQkFEVDtBQUVBLGlDQUFZLGVBRlosR0FESjtBQUlJO0FBQUE7QUFBQSxzQkFBUSxTQUFTO0FBQUEsbUNBQU0sT0FBS0gsS0FBTCxDQUFXUSxPQUFYLENBQW1CLE9BQUtQLEtBQUwsQ0FBV0MsS0FBOUIsQ0FBTjtBQUFBLHlCQUFqQjtBQUFBO0FBQUE7QUFKSixhQURKO0FBUUg7Ozs7RUF0QmdCTyxNQUFNQyxTO0FBd0IzQjs7O0FBQ0FDLE9BQU9aLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5wdXQ6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXQoZXZlbnQpfSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtb3ZpZXNcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdvQ2xpY2sodGhpcy5zdGF0ZS5pbnB1dCl9ID5HbyE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBcbn1cbi8vICgpID0+IHRoaXMuaGFuZGxlR29DbGljaygpXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==