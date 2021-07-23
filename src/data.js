import data from './data/ghibli/ghibli.js';

let array = [];
export const home = () => {
  array = data.films.map(movie => {
    return {
      title: movie.title,
      poster: movie.poster,
      release_date: movie.release_date,
      rt_score: movie.rt_score
    }
  })
  return array;
}

export function order(unordered, ascOrDesc) {
  let answer = "";
  if (unordered == "score" && ascOrDesc == "asc") {
    //console.log(unordered);
    answer = array.sort(function (a, b) {
      return b.rt_score - a.rt_score;
    });
  } else if (unordered == "score" && ascOrDesc == "desc") {
    //console.log(unordered);
    answer = array.sort(function (a, b) {
      return a.rt_score - b.rt_score;
    });
  } else if (unordered == "year" && ascOrDesc == "asc") {
    //console.log(unordered);
    answer = array.sort(function (a, b) {
      return a.release_date - b.release_date;
    });
  } else if (unordered == "year" && ascOrDesc == "desc") {
    answer = array.sort(function (a, b) {
      return b.release_date - a.release_date;
    });
  } else {
    if (ascOrDesc == "asc") {
      answer = array.sort(function(a, b){
        if(a.title < b.title) {return -1;}
        if(a.title > b.title) {return 1;}
        return 0;    
    })}else if (ascOrDesc == "desc") {
     answer = array.sort(function(a, b){
        if(a.title > b.title) {return -1;}
        if(a.title < b.title) {return 1;}
        return 0;    
    }   
     )}

  



    //answer = sortTitle(unordered, ascOrDesc);
    //console.log(answer);
  }
  return answer;
}
/*
function sortTitle(unordered, ascOrDesc) {
  let answer = "";
  unordered = array;
  //console.log(unordered);
  if (ascOrDesc == "asc") {
    answer = array.sort();
  } else {
    answer = array.sort().reverse();
  }
  return answer
}
*/

// ------------------------------------------------

/*if (unordered == "score") {
  unordered = data.films.map(x => x.rt_score);
} else if (unordered == "year") {
  unordered = data.films.map(x => x.release_date);
} else {
  unordered = data.films.map(x => x.title);
  return sortTitle(unordered, ascOrDesc);
}
if (ascOrDesc == "asc") {
  return unordered.sort(function (a, b) {
    return a - b;
  } else if (ascOrDesc == "desc") {
    return unordered.sort(function (a, b) {
      return b - a;
    })
  })
}*/

/*function sortTitle(unordered, ascOrDesc) {
  unordered = data.films.map(x => x.title);
  if (ascOrDesc == "asc") {
    return unordered.sort();
  } else {
    return unordered.sort().reverse();
  }
}*/