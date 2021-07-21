import data from './data/ghibli/ghibli.js';

export const home = () => {
  const array = data.films.map(movie => {
    return {
      title: movie.title,
      poster: movie.poster,
      release_date : movie.release_date,
      rt_score : movie.rt_score      
    }
  })
  return array;
}

export function score(rtScore) {
  //const rtScore = home().rt_score;
  return rtScore.sort(function(a, b) {
    //console.log(rt_score)
    return a - b;
  });
  
}


/*function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);*/


/* export const azfilter{
   const array = data
 }*/