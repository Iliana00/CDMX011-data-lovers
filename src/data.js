// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

const studioGhibli = {

  films : function(){
    let title = [];
    for(let i=0; i < data.films.length; i++){
      title.push(data.films[i].title);    
    }
    return title
  },
  posters : function  (){
    let poster = [];
    for(let i = 0; i < data.films.length; i++){
      poster.push(data.films[i].poster)
    }
    return poster
  }
};

/*export const anotherExample = () => {
  return 'OMG';
};*/

export default studioGhibli
