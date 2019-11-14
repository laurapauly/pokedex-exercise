// requiered to use async/await
import 'babel-polyfill';

import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput
} from './api/elements';
import {
  getPokemonsByName,
  getAllPokemons,
  sortPokemonsByName,
  initPokemons
} from './api/pokemons';

initPokemons().then(start);

function start() {
  // Query elements
  const searchInput = document.querySelector('.search__input');
  const resultsElement = document.querySelector('.results');

  // Get all pokemons
  const allPokemons = getAllPokemons();
  const allSortedPokemons = sortPokemonsByName(allPokemons);

  // Reset input and results
  resetInput(searchInput);
  const allPokemonElements = createPokemonElements(allSortedPokemons);
  setChild(resultsElement, allPokemonElements);

  // Add event listeners
  searchInput.addEventListener('input', event => {
    /**
     * You can verify that this event is fired in the Browser console.
     * Can you find the value of searchInput in this event?
     */

    //searchInput und event.target sind identisch!!
    //searchInput.value = event.target.value
    const searchValue = event.target.value;
    const pokemons = getPokemonsByName(searchValue);

    if (pokemons.length === 0) {
      const noPokemonsElement = createNoPokemons();
      setChild(resultsElement, noPokemonsElement);
    } else {
      const sortedPokemons = sortPokemonsByName(pokemons);
      const pokemonElements = createPokemonElements(sortedPokemons);
      setChild(resultsElement, pokemonElements);
    }
    /**
     * Search for your pokemons now, create elements and add them to your results.
     */
  });

  /**
   * Later, you can add sort functionality.
   */
}
