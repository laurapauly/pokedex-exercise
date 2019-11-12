import { createNoPokemons, setChild, resetInput } from './api/elements';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Reset input and results
resetInput(searchInput);
setChild(resultsElement, createNoPokemons());

// Add event listeners
debugger;
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

  console.log('Great! This event is fired:', event.target.value);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
