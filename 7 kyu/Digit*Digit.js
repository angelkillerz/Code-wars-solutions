function squareDigits(num){
    let arrNum = num.toString().split("");
    let newNum = arrNum.map(element => Math.pow(+element,2)).join("");
    return +newNum
  }