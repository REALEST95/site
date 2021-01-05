// variable to get HTML tag using HTML attribute: id
var canvasTag = document.getElementById("myCanvas");

// variable for canvas "context"
// - a "context" is a variable we use to draw on the canvas
var context = canvasTag.getContext("2d");

// set size of area we can draw in
context.canvas.width = 700;
context.canvas.height = 150;

/**
 * Draw a line on a canvas context.
 */
function drawLine(x1, y1, x2, y2) {
  // Starting point: x1, y1
  context.moveTo(x1, y1);
  // Ending point: x2, y2
  context.lineTo(x2, y2);
  // Draw the line
  context.stroke();
}

/**
 * Draw a line after a delay.
 */
function drawLineWithDelay(start, end, delay) {
  // run function after amount of time
  setTimeout(
    // function to run
    function() {
      drawLine(start.x, start.y, end.x, end.y);
    },
    // amount of time in milliseconds (1000 ms = 1 second)
    delay
  );
}

var people =
[
  "anton",
  "jr",
  "ss",
];

var person =
{ 
  name: "Anton",
  age: 30
}

var lines = [
  /* R: left vertical line */
  { 
    start: { x: 0, y: 0 },
    end: { x: 0, y: 100 }
  },
  /* R: top horizontal line */
  { start: { x: 0, y: 0 }, end: { x: 100, y: 0 } },
  /* R: right vertical line */
  { start: { x: 100, y: 0 }, end: { x: 100, y: 50 } },
  /* R: middle horizontal line */
  { start: { x: 100, y: 50 }, end: { x: 0, y: 50 } },
  /* R: diagonal line */
  { start: { x: 0, y: 50 }, end: { x: 100, y: 100 } },
  /* E: vertical line */
  { start: { x: 150, y: 10 }, end: { x: 150, y: 100 } },
  /* E: top horizontal line */
  { start: { x: 150, y: 10 }, end: { x: 200, y: 10 } },
  /* E: middle horizontal line */
  { start: { x: 150, y: 50 }, end: { x: 200, y: 50 } },
  /* E: bottom horizontal line */
  { start: { x: 150, y: 100 }, end: { x: 200, y: 100 } },
  /* A: left diagonal line */
  { start: { x: 250, y: 20 }, end: { x: 220, y: 100 } },
  /* A: middle diagonal line */
  { start: { x: 250, y: 20 }, end: { x: 300, y: 100 } },
  /* A: right diagonal line */
  { start: { x: 250, y: 20 }, end: { x: 300, y: 50 } },
  /* A: right vertical line */
  { start: { x: 300, y: 100 }, end: { x: 300, y: 50 } },
  /* A: bottom horizontal line */
  { start: { x: 300, y: 100 }, end: { x: 220, y: 100 } },
  /* A: middle horizontal line */
  { start: { x: 300, y: 50 }, end: { x: 236, y: 50 } },
  // L: stright line */
  { start: { x: 336, y: 10 }, end: { x: 336, y: 120 } },
  // L: horizontal line */
  { start: { x: 336, y: 120 }, end: { x: 400, y: 120 } },
];


// variable equal to number of lines in list
var numberOfLines = lines.length;
// time in milliseconds. gets used in for loop below 
var waitTimePerLine = 90;

// loop starting at 0 and repeats for each line
for (var n = 0; n < numberOfLines; n++) {
  console.log("")
  console.log("line number: " + n)
  console.log("line " + n + " in list of lines:")
  console.log(lines[n])
  console.log("")

  var delay = n * waitTimePerLine;
  drawLineWithDelay(lines[n].start, lines[n].end, delay);
}



// old code where we were copying and pasting
// R
/// 1. vertical line
//drawLine(0, 0, 0, 100);
/// 2. top horizontal line
// setTimeout(
//   // function to run after certain amount of time
//   () => {
//     drawLine(0, 0, 100, 0);
//   },
//   // amount of time in milliseconds
//   // 1000 ms = 1 second.
//   1 * jay
// );
/// 3. 
// setTimeout(
//   // function to run after certain amount of time
//   () => {
//     drawLine(100, 0, 100, 50)
//   },
//   // amount of time in milliseconds
//   2 * jay
// );

/// 4. 
// setTimeout(
//   // function to run after certain amount of time
//   () => {
//     drawLine(100, 50, 0, 50)
//   },
//   // amount of time in milliseconds
//   3 * jay
// );

/// 5. diagonal line
// setTimeout(
//   // function to run after certain amount of time
//   () => {
//     drawLine(0, 50, 100, 100)
//   },
//   // amount of time in milliseconds
//   4 * jay
// );
// end of letter R