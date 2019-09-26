import React, { Component } from 'react';
class Counter extends Component {
   
    state = {
        count : 0
    };

    // used to replace arrow function
    // constructor(){
    //     super();
    //     this.functionTest.bind(this);
    // }

    styles = {
        fontSize : 18,
        fontWeight: "bold"
    }

    classExtract() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
    
    functionTest = () => {
        this.setState(({count}) => ({
            count : count + 1
        }));
    };

    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className = {this.classExtract()}>{this.state.count}</span>
                <button className = "btn btn-secondary btn-sm" onClick = {this.functionTest}>Click Here</button>
            </React.Fragment>
        );
    };
};

export default Counter;