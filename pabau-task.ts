const grid: string[][] = [
  [">", "-", "-", "-", "A", "-", "@", "-", "+"],
  [" ", " ", " ", " ", " ", " ", " ", " ", "|"],
  ["+", "-", "U", "-", "+", " ", " ", " ", "C"],
  ["|", " ", " ", " ", "|", " ", " ", " ", "|"],
  ["s", " ", " ", " ", "C", "-", "-", "-", "+"],
];

let row: number = 0;
let column: number = 0;
let path: string = "";
let letters: string = "";
let comingFrom: string = "";

while (!path.includes("s")) {
  let current: string = grid[column][row];
  let left: string = grid[column]?.[row - 1];
  let right: string = grid[column]?.[row + 1];
  let up: string = grid[column - 1]?.[row];
  let down: string = grid[column + 1]?.[row];

  // * If the ">" sign needs to be "@" in the path
  // if (current === ">") {
  //   path += "@";
  // } else {
  //   path += current;
  // }

  path += current;

  if (current.match(/[A-Z]/)) {
    letters += current;
  }

  if (left?.trim() && comingFrom !== "L") {
    row--;
    comingFrom = "R";
  } else if (right?.trim() && comingFrom !== "R") {
    row++;
    comingFrom = "L";
  } else if (up?.trim() && comingFrom !== "U") {
    column--;
    comingFrom = "D";
  } else if (down?.trim() && comingFrom !== "D") {
    column++;
    comingFrom = "U";
  }
}

console.log("Path:", path);
console.log("Letters: ", letters);
