import { order } from './data.js';
import data from './data/ghibli/ghibli.js';
import { directorFiltrado } from './data.js';
import { productorFiltrado } from './data.js';

let answer = data.films;

let myDiv = null;
let title = null;
let score = null;
let date = null;
let img = null;
let description = null;
let src = null;
let alt = null;
function mainScreen(answer) {
  document.getElementById("container").innerHTML = "";

  for (let i = 0; i < answer.length; i++) {
    myDiv = document.createElement('div');
    document.getElementById('container')
      .appendChild(myDiv).className = "item";
    title = document.createElement('p');
    myDiv.appendChild(title).className = "title";
    title.textContent = answer[i].title;
    description = document.createElement('p');
    myDiv.appendChild(description).className = "description";
    description.textContent = answer[i].description;
    date = document.createElement('p'); 
    myDiv.appendChild(date).className = "date";
    date.textContent = answer[i].release_date;
    score = document.createElement('p');
    myDiv.appendChild(score).className = "score";
    score.textContent = "Rotten tomatoes score: " + answer[i].rt_score;
    img = document.createElement("img");
    src = document.createAttribute("src");
    src.value = answer[i].poster;
    img.setAttributeNode(src);
    alt = document.createAttribute("alt");
    alt.value = answer[i].title + "'s poster";
    img.setAttributeNode(alt);
    document.getElementsByClassName("item")[i]
      .appendChild(img).className = "img";
  }
}

mainScreen(data.films);

document.getElementById("firstFilter")
  .addEventListener("change", function prueba(e) {
    switch (e.target.value) {
      case "highest-rating":
        answer = order(data.films, "score", "desc");
        break;
      case "lowest-rating":
        answer = order(data.films, "score", "asc");
        break;
      case "newest":
        answer = order(data.films, "year", "desc");
        break;
      case "oldest":
        answer = order(data.films, "year", "asc");
        break;
      case "a-z":
        answer = order(data.films, "title", "desc");
        break;
      case "z-a":
        answer = order(data.films, "title", "asc");
        break;
      case "":
        answer = data.films;
        break;
    }
    mainScreen(answer)
    return answer;
  })



const filterButtons = document.getElementsByClassName("button-filter");
for (let i = 0; i < filterButtons.length; i++) {
  createEvent(filterButtons[i]);
}

function createEvent(button) {
  button.addEventListener("click", filterDirProd);
}

function filterDirProd(filtered) {
  let dirProd = filtered.target.innerHTML;
  if (filtered.target.classList.contains("director")) {
    mainScreen(directorFiltrado(data.films, dirProd));
  } else {
    mainScreen(productorFiltrado(data.films, dirProd));
  }
}
