function createPerso()
{
  perso = document.createElement("div");
  perso.classList.add("perso")
  perso.style.width  = sprite.size / sprite.frame +"px"
  perso.style.height = sprite.size / sprite.frame +"px"
  perso.style.border = "1px solid red"
  perso.style.position = "relative"
  perso.style.top = trainerStatus.positionY+"px"
  perso.style.left= trainerStatus.positionX+"px"
  perso.style.backgroundImage = "url("+sprite.path+")"

  document.querySelector(".map").append(perso);

  return perso
}

function handleKeyDown(event)
{
  switch(event.code)
  {
    case "ArrowLeft":
      turnTrainer(trainerStatus.turnLeft)
      moveTrainer(trainerStatus.moveLeft, 0)
    break;
    case "ArrowUp":
      turnTrainer(trainerStatus.turnTop)
      moveTrainer(0, trainerStatus.moveTop)
    break;
    case "ArrowRight":
      turnTrainer(trainerStatus.turnRight)
      moveTrainer(trainerStatus.moveRight, 0)
    break;
    case "ArrowDown":
      turnTrainer(trainerStatus.turnBottom) 
      moveTrainer(0, trainerStatus.moveBottom)   
    break;
  }

  repeatEvent = false;
}

function turnTrainer(line)
{   
  if(repeatEvent == true){

    idTimer = setInterval(()=>{

          if(sprite.posX == 4)
          {
              sprite.posX = 0
          }
          perso.style.backgroundPositionY = line*(sprite.size/sprite.frame)+"px"
          perso.style.backgroundPositionX = sprite.posX++ * (sprite.size/sprite.frame) +"px"
    
    },100)
  }
}

function moveTrainer(posx, posy)
{
  // je met a jour X et Y dans l'objet map  
  map.posxInTheMap += posx
  map.posyInTheMap += posy

  // je vais gerer toutes les collisions possible faite par le dresseur
  const isCollide = cheickCollisions();
  
  if(isCollide){

    stopMove()

  }else{

    // je bouge le perso seulement s'il n'y a pas de collisions
    perso.style.top  =  map.posyInTheMap+"px"
    perso.style.left =  map.posxInTheMap+"px"
  }
  
}

function stopMove()
{
  // setTimeout(() => {
  //   perso.style.backgroundPositionY = "0px"
  //   perso.style.backgroundPositionX = "0px" 
  // },150)

  clearInterval(idTimer);

  repeatEvent = true;
}

function cheickCollisions()
{
  // connaitre la taille de la map 
  // console.log(map.width, map.height)

  // si je suis trop à gauche
  if(map.posxInTheMap <0){
    map.posxInTheMap = 0;
    return true;
  }

  // je suis plus à droite que la map
  if(map.posxInTheMap >= map.width - 64)
  {
    map.posxInTheMap = map.width -70;
    return true
  }

  // si je suis trop à haut
  if(map.posyInTheMap < 0){
    map.posyInTheMap = 0;
    return true;
  }

  // je suis plus bas que la map
  if(map.posyInTheMap >= map.height - 64)
  {
    map.posyInTheMap = map.height - 70
    return true
  }

  return false
}
