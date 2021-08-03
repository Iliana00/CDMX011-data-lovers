import { order } from './data.js';
import data from './data/ghibli/ghibli.js';
import { filteredDir } from './data.js';
import { filteredProd } from './data.js';

let array = data.films;

//Función para manipular el DOM y crear tarjetas
function mainScreen(array) {
  document.getElementById("container").innerHTML = "";
  let myDiv = "";
  let title = "";
  let score = "";
  let date = "";
  let img = "";
  let description = "";
  let src = "";
  let alt = "";

  for (let i = 0; i < array.length; i++) {
    myDiv = document.createElement('div');
    document.getElementById('container')
      .appendChild(myDiv).className = "item";
    title = document.createElement('p');
    myDiv.appendChild(title).className = "title";
    title.textContent = array[i].title;
    description = document.createElement('p');
    myDiv.appendChild(description).className = "description";
    description.textContent = array[i].description;
    date = document.createElement('p'); 
    myDiv.appendChild(date).className = "date";
    date.textContent = array[i].release_date;
    score = document.createElement('p');
    myDiv.appendChild(score).className = "score";
    score.textContent = "Rotten tomatoes score: " + array[i].rt_score;
    img = document.createElement("img");
    src = document.createAttribute("src");
    src.value = array[i].poster;
    img.setAttributeNode(src);
    alt = document.createAttribute("alt");
    alt.value = array[i].title + "'s poster";
    img.setAttributeNode(alt);
    document.getElementsByClassName("item")[i]
      .appendChild(img).className = "img";
  }
}
//Se llama a la función mainScreen para mostrar todas las tarjetas en la pantalla principal 
mainScreen(array);

//Se le agrega el escuchador de eventos al select para ordenar películas
document.getElementById("firstFilter")
  .addEventListener("change", function (e) {
//Para cada opción del select el array es ordenado según sea el caso a través de la función order con sus respectivos parámetros
    switch (e.target.value) { //e=evento, target=donde se puso el evento, valuue=el valor del select
      case "highest-rating":
        array = order(data.films, "score", "desc"); //parámetros que utiliza order para ordenar. Les doy un valor a los parámetros para después utilizarlos en data.js
        break;
      case "lowest-rating":
        array = order(data.films, "score", "asc");
        break;
      case "newest":
        array = order(data.films, "year", "desc");
        break;
      case "oldest":
        array = order(data.films, "year", "asc");
        break;
      case "a-z":
        array = order(data.films, "title", "desc");
        break;
      case "z-a":
        array = order(data.films, "title", "asc");
        break;
      case "":
        array = data.films;
        break;
    }
    mainScreen(array);
  })


// Se crea un bucle para que todos los botones tengan un evento
const filterButtons = document.getElementsByClassName("button-filter");
for (let i = 0; i < filterButtons.length; i++) {
  createEvent(filterButtons[i]);
} function createEvent(button) {
  button.addEventListener("click", filterDirProd); 
}
//Función para mostrar en pantalla al filtrar por director y productor  
function filterDirProd(e) {
  let dirProd = e.target.innerHTML;
  if (e.target.classList.contains("director")) {
    mainScreen(filteredDir(data.films, dirProd));
  } else {
    mainScreen(filteredProd(data.films, dirProd));
  }
}