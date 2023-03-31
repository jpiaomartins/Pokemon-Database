import React from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

const Cardlist = ({pokemonList, activePokemon, onClickFunction, pokemonData}) => {
    return (
        <div className='pokelist'>
            {
                pokemonList.map((pokemon, i) => {
                    return (
                        <Card   
                            key={i}
                            name={pokemon.name} 
                            number={i}
                            activePokemon={activePokemon}
                            onClickFunction={onClickFunction}
                            pokemonData={pokemonData} />
                    );
                })
            }
        </div>
    );
};

export default Cardlist;