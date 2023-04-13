function DNAStrand(dna){
    //your code here
    //Complement A and T G and C 
    let newDna = dna.split("");
    let resultedDna = [];
    for (let symbol of dna) {
      if (symbol === 'A') {
        symbol = 'T';
      } else if (symbol === 'T') {
        symbol = 'A';
      } else if (symbol === 'C') {
        symbol = 'G';
      } else if (symbol === 'G') {
        symbol = 'C';
      }
      
      resultedDna.push(symbol);
    }
    
    
    
    console.log(resultedDna);
    return resultedDna.join("");
  }