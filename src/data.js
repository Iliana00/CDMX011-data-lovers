import data from './data/ghibli/ghibli.js';

export const home = () => {
  const array = data.films.map(movie => {
    return {
      title: movie.title,
      poster: movie.poster
    }
  })
  return array;
}

// export const azfilter{
//   const array = data
// }