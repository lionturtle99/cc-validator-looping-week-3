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
  let sumOfArray = 0
  modifiedArr.forEach(function(element){
    sumOfArray += element;
  })
  console.log(modifiedArr +"modifiedArr")
  let sumString = sumOfArray.toString()
  console.log(sumString[-1])
  if (parseInt(sumString[-1]) === 0) {
    return "This Number is Valid"
  } else {
    return "This Number is not Valid"
  }
}

function typeOfCard(numbers) {
  if (numbers[0] === "4" && numbers.length === 16){
      return "This card is an Visa"
  } else if (numbers[0] === "5" && numbers.length === 16){
      return "This is a Mastercard"
  } else if (numbers[0] === "6" && numbers.length === 16){
      return "This card is an Discover"
  } else if (numbers[0, 1] === "3", "4" || numbers[0, 1] === "3", "7" && numbers.length === 15){
      return "This card is an American Express"
  } else {
      return "This isn't a debit/credit card"
  }
}