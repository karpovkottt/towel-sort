module.exports = function towelSort (matrix) {
  if(arguments.length === 0) {
    let result = [];
    return result;}
  let result = [];
  if(matrix.length >= 1) {
    result = matrix[0];
    for(let i = 1; i < matrix.length; i += 2) {
      result = result.concat(matrix[i].reverse(), matrix[i + 1]);
    };
  } else {result = result}
  if (result.includes(undefined)) {
    result.pop();
  }
  return result;
}