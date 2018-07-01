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
            if (event.keyCode === 13) {
                this.props.goClick(this.state.input);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiLCJnb0NsaWNrIiwiaGFuZGxlSW5wdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTztBQURFLFNBQWI7QUFGZTtBQUtsQjs7OztvQ0FDV0MsSyxFQUFPO0FBQ2YsaUJBQUtDLFFBQUwsQ0FBYztBQUNWRix1QkFBT0MsTUFBTUUsTUFBTixDQUFhQztBQURWLGFBQWQ7QUFHQSxnQkFBSUgsTUFBTUksT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QixxQkFBS1AsS0FBTCxDQUFXUSxPQUFYLENBQW1CLEtBQUtQLEtBQUwsQ0FBV0MsS0FBOUI7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSwrQ0FBTyxNQUFLLE1BQVo7QUFDQSw2QkFBUyxpQkFBQ0MsS0FBRDtBQUFBLCtCQUFXLE9BQUtNLFdBQUwsQ0FBaUJOLEtBQWpCLENBQVg7QUFBQSxxQkFEVDtBQUVBLGlDQUFZLGVBRlosR0FESjtBQUlJO0FBQUE7QUFBQSxzQkFBUSxTQUFTO0FBQUEsbUNBQU0sT0FBS0gsS0FBTCxDQUFXUSxPQUFYLENBQW1CLE9BQUtQLEtBQUwsQ0FBV0MsS0FBOUIsQ0FBTjtBQUFBLHlCQUFqQjtBQUFBO0FBQUE7QUFKSixhQURKO0FBUUg7Ozs7RUF6QmdCUSxNQUFNQyxTO0FBMkIzQjs7O0FBQ0FDLE9BQU9iLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5wdXQ6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nb0NsaWNrKHRoaXMuc3RhdGUuaW5wdXQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dChldmVudCl9IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG1vdmllc1wiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ29DbGljayh0aGlzLnN0YXRlLmlucHV0KX0gPkdvITwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IFxufVxuLy8gKCkgPT4gdGhpcy5oYW5kbGVHb0NsaWNrKClcbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19