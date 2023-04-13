function SeriesSum(n)
{
  // Happy Coding ^_^
  let initial = 1;
  let arr = [1];
  if (n === 0) {
    return parseFloat(0).toFixed(2);
  }
  
  while (n > 1) {
    let nextValue = 1 / (initial + 3);
    arr.push(nextValue)
    initial += 3;
    
    n--;
  }
  
  let result = parseFloat(arr.reduce((prev, current) => prev + current)).toFixed(2);
  console.log(arr);
  
  return result;
}