const transpose = function(matrix) {
  // Put your solution here
  let rowArr = [];
  let resultArr = [];
  if(matrix.length !== 0) {
      for(let i = 0; i < matrix[0].length; i++) {
        for(let row = 0; row < matrix.length; row++){
          rowArr.push(matrix[row][i]);
        }
        resultArr.push(rowArr);
        rowArr = [];
      }
      return resultArr;
  }
  return [];
};

const wordSearch = (letters, word) => {
  const transposedMatrix = transpose(letters);
  // console.log(transposedMatrix);
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(letters.length);
  if (letters.length === 0) {
      return false;
  }
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }
  for (v of verticalJoin) {
      if (v.includes(word)) {return true}
      else {return false}
  }
}
// const result = wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK');

// wordSearch([], 'FRANK');

module.exports = wordSearch