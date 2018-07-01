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
            console.log(this.state.input);
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
                    placeholder: "Search movies" })
            );
        }
    }]);

    return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbnB1dCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPO0FBREUsU0FBYjtBQUZlO0FBS2xCOzs7O29DQUNXQyxLLEVBQU87QUFDZixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZGLHVCQUFPQyxNQUFNRSxNQUFOLENBQWFDO0FBRFYsYUFBZDtBQUdBQyxvQkFBUUMsR0FBUixDQUFZLEtBQUtQLEtBQUwsQ0FBV0MsS0FBdkI7QUFDSDs7O2lDQUNRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksK0NBQU8sTUFBSyxNQUFaO0FBQ0EsNkJBQVMsaUJBQUNDLEtBQUQ7QUFBQSwrQkFBVyxPQUFLTSxXQUFMLENBQWlCTixLQUFqQixDQUFYO0FBQUEscUJBRFQ7QUFFQSxpQ0FBWSxlQUZaO0FBREosYUFESjtBQU9IOzs7O0VBckJnQk8sTUFBTUMsUzs7QUF3QjNCQyxPQUFPYixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKSBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlucHV0OiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlucHV0KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXQoZXZlbnQpfSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtb3ZpZXNcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gXG59XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19