import { readFileSync } from 'fs'

const data = readFileSync('./lists.txt', 'utf8').split('\n')
const lists = data.map(row => row.split(' ').map(Number))

let counter = 0

const checkIfValid = (number) => {
    if (number > -4 && number < 4 && number !== 0) {
      return true;
    }
    return false;
}

const checkPositive = (number) => {
    if (number > 0) {
        return true
    }
    return false
}


const checkList = (array) => {
  let safe = true
  const direction = array[0] - array[1];

  if (!checkIfValid(direction)) {
    return false
  }

  if (checkPositive(direction)) {
    for (let i = array.length; i > 2; i--) {
      const checkNumber = array[i - 2] - array[i - 1]

      if(!checkIfValid(checkNumber)) {
        safe = false
      }

      if (!checkPositive(checkNumber)) {
        safe = false
      }
    }
  } else {
    for (let i = array.length; i > 2; i--) {
      const checkNumber = array[i - 2] - array[i - 1]

      if(!checkIfValid(checkNumber)) {
        safe = false
      }

      if (checkPositive(checkNumber)) {
        safe = false
      }
    }
  }

  return safe
}

lists.forEach(array => {
  if (checkList(array)) {
    counter++
  }
});

console.log(counter)
