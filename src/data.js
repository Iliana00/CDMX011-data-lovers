//Ordena las películas. Recibe el arreglo, 
export function order(array, category, ascOrDesc) {
  let answer = "";
  if (Array.isArray(array)) {
    if (category == "score" && ascOrDesc == "desc") {
      answer = array.sort(function (a, b) {
        return b.rt_score - a.rt_score;
      });
    } else if (category == "score" && ascOrDesc == "asc") {
      answer = array.sort(function (a, b) {
        return a.rt_score - b.rt_score;
      });
    } else if (category == "year" && ascOrDesc == "asc") {
      answer = array.sort(function (a, b) {
        return a.release_date - b.release_date;
      });
    } else if (category == "year" && ascOrDesc == "desc") {
      answer = array.sort(function (a, b) {
        return b.release_date - a.release_date;
      });
    } else if (category == "title") {
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
    } else {
      answer = "Something went wrong"
    }
  } else {
    answer = "Something went wrong"
  }
  
  return answer;
}

export function filteredDir (array, dir){
  return array.filter(x => x.director == dir);
}

export function filteredProd (array, prod) {
  return array.filter(x => x.producer == prod);
}
