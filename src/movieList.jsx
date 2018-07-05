var MovieList = (props) => {
    return (
        <div>
            <div><button id="watch" onClick={() => props.showWatched()}>Watch</button><button id="toWatch" onClick={() => props.showToWatch()}>To watch</button></div>
            {props.movies.map(movie => 
                <MovieListEntry movie={movie} key={movie.title} watch={props.watch}/>
            )}
        </div>
    )
}

window.MovieList = MovieList;