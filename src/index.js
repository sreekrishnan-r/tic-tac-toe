import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 1
        };
    }

    handleNumber(){
        this.setState({
            number: this.state.number + 1
        });
    };
    
    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleNumber.bind(this)}>Click Me</button>
            </div>
        );
    }
}

class Main extends React.Component{
    render(){
        return(
            <Hello />
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);