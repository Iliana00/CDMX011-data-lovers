import { home } from './data.js';
//import { score } from './data.js';
import { order } from './data.js';


document.getElementById("firstFilter")
    .addEventListener("change", function prueba (e) {
        var answer = "";
        let ascOrDesc = "";
        let unordered = "";
        switch(e.target.value) {            
            case "mejor-val":   
            ascOrDesc = "asc";
            unordered = "score";
            answer = order(unordered, ascOrDesc);
            break;
            case "menor-val":
            ascOrDesc = "desc";
            unordered = "score";
            answer = order(unordered, ascOrDesc);
            break;
            case "reciente":  
            ascOrDesc = "desc";
            unordered = "year";
            answer = order(unordered, ascOrDesc);
            break;
            case "antiguo":  
            ascOrDesc = "asc";
            unordered = "year";
            answer = order(unordered, ascOrDesc);
            break;
            case "a-z":  
            answer = "Hola Crayolakjsdfg";
            break;
            case "z-a":  
            answer = "Hola Crayolakjfbfhers";
            break;
        }
        console.log(answer);
        return answer;        
})


let myDiv = null;
let paragraph = null;
for (let i = 0; i < home().length; i++) {
    myDiv = document.createElement('div');
    paragraph = document.createElement('p');
    myDiv.appendChild(paragraph).className = "title";
    paragraph.textContent = home()[i].title;
    document.getElementById('container')
        .appendChild(myDiv).className = "item";
}

let img = null;
let attr = null;
for (let i = 0; i < home().length; i++) {
    img = document.createElement("img");    
    attr = document.createAttribute("src");
    attr.value = home()[i].poster;
    img.setAttributeNode(attr);
    document.getElementsByClassName("item")[i]
        .appendChild(img).className = "img";
}

//console.log(ascendingOrder(score))

/*for (let i = 0; i < Object.keys(home()).length; i++) {
    console.log(home()[i].title);
}*/

 //console.log(home());
 //console.log(home());
//console.log(director());


