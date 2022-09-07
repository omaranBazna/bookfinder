let items = ["abce", "bma", "mbna", "bm", "jkpz"];

let search = "bm";

function searchF(arr, el) {
  let score = [];
  for (let item of arr) {
    score.push(scoring(item.volumeInfo.title, el));
  }

  return score;
}

console.log(searchF(items, search));
function scoring(el1, el2) {
  let score = 0;
  for (let char of el1) {
    if (el2.includes(char)) {
      score++;
      if (el1.indexOf(char) == el2.indexOf(char)) {
        score++;
      }
    }
  }
  return score / (el1.length + el2.length);
}
///to lowerCase ===
