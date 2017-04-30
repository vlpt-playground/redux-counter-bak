import React from 'react';
import Counter from './Counter';
import './CounterList.css';

const CounterList = ({counters, ...rest}) => {

    const counterList = counters.map(
        (counter, i) => (
            <Counter 
                key={i}
                index={i}
                {...counter}
                {...rest}
            />
        )
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

export default CounterList;