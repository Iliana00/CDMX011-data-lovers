import studioGhibli from './data.js';

let films = studioGhibli.films();
let posters = studioGhibli.posters();
const container = document.getElementById('container');

for (let i = 0; i < films.length; i++) {
    const myDiv = document.createElement('div');
    myDiv.textContent = films[i];
    document.body.appendChild(myDiv);
}


