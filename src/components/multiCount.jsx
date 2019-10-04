import React, { Component } from 'react';
import Counter from './counter';
import { timingSafeEqual } from 'crypto';

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
        this.setState({counters});
    };
    
    handleAddItem = () => {
        let temp = {id:10, value:0}
        this.setState(prevState => ({
            counters : [...prevState.counters,temp]
        }))
    };

    render(){
        return (
            <React.Fragment>
                <button className = "btn btn-secondary btn-sm m-1" onClick={this.handleAddItem} >Add Item</button>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter}/>
                ))}
            </React.Fragment>
        );
    }

}

export default MultiCount;