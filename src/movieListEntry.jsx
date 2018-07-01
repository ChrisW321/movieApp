class MovieListEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.movie.title}</li>
                </ul>
            </div>
        )
    }
}

window.MovieListEntry = MovieListEntry;