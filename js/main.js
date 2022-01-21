function isOdd(num){
  if (num % 2 ===1){
    return true;
  } else {
    return false;
  }  
}

function validator(numbers) {
  let numArr = numbers.split("")
  let modified = [];
  console.log(numArr + "numArr")
  for (let i = 0; i < numArr.length; i++) {
      if (isOdd([i]) === false)
          modified.push(parseInt(numArr[i]));
      else
          modified.push(parseInt(numArr[i] * 2));
  }
  console.log(modified + "modified")
  let modifiedArr = []
  modified.forEach(function(element){
    let stringElement = element.toString()
    if (stringElement.length > 1){
    modifiedArr.push(parseInt(stringElement[0])+parseInt(stringElement[1]))
    }else {
    modifiedArr.push(element)
    }
  });
  