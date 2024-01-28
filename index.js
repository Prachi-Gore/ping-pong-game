document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  //paddle
  const paddle = document.getElementsByClassName("paddle");
  let paddleY = 0;
  let dpy = 10;
  //movement of paddle with up or down arrow
  document.addEventListener("keydown", (event) => {
    //stop default behaviour of up arrow key and down arrow key
    event.preventDefault()
    if (paddleY > 0 && event.keyCode == 38) {
      //up
      paddleY = paddleY + -1 * dpy;
    } else if (paddleY < 400 && event.keyCode == 40) {
      //down
      paddleY = paddleY + dpy;
    }

    paddle[0].style.top = `${paddleY}px`;
  });
// // movement of paddle with mouse
// document.addEventListener('mousemove',(event)=>{
//     // console.log('event ',event)
//     if(event.clientX > container.offsetLeft+container.offsetWidth/2) return
//     let mouseDistanceFromTop=event.clientY
//     let distanceOfContainerFromTop=container.offsetTop;
//     let mousePointControl=mouseDistanceFromTop-distanceOfContainerFromTop-paddle.offsetHeight/2
//     paddleY=mousePointControl
//     if(paddleY<=0 || paddleY>container.offsetHeight-paddle[0].offsetHeight) return 
//     paddle[0].style.top = `${paddleY}px`;
// })
  //ball
  const ball = document.querySelector(".ball");
  // console.log(ball.style.left,'ball')
  let ballx = 25;
  let bally = 15;
  let dx = 1;
  let dy = 1;
  ball.style.left = `${ballx}px`;
  ball.style.top = `${bally}px`;
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
//   console.log('ball.offsetHeight',container.offsetTop)

  const ballMovement = () => {
    ballx += dx;
    bally += dy;
    ball.style.left = `${ballx}px`;
    ball.style.top = `${bally}px`;
    //collison of ball and paddle
    if(ballx<=paddle[0].offsetWidth &&
     bally>paddleY && 
     bally+ball.offsetHeight<paddleY+paddle[0].offsetHeight) dx*=-1
    if (ballx > containerWidth - paddle[0].offsetWidth || ballx <= 0) dx *= -1;
    bally < containerHeight -ball.offsetHeight  && bally > 0 ? (dy *= 1) : (dy *= -1);
  };
  setInterval(ballMovement, 1);
});
