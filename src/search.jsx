class Search extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            input: ''
        }
    }
    handleInput(event) {
        this.setState({
            input: event.target.value
        })
        console.log(this.state.input);
    }
    render() {
        return (
            <div>
                <input type="text" 
                onKeyUp={(event) => this.handleInput(event)} 
                placeholder="Search movies"/>
            </div>
        )
    } 
}

window.Search = Search;