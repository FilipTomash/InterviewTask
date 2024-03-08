const grid: string[][] = [
  [">", "-", "-", "-", "A", "-", "@", "-", "+"],
  [" ", " ", " ", " ", " ", " ", " ", " ", "|"],
  ["+", "-", "U", "-", "+", " ", " ", " ", "C"],
  ["|", " ", " ", " ", "|", " ", " ", " ", "|"],
  ["s", " ", " ", " ", "C", "-", "-", "-", "+"],
];

let x: number = 0;
let y: number = 0;
let path: string = "";
let letters: string = "";
let comingFrom: string = "";

while (!path.includes("s")) {
  let current: string = grid[y][x];
  let left: string = grid[y]?.[x - 1];
  let right: string = grid[y]?.[x + 1];
  let up: string = grid[y - 1]?.[x];
  let down: string = grid[y + 1]?.[x];

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
    x--;
    comingFrom = "R";
  } else if (right?.trim() && comingFrom !== "R") {
    x++;
    comingFrom = "L";
  } else if (up?.trim() && comingFrom !== "U") {
    y--;
    comingFrom = "D";
  } else if (down?.trim() && comingFrom !== "D") {
    y++;
    comingFrom = "U";
  }
}

console.log("Path:", path);
console.log("Letters: ", letters);
