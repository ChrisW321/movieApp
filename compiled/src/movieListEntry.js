'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieListEntry = function (_React$Component) {
    _inherits(MovieListEntry, _React$Component);

    function MovieListEntry(props) {
        _classCallCheck(this, MovieListEntry);

        var _this = _possibleConstructorReturn(this, (MovieListEntry.__proto__ || Object.getPrototypeOf(MovieListEntry)).call(this, props));

        _this.state = {
            watched: false,
            word: 'watch'
        };
        return _this;
    }

    _createClass(MovieListEntry, [{
        key: 'watchClick',
        value: function watchClick() {
            this.setState({ watched: !this.state.watched });
            this.props.watch(this.props.movie.title);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.state.watched) {
                this.state.word = 'Watched';
            } else {
                this.state.word = 'To watch';
            }
            return React.createElement(
                'div',
                { id: 'movieEntry' },
                React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        this.props.movie.title,
                        React.createElement(
                            'button',
                            { id: 'movieWatchButton', onClick: function onClick() {
                                    return _this2.watchClick();
                                } },
                            this.state.word
                        )
                    )
                )
            );
        }
    }]);

    return MovieListEntry;
}(React.Component);

window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsIndvcmQiLCJzZXRTdGF0ZSIsIndhdGNoIiwibW92aWUiLCJ0aXRsZSIsIndhdGNoQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxjOzs7QUFDRiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxLQURBO0FBRVRDLGtCQUFNO0FBRkcsU0FBYjtBQUZlO0FBTWxCOzs7O3FDQUNZO0FBQ1QsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDRixTQUFTLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxPQUF0QixFQUFkO0FBQ0EsaUJBQUtGLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQixLQUFLTCxLQUFMLENBQVdNLEtBQVgsQ0FBaUJDLEtBQWxDO0FBQ0g7OztpQ0FDUTtBQUFBOztBQUNMLGdCQUFJLEtBQUtOLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUNwQixxQkFBS0QsS0FBTCxDQUFXRSxJQUFYLEdBQWtCLFNBQWxCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtGLEtBQUwsQ0FBV0UsSUFBWCxHQUFrQixVQUFsQjtBQUNIO0FBQ0QsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLLDZCQUFLSCxLQUFMLENBQVdNLEtBQVgsQ0FBaUJDLEtBQXRCO0FBQTRCO0FBQUE7QUFBQSw4QkFBUSxJQUFHLGtCQUFYLEVBQThCLFNBQVM7QUFBQSwyQ0FBTSxPQUFLQyxVQUFMLEVBQU47QUFBQSxpQ0FBdkM7QUFBa0UsaUNBQUtQLEtBQUwsQ0FBV0U7QUFBN0U7QUFBNUI7QUFESjtBQURKLGFBREo7QUFPSDs7OztFQXpCd0JNLE1BQU1DLFM7O0FBNEJuQ0MsT0FBT1osY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoibW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3YXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHdvcmQ6ICd3YXRjaCdcbiAgICAgICAgfVxuICAgIH1cbiAgICB3YXRjaENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3YXRjaGVkOiAhdGhpcy5zdGF0ZS53YXRjaGVkfSlcbiAgICAgICAgdGhpcy5wcm9wcy53YXRjaCh0aGlzLnByb3BzLm1vdmllLnRpdGxlKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS53YXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndvcmQgPSAnV2F0Y2hlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud29yZCA9ICdUbyB3YXRjaCdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vdmllRW50cnlcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08YnV0dG9uIGlkPVwibW92aWVXYXRjaEJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMud2F0Y2hDbGljaygpfSA+e3RoaXMuc3RhdGUud29yZH08L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxud2luZG93Lk1vdmllTGlzdEVudHJ5ID0gTW92aWVMaXN0RW50cnk7Il19