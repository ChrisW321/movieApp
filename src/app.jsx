class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'},
                ],
            currentMovies: [
                
            ]
        }
    }
    goClick(input) {
        input = input.toLowerCase();
        let lowerCase = [];
        for (let i = 0; i < this.state.movies.length; i++) {
            lowerCase.push({title: this.state.movies[i].title.toLowerCase()})
        }
        for (let i = 0; i < this.state.movies.length; i++) {
            if ( lowerCase[i].title.includes(input) ) {
                this.state.currentMovies.push( this.state.movies[i] )
            }
        }
        console.log(this.state.currentMovies);
    }
    render() {
        return (
            <div>
                <div><Search movies={this.state.movies} goClick={this.goClick.bind(this)}/></div>
                <div><MovieList movies={this.state.movies} currentMovies={this.state.currentMovies}/></div>
            </div>
        )
    }
}