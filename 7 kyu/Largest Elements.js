function largest(n, array) {
    // Find the n highest elements in a list
    //First sort the array;
    //Ascending order a compare b
    let newArr = array.sort((a, b) => b-a).splice(0, n);
    newArr.sort((a, b) => a - b);
    return newArr;
  }