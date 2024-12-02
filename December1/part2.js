import { readFileSync } from 'fs'

const list1 = []
const list2 = []

let score = 0

const list = readFileSync('./lists.txt', 'utf8').split('\n')

list.forEach(row => {
  const splitRow = row.split(/\s+/)
  list1.push(Number(splitRow[0]))
  list2.push(Number(splitRow[1]))
})

const getOccurence = (array, value) => {
    return array.filter((item) => (item === value)).length
  }
  
const similarityScore = (value, occurence) => {
    return value * occurence
}

for (let i = 0; i < list1.length; i++) {
    const occurence = getOccurence(list2, list1[i])
    const currentScore = similarityScore(list1[i], occurence)
    score += currentScore
}

console.log(score)