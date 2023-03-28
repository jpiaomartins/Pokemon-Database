import React from 'react';
import './Card.css';

const Card = ({name, number}) => {
    return (
        <div className="card compact">
            <h3>{name}</h3>
            <p>{'#' + number}</p>
        </div>
    )
};

export default Card;