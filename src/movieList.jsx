var MovieList = (props) => {
    return (
        <div>
            Movies: {props.movies.map(movie => 
                <MovieListEntry movie={movie} key={movie.title}/>
            )}
        </div>
    )
}

window.MovieList = MovieList;