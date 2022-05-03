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
    
    },250)
  }
}

function moveTrainer(posx, posy)
{
  // je met a jour X et Y dans l'objet map  
  map.posxInTheMap += posx
  map.posyInTheMap += posy

  // je bouge le perso 
  perso.style.top  =  map.posyInTheMap+"px"
  perso.style.left =  map.posxInTheMap+"px"
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

