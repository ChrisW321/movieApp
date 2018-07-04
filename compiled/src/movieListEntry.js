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
                null,
                React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        this.props.movie.title
                    ),
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                return _this2.watchClick();
                            } },
                        this.state.word
                    )
                )
            );
        }
    }]);

    return MovieListEntry;
}(React.Component);

window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsIndvcmQiLCJzZXRTdGF0ZSIsIndhdGNoIiwibW92aWUiLCJ0aXRsZSIsIndhdGNoQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxjOzs7QUFDRiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxLQURBO0FBRVRDLGtCQUFNO0FBRkcsU0FBYjtBQUZlO0FBTWxCOzs7O3FDQUNZO0FBQ1QsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDRixTQUFTLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxPQUF0QixFQUFkO0FBQ0EsaUJBQUtGLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQixLQUFLTCxLQUFMLENBQVdNLEtBQVgsQ0FBaUJDLEtBQWxDO0FBQ0g7OztpQ0FDUTtBQUFBOztBQUNMLGdCQUFJLEtBQUtOLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUNwQixxQkFBS0QsS0FBTCxDQUFXRSxJQUFYLEdBQWtCLFNBQWxCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtGLEtBQUwsQ0FBV0UsSUFBWCxHQUFrQixVQUFsQjtBQUNIO0FBQ0QsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUssNkJBQUtILEtBQUwsQ0FBV00sS0FBWCxDQUFpQkM7QUFBdEIscUJBREo7QUFDcUM7QUFBQTtBQUFBLDBCQUFRLFNBQVM7QUFBQSx1Q0FBTSxPQUFLQyxVQUFMLEVBQU47QUFBQSw2QkFBakI7QUFBNEMsNkJBQUtQLEtBQUwsQ0FBV0U7QUFBdkQ7QUFEckM7QUFESixhQURKO0FBT0g7Ozs7RUF6QndCTSxNQUFNQyxTOztBQTRCbkNDLE9BQU9aLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6Im1vdmllTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2F0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICB3b3JkOiAnd2F0Y2gnXG4gICAgICAgIH1cbiAgICB9XG4gICAgd2F0Y2hDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2F0Y2hlZDogIXRoaXMuc3RhdGUud2F0Y2hlZH0pXG4gICAgICAgIHRoaXMucHJvcHMud2F0Y2godGhpcy5wcm9wcy5tb3ZpZS50aXRsZSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2F0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkID0gJ1dhdGNoZWQnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndvcmQgPSAnVG8gd2F0Y2gnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9saT48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMud2F0Y2hDbGljaygpfSA+e3RoaXMuc3RhdGUud29yZH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbndpbmRvdy5Nb3ZpZUxpc3RFbnRyeSA9IE1vdmllTGlzdEVudHJ5OyJdfQ==