'use strict';

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
            input: '',
            addInput: ''
        };
        return _this;
    }

    _createClass(Search, [{
        key: 'handleInput',
        value: function handleInput(event) {
            this.setState({
                input: event.target.value
            });
            if (event.keyCode === 13) {
                this.props.goClick(this.state.input);
                // this.setState({input: ''})
            }
        }
    }, {
        key: 'addInput',
        value: function addInput(event) {
            this.setState({
                addInput: event.target.value
            });
            if (event.keyCode === 13) {
                this.props.addClick(this.state.addInput);
                // this.setState({addInput: ''})
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text',
                        onKeyUp: function onKeyUp(event) {
                            return _this2.addInput(event);
                        },
                        placeholder: 'Add movies' }),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this2.props.addClick(_this2.state.addInput);
                            } },
                        'Add'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text',
                        onKeyUp: function onKeyUp(event) {
                            return _this2.handleInput(event);
                        },
                        placeholder: 'Search movies' }),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this2.props.goClick(_this2.state.input);
                            } },
                        'Go!'
                    )
                )
            );
        }
    }]);

    return Search;
}(React.Component);
// () => this.handleGoClick()


window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImFkZElucHV0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSIsImdvQ2xpY2siLCJhZGRDbGljayIsImhhbmRsZUlucHV0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sRUFERTtBQUVUQyxzQkFBVTtBQUZELFNBQWI7QUFGZTtBQU1sQjs7OztvQ0FDV0MsSyxFQUFPO0FBQ2YsaUJBQUtDLFFBQUwsQ0FBYztBQUNWSCx1QkFBT0UsTUFBTUUsTUFBTixDQUFhQztBQURWLGFBQWQ7QUFHQSxnQkFBSUgsTUFBTUksT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QixxQkFBS1IsS0FBTCxDQUFXUyxPQUFYLENBQW1CLEtBQUtSLEtBQUwsQ0FBV0MsS0FBOUI7QUFDQTtBQUNIO0FBQ0o7OztpQ0FDUUUsSyxFQUFPO0FBQ1osaUJBQUtDLFFBQUwsQ0FBYztBQUNWRiwwQkFBVUMsTUFBTUUsTUFBTixDQUFhQztBQURiLGFBQWQ7QUFHQSxnQkFBSUgsTUFBTUksT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QixxQkFBS1IsS0FBTCxDQUFXVSxRQUFYLENBQW9CLEtBQUtULEtBQUwsQ0FBV0UsUUFBL0I7QUFDQTtBQUNIO0FBQ0o7OztpQ0FFUTtBQUFBOztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJLG1EQUFPLE1BQUssTUFBWjtBQUNBLGlDQUFTLGlCQUFDQyxLQUFEO0FBQUEsbUNBQVcsT0FBS0QsUUFBTCxDQUFjQyxLQUFkLENBQVg7QUFBQSx5QkFEVDtBQUVBLHFDQUFZLFlBRlosR0FESjtBQUlJO0FBQUE7QUFBQSwwQkFBUSxTQUFTO0FBQUEsdUNBQU0sT0FBS0osS0FBTCxDQUFXVSxRQUFYLENBQW9CLE9BQUtULEtBQUwsQ0FBV0UsUUFBL0IsQ0FBTjtBQUFBLDZCQUFqQjtBQUFBO0FBQUE7QUFKSixpQkFESjtBQU9JO0FBQUE7QUFBQTtBQUNJLG1EQUFPLE1BQUssTUFBWjtBQUNBLGlDQUFTLGlCQUFDQyxLQUFEO0FBQUEsbUNBQVcsT0FBS08sV0FBTCxDQUFpQlAsS0FBakIsQ0FBWDtBQUFBLHlCQURUO0FBRUEscUNBQVksZUFGWixHQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFRLFNBQVM7QUFBQSx1Q0FBTSxPQUFLSixLQUFMLENBQVdTLE9BQVgsQ0FBbUIsT0FBS1IsS0FBTCxDQUFXQyxLQUE5QixDQUFOO0FBQUEsNkJBQWpCO0FBQUE7QUFBQTtBQUpKO0FBUEosYUFESjtBQWdCSDs7OztFQTVDZ0JVLE1BQU1DLFM7QUE4QzNCOzs7QUFDQUMsT0FBT2YsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcykgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbnB1dDogJycsXG4gICAgICAgICAgICBhZGRJbnB1dDogJydcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlucHV0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdvQ2xpY2sodGhpcy5zdGF0ZS5pbnB1dClcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2lucHV0OiAnJ30pXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhZGRJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGRDbGljayh0aGlzLnN0YXRlLmFkZElucHV0KVxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7YWRkSW5wdXQ6ICcnfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGV2ZW50KSA9PiB0aGlzLmFkZElucHV0KGV2ZW50KX0gXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIG1vdmllc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmFkZENsaWNrKHRoaXMuc3RhdGUuYWRkSW5wdXQpfSA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dChldmVudCl9IFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtb3ZpZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5nb0NsaWNrKHRoaXMuc3RhdGUuaW5wdXQpfSA+R28hPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gXG59XG4vLyAoKSA9PiB0aGlzLmhhbmRsZUdvQ2xpY2soKVxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=