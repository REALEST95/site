// Get the HTML tag with the id="myCanvas"
var canvasTag = document.getElementById("myCanvas");

// Make a canvas "context" 
var ctx = canvasTag.getContext("2d");
ctx.canvas.width = 700;
ctx.canvas.height = 150;

// Function to draw line with canvas
function drawLine(x1,y1, x2,y2) {
  // Starting point: x1, y1
  ctx.moveTo(x1, y1);
  // Ending point: x2, y2
  ctx.lineTo(x2, y2);
  // Draw the line
  ctx.stroke();
}

// speed x
var jay = 300;

// R
/// 1. vertical line
drawLine(0,0, 0,100);

/// 2. top horizontal line
// setTimeout( () => { drawLine(0,0, 100,0); }, 1000 )

setTimeout(
  // function to run after certain amount of time
  () => {
    drawLine(0,0,    100,0);
  }, 
  // amount of time in milliseconds
  // 1000 ms = 1 second.
  1*jay
);

/// 3. 
setTimeout(
  // function to run after certain amount of time
  () => {
    drawLine(100,0,   100,50)
  }, 
  // amount of time in milliseconds
  2*jay
);

/// 4. 
setTimeout(
  // function to run after certain amount of time
  () => {
    drawLine(100,50,  0,50)
  }, 
  // amount of time in milliseconds
  3*jay
);

/// 5. diagonal line
setTimeout(
  // function to run after certain amount of time
  () => {
    drawLine(0,50,    100,100)
  }, 
  // amount of time in milliseconds
  4*jay
);
// end of letter R

//start of E
/// 1. vertical line
setTimeout(
  // function to run after certain amount of time
  () => { /* x1,y1,   x2,y2*/
    drawLine(150, 10,   150,100)
  }, 
  // amount of time in milliseconds
  5*jay
)

/// 2. top horizontal line
setTimeout(
  // function to run after certain amount of time
  () => {   /* x1,y1,   x2,y2 */
    drawLine(150, 10,   200,10)
  }, 
  // amount of time in milliseconds
  6*jay
)

/// 3. middle horizontal line
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(150, 50,   200, 50)
  }, 
  // amount of time in milliseconds
  7*jay
)

/// 4.  last horizontal line
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(150, 100,   200, 100)
  }, 
  // amount of time in milliseconds
  7*jay
 
 )
 
  //4.  left side
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(250, 20,   220, 100)
  }, 
  // amount of time in milliseconds
  7*jay


) //4.  right side
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(250, 20,   300, 100)
  }, 
  // amount of time in milliseconds
  7*jay
) 
//4.  right side
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(250, 20,   300, 50)
  }, 
  // amount of time in milliseconds
  7*jay
)
//4.  right side
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(300, 100,   300, 50)
  }, 
  // amount of time in milliseconds
  7*jay
)
//4.  right side
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(300, 100,   220, 100)
  }, 
  // amount of time in milliseconds
  7*jay
)
//4.  right side
setTimeout(
  // function to run after certain amount of time
  () => {  /* x1, y1,     x2, y2 */
    drawLine(300, 50,   236, 50)
  }, 
  // amount of time in milliseconds
  7*jay
)














/*
// Some variables we are gonna use to animate
var numberTimesToDraw = 10;
var delay = 1000;

// Repeat
for (let forLoopCounter=0; forLoopCounter <= numberTimesToDraw; forLoopCounter++) {
  // Create x1 variable
  let x1 = forLoopCounter*20;
  // Call that function after a "timeout"
  setTimeout(() => { 
      drawLine(x1,0,200,200);
    }, 
    forLoopCounter*delay);
}
// and go back
for (let forLoopCounter=numberTimesToDraw; forLoopCounter >= 0; forLoopCounter--) {
  // Create x1 variable
  let x2 = forLoopCounter*20;
  // Call that function after a "timeout"
  setTimeout(() => { 
      drawLine(200,0,x2,200);
    }, 
    forLoopCounter*delay);
}
*/