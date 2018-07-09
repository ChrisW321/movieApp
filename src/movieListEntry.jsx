class MovieListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            watched: false,
            word: 'watch',
            toggleDetails: false,
            detail: ''
        }
    }
    watchClick() {
        this.setState({watched: !this.state.watched})
        this.props.watch(this.props.movie.title);
    }
    showDetails() {
        this.setState({toggleDetails: !this.state.toggleDetails})
        console.log('toggled');
    }
    render() {
        if (this.state.watched) {
            this.state.word = 'Watched'
        } else {
            this.state.word = 'To watch'
        }
        if (this.state.toggleDetails) {
            var detail = <li>{this.props.movie.vote_average}</li>
            var watchButton = <button id="movieWatchButton" onClick={() => this.watchClick()} >{this.state.word}</button>
        } else {
            var detail = ''
            var watchButton = ''
        }
        return (
            <div id="movieEntry" onClick={() => this.showDetails()}>
                <ul>
                    <li>{this.props.movie.title}</li>
                    {detail}
                    {watchButton}
                </ul>
            </div>
        )
    }
}

window.MovieListEntry = MovieListEntry;