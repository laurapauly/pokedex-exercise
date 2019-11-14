// import { join } from 'path';
// import pokemons from './pokemons.json';

let pokemons = [];

export async function initPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const data = await response.json();
  pokemons = data.results;
}

export async function getPokemonDetails(pokemonUrl) {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
}

export function getAllPokemons() {
  return pokemons;
}

// const response = await fetch('https://pokeapi.co/api/v2/pokemon');
// const data = await response.json();
// const pokemons = data.results;
// console.log(data);
// export function getPokemonsByName(searchInput) {

/**
 * pokemonName is unused.
 * You could use this property to filter the pokemons by name.
 * Take a look: Array.prototype.filter()
 *
 * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
 * It should be case independend.
 */
// const search = searchInput.toLowerCase();

// // { name: "asdasdsa", id: "asdasdd"}
// const list = pokemons.pokemonList;

// const result = list.filter(function(item) {
//   const name = item.name.toLowerCase();
//   const index = name.indexOf(search);
//   return index >= 0;
// });

// return result;
export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const pickPokemons = pokemons.filter(pokemon => {
    const normalizedPokemonName = pokemon.name.toLowerCase();
    return normalizedPokemonName.startsWith(normalizedName);
  });

  return pickPokemons;
}
// export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
// //   /**
//    * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
//    *
//    * See Array.prototype.sort()
//    */
//   // [
//   {
//     name: "asdasd",
//     id: "asdas",
//   },
//   {
//     name: "asdasd",
//     id: "asdas",
//   }
// ]
// ["asdadads", "asdasdasad"]
// const nameList = pokemons.pokemonList.map(function(item) {
//   return item.name;
// });

export function sortPokemonsByName(pokemons, sortDirection = `ASC`) {
  const sortedPokemons = pokemons.sort((pokemonA, pokemonB) => {
    const nameA = pokemonA.name.toLowerCase();
    const nameB = pokemonB.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  if (sortDirection === `DESC`) {
    sortedPokemons.reverse();
  }
  return sortedPokemons;
}
