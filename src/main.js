import { home } from './data.js';


document.getElementById("firstFilter")
    .addEventListener("change", function (e) {
        console.log(e.target.value);
})

let myDiv = null;
let paragraph = null;
for (let i = 0; i < Object.keys(home()).length; i++) {
    myDiv = document.createElement('div');
    paragraph = document.createElement('p');
    myDiv.appendChild(paragraph).className = "title";
    paragraph.textContent = home()[i].title;
    document.getElementById('container')
        .appendChild(myDiv).className = "item";
}

let img = null;
let attr = null;
for (let i = 0; i < Object.keys(home()).length; i++) {
    img = document.createElement("img");    
    attr = document.createAttribute("src");
    attr.value = home()[i].poster;
    img.setAttributeNode(attr);
    document.getElementsByClassName("item")[i]
        .appendChild(img).className = "img";
}

/*for (let i = 0; i < Object.keys(home()).length; i++) {
    console.log(home()[i].title);
}*/

// console.log(home());
// console.log(Object.keys(home()));
//console.log(director());

