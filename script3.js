// Get the HTML tag with the id="myCanvas"
var canvasTag = document.getElementById("myCanvas");

// Make a canvas "context"
// - A "context" is a variable we can use to draw on the canvas
var ctx = canvasTag.getContext("2d");
ctx.canvas.width = 700;
ctx.canvas.height = 150;

// Function to draw line with canvas
function drawLine(x1, y1, x2, y2) {
  // Starting point: x1, y1
  ctx.moveTo(x1, y1);
  // Ending point: x2, y2
  ctx.lineTo(x2, y2);
  // Draw the line
  ctx.stroke();
}

function drawLineWithDelay(start, end, delay) {
  // Run function after amount of time
  setTimeout(
    () => { // Put function inside these brackets 
      drawLine(start.x, start.y, end.x, end.y);
    },
    // Amount of time in milliseconds (1000 ms = 1 second)
    delay
  );
}

var lines = [
  // start R
  { /* R: left vertical line */
    start: {x: 0, y: 0},
    end: {x: 0, y: 100}
  },
  { /* R: top horizontal line */
    start: {x: 0, y: 0},
    end: {x: 100, y: 0}
  },
  { /* R: right vertical line */
    start: {x: 100, y: 0},
    end: {x: 100, y: 50}
  },
  { /* R: middle horizontal line */
    start: {x: 100, y: 50},
    end: {x: 0, y: 50}
  },
  { /* R: diagonal line */
    start: {x: 0, y: 50},
    end: {x: 100, y: 100}
  },
  // end R
  // start E
  { /* E: vertical line */
    start: {x: 150, y: 10},
    end: {x: 150, y: 100}
  },
  { /* E: top horizontal line */
    start: {x: 150, y: 10},
    end: {x: 200, y: 10}
  },
  { /* E: middle horizontal line */
    start: {x: 150, y: 50},
    end: {x: 200, y: 50}
  },
  { /* E: bottom horizontal line */
    start: {x: 150, y: 100},
    end: {x: 200, y: 100}
  },
  // end E
  // start A
  { /* A: left diagonal line */
    start: {x: 250, y: 20},
    end: {x: 220, y: 100}
  },
  { /* A: middle diagonal line */
    start: {x: 250, y: 20},
    end: {x: 300, y: 100}
  },
  { /* A: right diagonal line */
    start: {x: 250, y: 20},
    end: {x: 300, y: 50}
  },
  { /* A: right vertical line */
    start: {x: 300, y: 100},
    end: {x: 300, y: 50}
  },
  { /* A: bottom horizontal line */
    start: {x: 300, y: 100},
    end: {x: 220, y: 100}
  },
  { /* A: middle horizontal line */
    start: {x: 300, y: 50},
    end: {x: 236, y: 50}
  },
  // end A
];

var numberOfLines = lines.length;
// speed
var jay = 100;

// Loop starting at 0 and goes for how many lines
for (var x = 0; x < numberOfLines; x++) {
  console.log("")
  console.log("# in the loop")
  console.log(x);
  console.log("# entry in list of lines")
  console.log( lines[x] )
  console.log("")

  var delay = x * jay;
  drawLineWithDelay( lines[x].start, lines[x].end, delay );
}


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