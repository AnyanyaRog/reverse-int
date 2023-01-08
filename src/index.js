module.exports = function reverse (n) {
  let array = ""
  if (n < 0) {
    n = n*(-1)
 }
 let str = String(n)
  for (let i=str.length-1; i>=0; i--)
 array += str[i];
 return array;
} 
