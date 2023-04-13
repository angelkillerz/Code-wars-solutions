function countPositivesSumNegatives(input) {
    // your code here
    const posArr = [];
    let sumNeg = null;
    const zero = [];
    const final = [];
    //Check if the the input is Null or Array if true then return empty array
    if (input === null || input.length === 0) {
      return [];
    }
    //iterate through input Arr
    for (let num of input) {
      num > 0 ? posArr.push(num) : num < 0 ? sumNeg += num : zero.push(num);  
    }
    
    if (sumNeg === null) {
      sumNeg = 0;
    }
    let len = posArr.length;
    
    final.push(len, sumNeg);
    console.log(final);
    return final;
    
   }