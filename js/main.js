const sprite = {
  "size" : 256,
  "frame" : 4,
  "path" : "./assets/dresseur.png",
  "posX" : 0
}

const map = {
  "posxInTheMap" : 0,
  "posyInTheMap" : 0,
  "selector": null,
  "width" : 0,
  "height": 0
}

const trainerStatus = {
  "turnLeft" : 3,
  "turnRight" : 2,
  "turnTop" : 1,
  "turnBottom" : 0,
  "positionX": 0,
  "positionY": 0,
  "moveLeft" : -5,
  "moveRight" : 5,
  "moveTop" : -5,
  "moveBottom" : 5
}

let perso, idTimer, repeatEvent = true;

document.addEventListener("DOMContentLoaded", () => {

  perso = createPerso();

  // je mets a jour les infos de ma map
  map.selector = document.querySelector(".map")
  map.width = map.selector.offsetWidth
  map.height = map.selector.offsetHeight
  map.selector.addEventListener('click', mousemove);

  document.addEventListener("keydown", handleKeyDown)

  document.addEventListener("keyup", stopMove);


});



let i = 0;
const listBorders = []
let startX, startY, endX, endY;

function mousemove(event){
  
  if(i == 0){
    // coordonnée point 1
    startX = event.clientX 
    startY = event.clientY
    i++
    return 
  }

  if(i==1){
    // coordonnée point 2
    endX = event.clientX 
    endY = event.clientY

    const save = window.prompt("voulez vous enregistrer la valeur?","ok")

    if(save == "ok")
    {
      const border = {
        "startX" : startX,
        "startY" : startY,
        "endX"   : endX,
        "endY"   : endY,
      }
      listBorders.push(border); 
    }
    
    if(save == "end"){

      map.selector.removeEventListener('click', mousemove);
    
    }
    i=0
  }

  console.log(listBorders)
}


