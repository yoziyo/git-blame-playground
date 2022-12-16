const numbers = [1,2,3,4,5];

const reduceResult = 
numbers.reduce(
(acc, cur) => Number(acc) + Number(cur)
);

console.log(reduceResult);
