//Ordena las películas de acuerdo a los parámetros
export function order(array, category, ascOrDesc) { //Nombrar los parámetros para después ser variables, como si fueran declaradas previamente, pero al vernir de funciones tienen que ser llamadas como parámetros para así darles un valor
  let answer = "";
  //Ordena por números, de ascedente a descendiente y viceversa
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
  //Ordena alfabéticamente, de ascedente a descendiente y viceversa
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
    } 
  return answer;
  }

  //Función para filtrar por director
export function filteredDir (array, dir){
  return array.filter(x => x.director == dir);
}
  //Función para filtrar por productor
export function filteredProd (array, prod) {
  return array.filter(x => x.producer == prod);
}
