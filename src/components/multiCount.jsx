import React, { Component } from 'react';
import Counter from './counter';

class MultiCount extends Component{

    render(){
        return (
            <React.Fragment>
            <Counter/>
            <Counter/>
            </React.Fragment>
        );
    }

}

export default MultiCount;