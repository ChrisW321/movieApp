class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                // {title: 'Mean Girls'},
                // {title: 'Hackers'},
                // {title: 'The Grey'},
                // {title: 'Sunshine'},
                // {title: 'Ex Machina'},
                ],
            currentMovies: [
                ]
        }
    }
    goClick(input) {
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
        this.setState({
            currentMovies: this.state.currentMovies
        })
        if (this.state.currentMovies.length === 0) {
            this.setState({
                currentMovies: [{title: 'Sorry, no movies matched what you were looking for'}]
            }) 
            console.log(this.state.currentMovies, 'current movies') 
            console.log(this.state.movies, 'movies')         
        }
        document.getElementById('goInput').value= ''

    }
    addClick(input) {
        this.state.currentMovies.push({title: input});
        this.state.movies.push({title: input});
        this.setState({
            currentMovies: this.state.currentMovies
        })
        console.log(this.state.currentMovies, 'currentmovies')
        document.getElementById('addInput').value= ''
    }
    render() {
        return (
            <div>
                <div><Search movies={this.state.currentMovies} goClick={this.goClick.bind(this)} addClick={this.addClick.bind(this)}/></div>
                <div><MovieList movies={this.state.currentMovies} currentMovies={this.state.currentMovies}/></div>
            </div>
        )
    }
}