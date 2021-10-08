// Day-2 Work
var size = 8; 
var board = "";
for (var y = 0; y < size; y++) {   
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "0 ";
    else
      board += "1 ";
  }
  board += "\n";
}
console.log(board);