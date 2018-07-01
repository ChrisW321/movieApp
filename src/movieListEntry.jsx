var MovieListEntry = (props) => {
    return (
        <div>
            <ul>
                <li>{props.movie.title}</li>
            </ul>
        </div>
    )
}

window.MovieListEntry = MovieListEntry;