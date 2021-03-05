import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange = (value) => {
        this.setState({userInput: value})
    }
    handleClick = () => {
        this.props.filter(this.state.userInput)
    }
    handleClear = () => {
        this.setState({userInput: ""})
    }

    render(){
        console.log(this.state.userInput)
        return (
            <div  className="search-bar">
                <input type="text" onChange={(e) => this.handleChange(e.target.value)} value={this.state.userInput}/>
                <button onClick={() =>this.handleClick()}>search</button>
                <button onClick={() =>{
                    this.handleClear();
                     this.props.reset()
                    }
                    }>clear search</button>

            </div>
        )
    }



}
