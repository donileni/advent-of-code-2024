import { readFileSync } from 'fs'

const list1 = []
const list2 = []

let sum = 0;

const list = readFileSync('./lists.txt', 'utf8').split('\n')

list.forEach(row => {
  const splitRow = row.split(/\s+/)
  list1.push(Number(splitRow[0]))
  list2.push(Number(splitRow[1]))
})

list1.sort((a, b) => a - b)
list2.sort((a, b) => a - b)

for (let i = 0; i < list1.length; i++) {
  const sumOfNumbers = list1[i] - list2[i];
  const positiveNumber = Math.abs(sumOfNumbers);
  sum += positiveNumber;
}

console.log(sum)