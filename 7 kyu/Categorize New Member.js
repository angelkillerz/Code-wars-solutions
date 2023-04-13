function openOrSenior(data){
    // ...
    //Iteratethrough a list of pair
    //Senior = age >= 55 handicap  > 7
    let resultArray = [];
    for (let pair in data) {
      if (data[pair][0] >= 55 && data[pair][1] > 7) {
        resultArray.push('Senior');
      } else {
        resultArray.push('Open')
      }
    }
    console.log(resultArray);
    return resultArray;
  }