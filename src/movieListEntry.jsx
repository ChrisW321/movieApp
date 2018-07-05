class MovieListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            watched: false,
            word: 'watch'
        }
    }
    watchClick() {
        this.setState({watched: !this.state.watched})
        this.props.watch(this.props.movie.title);
    }
    render() {
        if (this.state.watched) {
            this.state.word = 'Watched'
        } else {
            this.state.word = 'To watch'
        }
        return (
            <div id="movieEntry">
                <ul>
                    <li>{this.props.movie.title}<button id="movieWatchButton" onClick={() => this.watchClick()} >{this.state.word}</button></li>
                </ul>
            </div>
        )
    }
}

window.MovieListEntry = MovieListEntry;