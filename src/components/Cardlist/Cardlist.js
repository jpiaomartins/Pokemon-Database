import React from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

const Cardlist = ({pokemonList}) => {
    let teste = [
        {
            name: 'Bulba',
            number: '1',
        },
        {
            name: 'Ivisaur',
            number: '2',
        },
        {
            name: 'Venosaur',
            number: '3',
        },
    ]
    return (
        <div className='pokelist'>
            {
                pokemonList.map((pokemon, i) => {
                    return (
                        <Card   
                            key={i}
                            name={pokemon.name} 
                            number={i} />
                    );
                })
            }
        </div>
    );
};

export default Cardlist;