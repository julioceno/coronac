const numbers = [3, 9, 2] 

const add = (accumulator, currentValue) => accumulator + currentValue 

let n = numbers.reduce(add)

console.log(n)