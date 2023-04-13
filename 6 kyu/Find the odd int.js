function findOdd(a) {
    //happy coding!
    let numObj = {};
    a.forEach(element => {
        
      numObj[+element] = (numObj[+element] || 0) + 1;
     });
     console.log(numObj);
    for (const key in numObj) {
        if (numObj[key] % 2 === 1) {
            return parseInt(key);
        } 
    }
    
}