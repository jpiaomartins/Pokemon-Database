import React from 'react';
import './Searchbox.css';

const Searchbox = ({onChangeFunction}) => {
    return (
        <div>
            <input
                className='searchBox'
                type="search"
                placeholder="search pokemons"
                onChange={onChangeFunction}
            />
        </div>
    );
}

export default Searchbox;