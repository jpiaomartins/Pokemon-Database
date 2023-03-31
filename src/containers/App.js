import React, { Component } from 'react';
import './App.css';
import Searchbox from '../components/Searchbox/Searchbox';
import Cardlist from '../components/Cardlist/Cardlist';
import mainLogo from '../assets/Logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: '',
      pokemonActive: '',
      pokemonData: [],
    };
  }

  componentDidMount() {
    document.title = 'Pokemon';
    const urlPokeList = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
    fetch(urlPokeList)
      .then(resp => resp.json())
      .then(res => {
        let results = res.results;
        results.forEach(poke => {
          poke.name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
        });
        this.setState({pokemons: results});
      })
      .catch(err => {
        console.log("error msg:", err);
      })
  };

  onChangeSearchbox = (event) => {
    this.setState({
      searchField: event.target.value
    });
  };

  onClickCard = (event) => {
    const pokeName = event.target.firstElementChild.textContent;
    if(pokeName === this.state.pokemonActive) {
      this.setState({pokemonActive: ''});
    } else {
      const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/' + pokeName.toLowerCase();
      fetch(urlPokemon)
        .then(resp => resp.json())
        .then(res => {
          let pokemonInfo = {
            height: res.height,
            weight: res.weight,
            types: res.types,
            icon: res.sprites.front_default,
          };
          this.setState({pokemonData: pokemonInfo});
        });
      this.setState({pokemonActive: pokeName});
    }
  };

  render() {
    const {pokemons, searchField, pokemonActive, pokemonData} = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div >
        <div className='searchArea'>
          <img className = 'logo' src={mainLogo} />
          <Searchbox onChangeFunction={this.onChangeSearchbox}/>
        </div>
        <Cardlist pokemonList={filteredPokemons} activePokemon={pokemonActive} onClickFunction={this.onClickCard} pokemonData={pokemonData} />
      </div>
    );
  }
}

export default App;
