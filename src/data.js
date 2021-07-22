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

//export const score = data.films.map(x => x.rt_score)

/*export function ascendingOrder (score) {
  return score.sort(function(a, b) {
    return a - b;
  });
}*/

export function order(unordered, ascOrDesc) {
  if (unordered == "score") {
    unordered = data.films.map(x => x.rt_score);
  } else {
    unordered = data.films.map(x => x.release_date);
  }
  if (ascOrDesc == "asc") {
    return unordered.sort(function (a, b) {
      return a - b;
    });
  } else {
    return unordered.sort(function (a, b) {
      return b - a;
    });
  }
}

//console.log("ascendingOrder")

/*
export function score(rtScore) {
  //const rtScore = home().rt_score;
  return rtScore.sort(function(a, b) {
    //console.log(rt_score)
    return a - b;
  });
  
}
*/

/*function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);*/


/* export const azfilter{
   const array = data
 }*/