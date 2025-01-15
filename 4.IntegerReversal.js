const reverseInteger = (num) =>{ 
    const reversed = num.toString().split("").reverse().join("");

    return parseInt(reversed) // * Math.sign(num) // To test a negative number uncomment this line;
}

console.log(reverseInteger(123))