import React, { Component } from 'react';
import Counter from './counter';

class MultiCount extends Component{

    state = {
        counters: [
            {id:1, value:0},
            {id:2, value:1}
        ]
    };

    handleDelete = (counterId) => {
        console.log("Delete Event handel",counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    };

    render(){
        return (
            <React.Fragment>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />
                ))}
            </React.Fragment>
        );
    }

}

export default MultiCount;