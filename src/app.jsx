class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [{title: 'test'}],
            currentMovies: [{title: 'test'}, {title: 'second'}],
            toWatch: [],
            watched: [],
            matches: false,
            message: '',
            movieData: {'testsearch': 'testsearch'}
        }
    }
    componentDidMount() {
        searchMovie('adventure', (data) => this.setState({currentMovies: data.results, movies: data.results}) );
    }
    goClick(input) {
        searchMovie(input, (data) => this.setState({currentMovies: data.results, movies: data.results}) )
        this.setState({matches: false, message: ''})
        console.log(this.state.movieData);
        input = input.toLowerCase();
        let lowerCase = [];
        this.state.currentMovies = []
        for (let i = 0; i < this.state.movies.length; i++) {
            lowerCase.push({title: this.state.movies[i].title.toLowerCase()})
        }
        for (let i = 0; i < this.state.movies.length; i++) {
            if ( lowerCase[i].title.includes(input) ) {
                this.state.currentMovies.push( this.state.movies[i] )
            }
        }
        this.setState({currentMovies: this.state.currentMovies})
        if (this.state.currentMovies.length === 0) {
            this.setState({matches: true})
        }
        document.getElementById('goInput').value= ''
    }
    addClick(input) {
        this.setState({matches: false, message: ''})
        this.state.currentMovies.push({title: input});
        this.state.movies.push({title: input});
        this.state.toWatch.push({title: input});
        this.setState({currentMovies: this.state.currentMovies})
        postMovie(input);

        document.getElementById('addInput').value = ''
    }
    addToWatched(movie) {
        this.state.watched.push({title: movie});
        for (let i = 0; i < this.state.toWatch.length; i++) {
            if (this.state.toWatch[i].title === movie) {
                this.state.toWatch.splice(i, 1);
            }
        }
        console.log(this.state.watched)
    }
    showWatched() {
        this.setState({currentMovies: this.state.watched})
        console.log('showWatch')
    }
    showToWatch() {
        this.setState({currentMovies: this.state.toWatch})
        console.log('showtowatch')
    }
    render() {
        if (this.state.matches) {
            this.state.message = 'Sorry, that search returned 0 results'
        }
        return (
            <div>
                <div id="title">Movie List</div>
                <div><Search movies={this.state.currentMovies} goClick={this.goClick.bind(this)} addClick={this.addClick.bind(this)}/></div>
                <div><MovieList movies={this.state.currentMovies} currentMovies={this.state.currentMovies} watch={this.addToWatched.bind(this)} 
                showWatched={this.showWatched.bind(this)} showToWatch={this.showToWatch.bind(this)}/></div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}