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
                        { id: 'add', onClick: function onClick() {
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
                        { id: 'go', onClick: function onClick() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImFkZElucHV0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSIsImdvQ2xpY2siLCJhZGRDbGljayIsImhhbmRsZUlucHV0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sRUFERTtBQUVUQyxzQkFBVTtBQUZELFNBQWI7QUFGZTtBQU1sQjs7OztvQ0FDV0MsSyxFQUFPO0FBQ2YsaUJBQUtDLFFBQUwsQ0FBYztBQUNWSCx1QkFBT0UsTUFBTUUsTUFBTixDQUFhQztBQURWLGFBQWQ7QUFHQSxnQkFBSUgsTUFBTUksT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QixxQkFBS1IsS0FBTCxDQUFXUyxPQUFYLENBQW1CLEtBQUtSLEtBQUwsQ0FBV0MsS0FBOUI7QUFDQSxxQkFBS0csUUFBTCxDQUFjLEVBQUNILE9BQU8sRUFBUixFQUFkO0FBQ0g7QUFDSjs7O2lDQUNRRSxLLEVBQU87QUFDWixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZGLDBCQUFVQyxNQUFNRSxNQUFOLENBQWFDO0FBRGIsYUFBZDtBQUdBLGdCQUFJSCxNQUFNSSxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3RCLHFCQUFLUixLQUFMLENBQVdVLFFBQVgsQ0FBb0IsS0FBS1QsS0FBTCxDQUFXRSxRQUEvQjtBQUNBLHFCQUFLRSxRQUFMLENBQWMsRUFBQ0YsVUFBVSxFQUFYLEVBQWQ7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSSxtREFBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxNQUExQjtBQUNBLGlDQUFTLGlCQUFDQyxLQUFEO0FBQUEsbUNBQVcsT0FBS0QsUUFBTCxDQUFjQyxLQUFkLENBQVg7QUFBQSx5QkFEVDtBQUVBLHFDQUFZLFlBRlosR0FESjtBQUlJO0FBQUE7QUFBQSwwQkFBUSxJQUFHLEtBQVgsRUFBaUIsU0FBUyxtQkFBTTtBQUM1Qix1Q0FBS0osS0FBTCxDQUFXVSxRQUFYLENBQW9CLE9BQUtULEtBQUwsQ0FBV0UsUUFBL0I7QUFDQSx1Q0FBS0UsUUFBTCxDQUFjLEVBQUNGLFVBQVUsRUFBWCxFQUFkO0FBQ0gsNkJBSEQ7QUFBQTtBQUFBO0FBSkosaUJBREo7QUFVSTtBQUFBO0FBQUE7QUFDSSxtREFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxTQUF0QjtBQUNBLGlDQUFTLGlCQUFDQyxLQUFEO0FBQUEsbUNBQVcsT0FBS08sV0FBTCxDQUFpQlAsS0FBakIsQ0FBWDtBQUFBLHlCQURUO0FBRUEscUNBQVksZUFGWixHQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFRLElBQUcsSUFBWCxFQUFnQixTQUFTLG1CQUFNO0FBQzNCLHVDQUFLSixLQUFMLENBQVdTLE9BQVgsQ0FBbUIsT0FBS1IsS0FBTCxDQUFXQyxLQUE5QjtBQUNBLHVDQUFLRyxRQUFMLENBQWMsRUFBQ0gsT0FBTyxFQUFSLEVBQWQ7QUFDSCw2QkFIRDtBQUFBO0FBQUE7QUFKSjtBQVZKLGFBREo7QUFzQkg7Ozs7RUFsRGdCVSxNQUFNQyxTO0FBb0QzQjs7O0FBQ0FDLE9BQU9mLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5wdXQ6ICcnLFxuICAgICAgICAgICAgYWRkSW5wdXQ6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nb0NsaWNrKHRoaXMuc3RhdGUuaW5wdXQpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogJyd9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZElucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWRkSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkQ2xpY2sodGhpcy5zdGF0ZS5hZGRJbnB1dClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FkZElucHV0OiAnJ30pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFkZElucHV0XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHRoaXMuYWRkSW5wdXQoZXZlbnQpfSBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgbW92aWVzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGRDbGljayh0aGlzLnN0YXRlLmFkZElucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWRkSW5wdXQ6ICcnfSlcbiAgICAgICAgICAgICAgICAgICAgfX0gPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ29JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVJbnB1dChldmVudCl9IFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtb3ZpZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnb1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ29DbGljayh0aGlzLnN0YXRlLmlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6ICcnfSlcbiAgICAgICAgICAgICAgICAgICAgfX0gPkdvITwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IFxufVxuLy8gKCkgPT4gdGhpcy5oYW5kbGVHb0NsaWNrKClcbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19