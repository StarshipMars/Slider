
let slider = document.querySelector(`#slide`);
let buttons = document.querySelectorAll(`.btns`);
let slideShow = document.querySelector(`.b-preview__slideshowBtn`);
let body = document.querySelector(`.body`);

let isSlideShowStart = false;

let change = 0;
let object = {
  '0'     : 0,
  '-350'  : 1,
  '-700'  : 2,
  '-1050' : 3,
  '-1400' : 4
};

call();

 function call(change){
     showCurrentButton(object, change);
     slider.style.marginLeft = `${change}px`;
}

 function moveLeft(){
 	move(-350);

 }

 function moveRight(){
   move(350);
   
 }

  function move(iStep){
       change += iStep;
       if(change < -1400){
           change = 0;
       }
       else if (change > 0){
           change = -1400;
       }
     call(change);
  }

document.querySelector(`.left`).onclick = function(){
  moveLeft();
}
document.querySelector(`.right`).onclick = function(){
  moveRight();
}
 

 for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener(`click`, currentPictureForButton);
 }

 function currentPictureForButton(event){
   
   for(let item of buttons){
     item.classList.remove(`active`);
   }
   event.target.classList.add(`active`);

  if(event.target.dataset.number == 0){
    call(0);
  }
  else if(event.target.dataset.number == 1){
    call(-350);
  }
  else if(event.target.dataset.number == 2){
    call(-700);
  }
  else if(event.target.dataset.number == 3){
     call(-1050);
  }
  else if(event.target.dataset.number == 4){
     call(-1400);
  }
  
 }


 function showCurrentButton(obj, change){
    for(let pixels in obj){
      if(pixels == change){
        for(let i = 0; i < buttons.length; i++){
          buttons[i].classList.remove(`active`);
        }
        buttons[obj[pixels]].classList.add(`active`);
      }
    }
 }

         let timer;
   slideShow.addEventListener(`click`, startSlideShow);

  function startSlideShow(event){
         if(!isSlideShowStart){
            timer = setInterval(() => {
              moveLeft();
              }, 2000);
            isSlideShowStart = true;
            event.target.innerHTML = `stop`;
          }
          else{
            stopSlideShow();
          }
        }

          function stopSlideShow(){
            clearInterval(timer);
            event.target.innerHTML = `start`;
            isSlideShowStart = false;
         }

   

   body.addEventListener(`keyup`, function(event){
         
         if(event.keyCode == 39){
          moveLeft();
         }
         if(event.keyCode == 37){
          moveRight();
         }
   });


           

   
          
       
   

