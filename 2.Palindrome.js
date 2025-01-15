const palindrome = str => str.split("").reverse().join("") === str;

console.log(palindrome('ehe'));
console.log(palindrome('japan'));