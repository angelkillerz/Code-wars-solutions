function removeExclamationMarks(s) {
    //Simplified Version 
    /*
      first using string method split to split string into array
      and then use Array method filter to filter array element that is not ! then using 
      Array method join to join it into string again
    */
    return s.split("").filter( word => word !== '!').join('');
    
  }