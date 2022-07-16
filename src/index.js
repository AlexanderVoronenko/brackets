module.exports = function check(str, bracketsConfig) {
  let result = false;
  let matrixBrackets = [];
  let currentConfig;

  function isFirst(arg) {
    currentConfig = 0;
    for (i = 0; i < bracketsConfig.length; i++) if (bracketsConfig[i][0] == arg) {
      currentConfig = i;
      return true
    };

    return false;
  }
  function isSecond(arg) {
    for (i = 0; i < bracketsConfig.length; i++) if (bracketsConfig[i][1] == arg) {
      currentConfig = i;
      return true;
    }
    return false;
  }

  let currentPos = 0;
  let strLength = str.length;

  while (currentPos < strLength) {
    if (isFirst(str[currentPos])) matrixBrackets.push(bracketsConfig[currentConfig]);

    if (bracketsConfig[currentConfig][0] === bracketsConfig[currentConfig][1]) {
      if (bracketsConfig[currentConfig][0] === matrixBrackets[matrixBrackets.length - 1][1] && matrixBrackets.length > 1) {
        if (matrixBrackets[matrixBrackets.length - 1][1] === matrixBrackets[matrixBrackets.length - 2][1]) {
          matrixBrackets.pop();
          if (matrixBrackets.pop() === undefined) return false;
        }

      }
      else {
        if (matrixBrackets.length === 0 && isSecond(str[currentPos])) return false;
      }
    } else {
      if (matrixBrackets.length === 0 && isSecond(str[currentPos])) return false;

      if (isSecond(str[currentPos])
        && bracketsConfig[currentConfig][1] === matrixBrackets[matrixBrackets.length - 1][1]) {
        if (matrixBrackets.pop() === undefined) return false;
      }
    }
    currentPos++;
  }
  if (matrixBrackets.length !== 0) return false;
  return true;

}

