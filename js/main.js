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

  document.addEventListener("keydown", handleKeyDown)

  document.addEventListener("keyup", stopMove);

});




