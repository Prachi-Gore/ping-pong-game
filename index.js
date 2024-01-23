
document.addEventListener('DOMContentLoaded',()=>{ 
    const container=document.querySelector('.container')
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
const ball=document.querySelector('.ball')
// console.log(ball.style.left,'ball')
let ballx=15;
let bally=1;
let dx=1
let dy_ball=1
const containerWidth=container.offsetWidth
    console.log(containerWidth,'width')
const ballMovement=()=>{
    (ballx<containerWidth-15 && ballx>=15) ? dx*=1 : dx*=-1
    (bally<500-20 && bally>0) ? dy_ball*=1 : dy_ball*=-1
    ballx+=dx
    bally+=dy_ball
ball.style.left=`${ballx}px`;
ball.style.top=`${bally}px`;

}
setInterval(ballMovement,1)

})
