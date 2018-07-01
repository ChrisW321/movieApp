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
                this.setState({ input: '' });
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
                this.setState({ addInput: '' });
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
                    React.createElement('input', { id: 'addInput', type: 'text',
                        onKeyUp: function onKeyUp(event) {
                            return _this2.addInput(event);
                        },
                        placeholder: 'Add movies' }),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this2.props.addClick(_this2.state.addInput);
                                _this2.setState({ addInput: '' });
                            } },
                        'Add'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', id: 'goInput',
                        onKeyUp: function onKeyUp(event) {
                            return _this2.handleInput(event);
                        },
                        placeholder: 'Search movies' }),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this2.props.goClick(_this2.state.input);
                                _this2.setState({ input: '' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImFkZElucHV0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSIsImdvQ2xpY2siLCJhZGRDbGljayIsImhhbmRsZUlucHV0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sRUFERTtBQUVUQyxzQkFBVTtBQUZELFNBQWI7QUFGZTtBQU1sQjs7OztvQ0FDV0MsSyxFQUFPO0FBQ2YsaUJBQUtDLFFBQUwsQ0FBYztBQUNWSCx1QkFBT0UsTUFBTUUsTUFBTixDQUFhQztBQURWLGFBQWQ7QUFHQSxnQkFBSUgsTUFBTUksT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QixxQkFBS1IsS0FBTCxDQUFXUyxPQUFYLENBQW1CLEtBQUtSLEtBQUwsQ0FBV0MsS0FBOUI7QUFDQSxxQkFBS0csUUFBTCxDQUFjLEVBQUNILE9BQU8sRUFBUixFQUFkO0FBQ0g7QUFDSjs7O2lDQUNRRSxLLEVBQU87QUFDWixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZGLDBCQUFVQyxNQUFNRSxNQUFOLENBQWFDO0FBRGIsYUFBZDtBQUdBLGdCQUFJSCxNQUFNSSxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3RCLHFCQUFLUixLQUFMLENBQVdVLFFBQVgsQ0FBb0IsS0FBS1QsS0FBTCxDQUFXRSxRQUEvQjtBQUNBLHFCQUFLRSxRQUFMLENBQWMsRUFBQ0YsVUFBVSxFQUFYLEVBQWQ7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSSxtREFBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxNQUExQjtBQUNBLGlDQUFTLGlCQUFDQyxLQUFEO0FBQUEsbUNBQVcsT0FBS0QsUUFBTCxDQUFjQyxLQUFkLENBQVg7QUFBQSx5QkFEVDtBQUVBLHFDQUFZLFlBRlosR0FESjtBQUlJO0FBQUE7QUFBQSwwQkFBUSxTQUFTLG1CQUFNO0FBQ25CLHVDQUFLSixLQUFMLENBQVdVLFFBQVgsQ0FBb0IsT0FBS1QsS0FBTCxDQUFXRSxRQUEvQjtBQUNBLHVDQUFLRSxRQUFMLENBQWMsRUFBQ0YsVUFBVSxFQUFYLEVBQWQ7QUFDSCw2QkFIRDtBQUFBO0FBQUE7QUFKSixpQkFESjtBQVVJO0FBQUE7QUFBQTtBQUNJLG1EQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFNBQXRCO0FBQ0EsaUNBQVMsaUJBQUNDLEtBQUQ7QUFBQSxtQ0FBVyxPQUFLTyxXQUFMLENBQWlCUCxLQUFqQixDQUFYO0FBQUEseUJBRFQ7QUFFQSxxQ0FBWSxlQUZaLEdBREo7QUFJSTtBQUFBO0FBQUEsMEJBQVEsU0FBUyxtQkFBTTtBQUNuQix1Q0FBS0osS0FBTCxDQUFXUyxPQUFYLENBQW1CLE9BQUtSLEtBQUwsQ0FBV0MsS0FBOUI7QUFDQSx1Q0FBS0csUUFBTCxDQUFjLEVBQUNILE9BQU8sRUFBUixFQUFkO0FBQ0gsNkJBSEQ7QUFBQTtBQUFBO0FBSko7QUFWSixhQURKO0FBc0JIOzs7O0VBbERnQlUsTUFBTUMsUztBQW9EM0I7OztBQUNBQyxPQUFPZixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKSBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlucHV0OiAnJyxcbiAgICAgICAgICAgIGFkZElucHV0OiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ29DbGljayh0aGlzLnN0YXRlLmlucHV0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6ICcnfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFkZElucHV0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFkZENsaWNrKHRoaXMuc3RhdGUuYWRkSW5wdXQpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRJbnB1dDogJyd9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhZGRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGV2ZW50KSA9PiB0aGlzLmFkZElucHV0KGV2ZW50KX0gXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIG1vdmllc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZENsaWNrKHRoaXMuc3RhdGUuYWRkSW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRJbnB1dDogJyd9KVxuICAgICAgICAgICAgICAgICAgICB9fSA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJnb0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0KGV2ZW50KX0gXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG1vdmllc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdvQ2xpY2sodGhpcy5zdGF0ZS5pbnB1dClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0OiAnJ30pXG4gICAgICAgICAgICAgICAgICAgIH19ID5HbyE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBcbn1cbi8vICgpID0+IHRoaXMuaGFuZGxlR29DbGljaygpXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==