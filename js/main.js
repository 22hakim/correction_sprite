const sprite = {
  "size" : 256,
  "frame" : 4,
  "path" : "./assets/dresseur.png",
  "posX" : 0
}

const map = {
  "posxInTheMap" : 0,
  "posyInTheMap" : 0
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
//largeur: 772px; hauteur: 642;
}

let perso, idTimer, repeatEvent = true;
// perso c'est la vignette 
// idTimer ca va etre une variable qui contiendra mon timer 
// repeatEvent ca va etre un boolean qui va gerer si je laisse
// mon evenement se repeter ou non  

document.addEventListener("DOMContentLoaded", () => {

  perso = createPerso();

  document.addEventListener("keydown", handleKeyDown)

  document.addEventListener("keyup", stopMove);

});




