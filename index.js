
document.addEventListener('DOMContentLoaded',()=>{ 
   //paddle    
const paddle=document.getElementsByClassName('paddle')  
let paddleY=1
let dy=1
const paddleMovement=()=>{
    (paddleY<400 && paddleY>0) ? dy*=1 : dy*=-1
    paddleY=paddleY+dy
    paddle[0].style.top=`${paddleY}px`
}
setInterval(paddleMovement,0.1)

//ball

})