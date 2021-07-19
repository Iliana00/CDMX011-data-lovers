import studioGhibli from './data.js';

let films = studioGhibli.films();
let posters = studioGhibli.posters();
let container = document.getElementById('container');

for (let i = 0; i < films.length; i++) {
    const myDiv = document.createElement('div');
    myDiv.textContent = films[i];
    container.appendChild(myDiv).className = "item";    
}

for (let i = 0; i < posters.length; i++) {
    const myImg = document.createElement('img');
    myImg.innerHTML = posters[i];
    container.appendChild(myImg).className = "img";

}

