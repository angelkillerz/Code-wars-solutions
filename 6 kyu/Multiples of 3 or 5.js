function solution(number){
    let numArr = [];
    let result = {};
    let sum = [];
    
    if (number <= 3) {
      return 0
    }
  
    //for adding each numbers to array
    for (let num = 1; num < number ; num++) {
        numArr.push(num);
    }
  
    //to check if it can be divided by 3 and 5

    numArr.forEach((element, index) => {
        if (element % 3 === 0) {
            result[element] = 1;
        } else if (element % 5 === 0) {
            result[element] = 1;
        }
     })

     for (let keys in result) {
        sum.push(+keys);
     }
     let total = sum.reduce((prev, current) => prev+current);

    return total;
    
}