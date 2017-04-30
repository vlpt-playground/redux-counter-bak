import React from 'react';
import './Buttons.css';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>
                +
            </div>
            <div className="btn remove" onClick={onRemove}>
                -
            </div>
        </div>
    );
};

export default Buttons;