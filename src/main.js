import studioGhibli from './data.js';
import { director } from './data.js';

let films = studioGhibli.films();
let posters = studioGhibli.posters();
let container = document.getElementById('container');


for (let i = 0; i < films.length; i++) {
    const myDiv = document.createElement('div');
    const paragraph = document.createElement('p');
    myDiv.appendChild(paragraph).className = "title"
    paragraph.textContent = films[i];
    container.appendChild(myDiv).className = "item";    
}
const myDivs = document.getElementsByClassName("item");
for (let i = 0; i < posters.length; i++) {
    const img = document.createElement("img");    
    let attr = document.createAttribute("src");
    attr.value = posters[i];
    img.setAttributeNode(attr);
    myDivs[i].appendChild(img).className = "img";
}

console.log(director());