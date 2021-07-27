import { order } from './data.js';
import data from './data/ghibli/ghibli.js';
import { directorFiltrado } from './data.js';
import { productorFiltrado } from './data.js';

document.getElementById("firstFilter")
  .addEventListener("change", function prueba(e) {
    var answer = "";
    let ascOrDesc = "";
    let unordered = "";
    switch (e.target.value) {
      case "highest-rating":
        ascOrDesc = "asc";
        unordered = "score";
        answer = order(unordered, ascOrDesc);
        break;
      case "lowest-rating":
        ascOrDesc = "desc";
        unordered = "score";
        answer = order(unordered, ascOrDesc);
        break;
      case "newest":
        ascOrDesc = "desc";
        unordered = "year";
        answer = order(unordered, ascOrDesc);
        break;
      case "oldest":
        ascOrDesc = "asc";
        unordered = "year";
        answer = order(unordered, ascOrDesc);
        break;
      case "a-z":
        ascOrDesc = "asc";
        unordered = "title";
        answer = order(unordered, ascOrDesc);
        break;
      case "z-a":
        ascOrDesc = "desc";
        unordered = "title";
        answer = order(unordered, ascOrDesc);
        break;
    }
    mainScreen(answer)
    return answer;
  })


let myDiv = null;
let title = null;
let score = null;
let date = null;
for (let i = 0; i < data.films.length; i++) {
  myDiv = document.createElement('div');
  document.getElementById('container')
    .appendChild(myDiv).className = "item";
  title = document.createElement('p');
  myDiv.appendChild(title).className = "title";
  title.textContent = data.films[i].title;
  date = document.createElement('p');
  myDiv.appendChild(date).className = "date";
  date.textContent = data.films[i].release_date;
  score = document.createElement('p');
  myDiv.appendChild(score).className = "score";
  score.textContent = "Rotten tomatoes score: " + data.films[i].rt_score;
}
let img = null;
let attr = null;
for (let i = 0; i < data.films.length; i++) {
  img = document.createElement("img");
  attr = document.createAttribute("src");
  attr.value = data.films[i].poster;
  img.setAttributeNode(attr);
  document.getElementsByClassName("item")[i]
    .appendChild(img).className = "img";
}

function mainScreen(answer) {
  document.getElementById("container").innerHTML = ""

  for (let i = 0; i < answer.length; i++) {
    myDiv = document.createElement('div');
    document.getElementById('container')
      .appendChild(myDiv).className = "item";
    title = document.createElement('p');
    myDiv.appendChild(title).className = "title";
    title.textContent = answer[i].title;
    date = document.createElement('p');
    myDiv.appendChild(date).className = "date";
    date.textContent = answer[i].release_date;
    score = document.createElement('p');
    myDiv.appendChild(score).className = "score";
    score.textContent = "Rotten tomatoes score: " + answer[i].rt_score;
    img = document.createElement("img");
    attr = document.createAttribute("src");
    attr.value = answer[i].poster;
    img.setAttributeNode(attr);
    document.getElementsByClassName("item")[i]
      .appendChild(img).className = "img";
  }
}

const filterButtons = document.getElementsByClassName("button-filter");
//Ver si se puede hacer con for...in
for (let i = 0; i < filterButtons.length; i++) {
  createEvent(filterButtons[i]);
}

function createEvent(button) {
  button.addEventListener("click", filterDirProd);
}

function filterDirProd(filtered) {
  let dirProd = filtered.target.innerHTML;
  if (filtered.target.classList.contains("director")) {
    mainScreen(directorFiltrado(dirProd));
  } else {
    mainScreen(productorFiltrado(dirProd));
  }
}
