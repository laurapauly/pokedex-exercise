/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
import pokemons from 'json-pokemon';

export function getAllPokemons() {
  return pokemons;
}

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
