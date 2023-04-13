function sumOfIntegersInString(str) {
    let sum = 0;
    let temp = "";
    for (let i = 0; i <= str.length; i++) {
        if (!isNaN(str[i])) {
            temp += str[i];
        } else {
            sum += +temp;
            temp = "";
        }
    }
    return sum;
}