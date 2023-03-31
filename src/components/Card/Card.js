import React from 'react';
import './Card.css';

const Card = ({name, number, activePokemon, onClickFunction, pokemonData}) => {
    const renderCompact = ()=>{
        return (
            <div className="card compact" onClick={onClickFunction}>
                <h3>{name}</h3>
                <p>{'#' + number}</p>
            </div>
        );
    };

    const renderExpand = () => {
        const {height, weight, types, icon} = pokemonData;
        return (
            <div className="card expand" onClick={onClickFunction}>
                <h3>{name}</h3>
                <p>{'#' + number}</p>
                <img alt={name} src={icon} />
                <p>{"Height: " + height}</p>
                <p>{"Weight: " + weight}</p>
                <div>
                    {
                        types?.map((typeInfo, i) => {
                            return <p key={i}>{"Type " + (i+1) + ": " + typeInfo.type.name}</p>;
                        })
                    }
                </div>
            </div>
        );
    };

    return activePokemon===name? renderExpand(): renderCompact();
};

export default Card;