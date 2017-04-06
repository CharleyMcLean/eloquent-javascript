/*
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting a
grid of the given width and height.
*/

 1234
1
2
3
4

function drawGrid(gridSize) {
  // This will be the board we print.
  var board = "";

  for (var i = 0; i < gridSize; i ++) {
    for (var j = 0; j < gridSize; j ++) {
      if ((i + j) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      } // end of if else
    } // end of j for loop
    board += "\n";
  } // end of i for loop
  console.log(board);
}

drawGrid(8);
