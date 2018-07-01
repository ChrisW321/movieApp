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
    }

    render() {
        return (
            <div>
                <input type="text" 
                onKeyUp={(event) => this.handleInput(event)} 
                placeholder="Search movies"/>
                <button onClick={() => this.props.goClick(this.state.input)} >Go!</button>
            </div>
        )
    } 
}
// () => this.handleGoClick()
window.Search = Search;