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
            word: 'watch',
            toggleDetails: false,
            detail: ''
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
        key: 'showDetails',
        value: function showDetails() {
            this.setState({ toggleDetails: !this.state.toggleDetails });
            console.log('toggled');
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
            if (this.state.toggleDetails) {
                var detail = React.createElement(
                    'li',
                    null,
                    this.props.movie.vote_average
                );
                var watchButton = React.createElement(
                    'button',
                    { id: 'movieWatchButton', onClick: function onClick() {
                            return _this2.watchClick();
                        } },
                    this.state.word
                );
            } else {
                var detail = '';
                var watchButton = '';
            }
            return React.createElement(
                'div',
                { id: 'movieEntry', onClick: function onClick() {
                        return _this2.showDetails();
                    } },
                React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        this.props.movie.title
                    ),
                    detail,
                    watchButton
                )
            );
        }
    }]);

    return MovieListEntry;
}(React.Component);

window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsIndvcmQiLCJ0b2dnbGVEZXRhaWxzIiwiZGV0YWlsIiwic2V0U3RhdGUiLCJ3YXRjaCIsIm1vdmllIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwidm90ZV9hdmVyYWdlIiwid2F0Y2hCdXR0b24iLCJ3YXRjaENsaWNrIiwic2hvd0RldGFpbHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxjOzs7QUFDRiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxLQURBO0FBRVRDLGtCQUFNLE9BRkc7QUFHVEMsMkJBQWUsS0FITjtBQUlUQyxvQkFBUTtBQUpDLFNBQWI7QUFGZTtBQVFsQjs7OztxQ0FDWTtBQUNULGlCQUFLQyxRQUFMLENBQWMsRUFBQ0osU0FBUyxDQUFDLEtBQUtELEtBQUwsQ0FBV0MsT0FBdEIsRUFBZDtBQUNBLGlCQUFLRixLQUFMLENBQVdPLEtBQVgsQ0FBaUIsS0FBS1AsS0FBTCxDQUFXUSxLQUFYLENBQWlCQyxLQUFsQztBQUNIOzs7c0NBQ2E7QUFDVixpQkFBS0gsUUFBTCxDQUFjLEVBQUNGLGVBQWUsQ0FBQyxLQUFLSCxLQUFMLENBQVdHLGFBQTVCLEVBQWQ7QUFDQU0sb0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0g7OztpQ0FDUTtBQUFBOztBQUNMLGdCQUFJLEtBQUtWLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUNwQixxQkFBS0QsS0FBTCxDQUFXRSxJQUFYLEdBQWtCLFNBQWxCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtGLEtBQUwsQ0FBV0UsSUFBWCxHQUFrQixVQUFsQjtBQUNIO0FBQ0QsZ0JBQUksS0FBS0YsS0FBTCxDQUFXRyxhQUFmLEVBQThCO0FBQzFCLG9CQUFJQyxTQUFTO0FBQUE7QUFBQTtBQUFLLHlCQUFLTCxLQUFMLENBQVdRLEtBQVgsQ0FBaUJJO0FBQXRCLGlCQUFiO0FBQ0Esb0JBQUlDLGNBQWM7QUFBQTtBQUFBLHNCQUFRLElBQUcsa0JBQVgsRUFBOEIsU0FBUztBQUFBLG1DQUFNLE9BQUtDLFVBQUwsRUFBTjtBQUFBLHlCQUF2QztBQUFrRSx5QkFBS2IsS0FBTCxDQUFXRTtBQUE3RSxpQkFBbEI7QUFDSCxhQUhELE1BR087QUFDSCxvQkFBSUUsU0FBUyxFQUFiO0FBQ0Esb0JBQUlRLGNBQWMsRUFBbEI7QUFDSDtBQUNELG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxJQUFHLFlBQVIsRUFBcUIsU0FBUztBQUFBLCtCQUFNLE9BQUtFLFdBQUwsRUFBTjtBQUFBLHFCQUE5QjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFLLDZCQUFLZixLQUFMLENBQVdRLEtBQVgsQ0FBaUJDO0FBQXRCLHFCQURKO0FBRUtKLDBCQUZMO0FBR0tRO0FBSEw7QUFESixhQURKO0FBU0g7Ozs7RUF4Q3dCRyxNQUFNQyxTOztBQTJDbkNDLE9BQU9uQixjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJtb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgd29yZDogJ3dhdGNoJyxcbiAgICAgICAgICAgIHRvZ2dsZURldGFpbHM6IGZhbHNlLFxuICAgICAgICAgICAgZGV0YWlsOiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHdhdGNoQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoZWQ6ICF0aGlzLnN0YXRlLndhdGNoZWR9KVxuICAgICAgICB0aGlzLnByb3BzLndhdGNoKHRoaXMucHJvcHMubW92aWUudGl0bGUpO1xuICAgIH1cbiAgICBzaG93RGV0YWlscygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlRGV0YWlsczogIXRoaXMuc3RhdGUudG9nZ2xlRGV0YWlsc30pXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGVkJyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2F0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkID0gJ1dhdGNoZWQnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndvcmQgPSAnVG8gd2F0Y2gnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9nZ2xlRGV0YWlscykge1xuICAgICAgICAgICAgdmFyIGRldGFpbCA9IDxsaT57dGhpcy5wcm9wcy5tb3ZpZS52b3RlX2F2ZXJhZ2V9PC9saT5cbiAgICAgICAgICAgIHZhciB3YXRjaEJ1dHRvbiA9IDxidXR0b24gaWQ9XCJtb3ZpZVdhdGNoQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy53YXRjaENsaWNrKCl9ID57dGhpcy5zdGF0ZS53b3JkfTwvYnV0dG9uPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRldGFpbCA9ICcnXG4gICAgICAgICAgICB2YXIgd2F0Y2hCdXR0b24gPSAnJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW92aWVFbnRyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2hvd0RldGFpbHMoKX0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAge2RldGFpbH1cbiAgICAgICAgICAgICAgICAgICAge3dhdGNoQnV0dG9ufVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxud2luZG93Lk1vdmllTGlzdEVudHJ5ID0gTW92aWVMaXN0RW50cnk7Il19