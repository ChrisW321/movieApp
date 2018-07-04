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
            <div>
                <ul>
                    <li>{this.props.movie.title}</li><button onClick={() => this.watchClick()} >{this.state.word}</button>
                </ul>
            </div>
        )
    }
}

window.MovieListEntry = MovieListEntry;