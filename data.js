//import data from './data/ghibli/ghibli.js';

//Ordena las películas. Recibe el arreglo, 
export function order(array, unordered, ascOrDesc) {
  let answer = "";
  if (unordered == "score" && ascOrDesc == "desc") {
    answer = array.sort(function (a, b) {
      return b.rt_score - a.rt_score;
    });
  } else if (unordered == "score" && ascOrDesc == "asc") {
    answer = array.sort(function (a, b) {
      return a.rt_score - b.rt_score;
    });
  } else if (unordered == "year" && ascOrDesc == "asc") {
    answer = array.sort(function (a, b) {
      return a.release_date - b.release_date;
    });
  } else if (unordered == "year" && ascOrDesc == "desc") {
    answer = array.sort(function (a, b) {
      return b.release_date - a.release_date;
    });
  } else {
    if (ascOrDesc == "desc") {
      answer = array.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    } else if (ascOrDesc == "asc") {
      answer = array.sort(function (a, b) {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      })
    }
  }
  return answer;
}

export function directorFiltrado (array, dir){
  return array.filter(x => x.director == dir);
}

export function productorFiltrado(array, prod) {
  return array.filter(x => x.producer == prod);
}
