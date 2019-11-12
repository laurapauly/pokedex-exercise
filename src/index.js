import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput,
  removeChilds
} from './api/elements';
import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get all pokemons
const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
const allPokemonElement = createPokemonElements(allPokemons);
setChild(resultsElement, allPokemonElement);

// Add event listeners

/**
 * Find the correct event to listen for input changes.
 */

// other possible event: "change"
searchInput.addEventListener('input', event => {
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */

  //searchInput und event.target sind identisch!!
  //searchInput.value = event.target.value
  const searchValue = event.target.value;
  const pokemons = getPokemonsByName(searchValue);
  const pokemonElements = createPokemonElements(pokemons);
  if (pokemons.length === 0) {
    setChild(resultsElement, createNoPokemons());
  } else setChild(resultsElement, pokemonElements);
  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
