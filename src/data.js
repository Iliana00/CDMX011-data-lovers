import data from './data/ghibli/ghibli.js';

let array = [];
export function home() {
   array = data.films.map(movie => {
    return {
      title: movie.title,
      poster: movie.poster,
      release_date : movie.release_date,
      rt_score : movie.rt_score      
    }
  })

  return array;
}


export function order(unordered, ascOrDesc) {  
  console.log(array)  
  if (unordered == "score") {
    unordered = home(x => x.rt_score);
    console.log(unordered)
  } else if (unordered == "year") {
    unordered = array.rt_score;//(x => x.release_date);
  } else {
    unordered = array.title;//a.films.map(x => x.title);
    return sortTitle(unordered, ascOrDesc);
  }
  if (ascOrDesc == "asc") {
    return unordered.sort(function (a, b) {
      return a - b;
    });
  } else if (ascOrDesc == "desc") {
    return unordered.sort(function (a, b) {
      return b - a;
    });
  }
}

function sortTitle(unordered, ascOrDesc) {
  if (ascOrDesc == "asc") {
    return unordered.sort();
  } else {
    return unordered.sort().reverse();
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