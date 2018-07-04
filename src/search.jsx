class Search extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            input: '',
            addInput: ''
        }
    }
    handleInput(event) {
        this.setState({
            input: event.target.value
        })
        if (event.keyCode === 13) {
            this.props.goClick(this.state.input)
            this.setState({input: ''})
        }
    }
    addInput(event) {
        this.setState({
            addInput: event.target.value
        })
        if (event.keyCode === 13) {
            this.props.addClick(this.state.addInput)
            this.setState({addInput: ''})
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input id="addInput" type="text"
                    onKeyUp={(event) => this.addInput(event)} 
                    placeholder="Add movies"/>
                    <button id="add" onClick={() => {
                        this.props.addClick(this.state.addInput)
                        this.setState({addInput: ''})
                    }} >Add</button>
                </div>
                <div>
                    <input type="text" id="goInput"
                    onKeyUp={(event) => this.handleInput(event)} 
                    placeholder="Search movies"/>
                    <button id="go" onClick={() => {
                        this.props.goClick(this.state.input)
                        this.setState({input: ''})
                    }} >Go!</button>
                </div>
            </div>
        )
    } 
}
// () => this.handleGoClick()
window.Search = Search;