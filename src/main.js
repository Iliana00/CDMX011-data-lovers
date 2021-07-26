import { order } from './data.js';
import data from './data/ghibli/ghibli.js';
import {directorFiltrado} from './data.js';

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

  function mainScreen (answer){
    document.getElementById("container").innerHTML= ""

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
    }}

  function filterDirProd (filtered){
      if (filtered.target.id == "dir-HaMi"){
        console.log(directorFiltrado())
      } else if(filtered.target.id == "dir-IT"){
        console.log("Este director " + filtered.target.id)
      } else if(filtered.target.id == "dir-YK"){
        console.log("Este director " + filtered.target.id)
      } else if(filtered.target.id == "dir-HiMo"){
        console.log("Este director " + filtered.target.id)
      } else if(filtered.target.id == "dir-GM"){
        console.log("Este director " + filtered.target.id)
      } else if(filtered.target.id == "dir-HY"){
        console.log("Este director " + filtered.target.id)
      } else if(filtered.target.id == "prod-IT"){
        console.log("Este director " + filtered.target.id)
      } else if(filtered.target.id == "prod-TH"){
        console.log("Este director " + filtered.target.id)
      }else if(filtered.target.id == "prod-TS"){
        console.log("Este director " + filtered.target.id)
      }else if(filtered.target.id == "prod-YN"){
        console.log("Este director " + filtered.target.id)
      } else if(filtered.target.id == "prod-HY"){
        console.log("Este director " + filtered.target.id)
      }
  }
document.getElementById("dir-HaMi").addEventListener("click", filterDirProd);
document.getElementById("dir-IT").addEventListener("click", filterDirProd);
document.getElementById("dir-YK").addEventListener("click", filterDirProd);
document.getElementById("dir-HiMo").addEventListener("click", filterDirProd);
document.getElementById("dir-GM").addEventListener("click", filterDirProd);
document.getElementById("dir-HY").addEventListener("click", filterDirProd);
document.getElementById("prod-IT").addEventListener("click", filterDirProd);
document.getElementById("prod-TH").addEventListener("click", filterDirProd);
document.getElementById("prod-TS").addEventListener("click", filterDirProd);
document.getElementById("prod-YN").addEventListener("click", filterDirProd);
document.getElementById("prod-HY").addEventListener("click", filterDirProd);