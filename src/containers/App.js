import React, { Component } from 'react';
import './App.css';
import '../components/Searchbox/Searchbox';
import Searchbox from '../components/Searchbox/Searchbox';
import Cardlist from '../components/Cardlist/Cardlist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: '',
    };
  }

  componentDidMount() {
    const urlPokeList = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
    fetch(urlPokeList)
      .then(resp => resp.json())
      .then(res => {
        let results = res.results;
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

  render() {
    const {pokemons, searchField} = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div >
        <div className='searchArea'>
          <h1>Pokemon Database Search!</h1>
          <Searchbox onChangeFunction={this.onChangeSearchbox}/>
        </div>
        <Cardlist pokemonList={filteredPokemons} />
      </div>
    );
  }
}

export default App;
