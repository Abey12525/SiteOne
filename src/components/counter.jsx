import React, { Component } from 'react';

class Counter extends Component {
   
    state = {
        value : this.props.counter.value
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
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
    
    functionTest = () => {
        this.setState(({value}) => ({
            value : value + 1
        }));
    };
    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className = {this.classExtract()}>{this.state.value}</span>
                <button className = "btn btn-secondary btn-sm" onClick = {this.functionTest}>Click Here</button>
                <button className = "btn btn-danger btn-sm" onClick = {() => this.props.onDelete(this.props.counter.id)}>delete</button>
            </React.Fragment>
        );
    };
};

export default Counter;