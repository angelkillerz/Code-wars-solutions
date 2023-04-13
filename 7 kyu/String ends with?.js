function solution(str, ending){
    // TODO: complete
    let endingLen = ending.length;
    if (str.slice(str.length - endingLen) === ending) {
      return true;
    } else {
      return false;
    }
  }