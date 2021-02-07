function binarySearch(item, arr) {
  let low = 0
  let high = arr.length
  while (low <= high) {
    let mid = Math.trunc((low + high) / 2);
    let guess = arr[mid]
    if (guess === item) {
      return mid + 1
    }
    if (guess > item) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }
  }
}

function findSmallest(arr) {
  let smallest = arr[0]
  let samllestIndex = 0
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < smallest) {
      smallest = arr[index]
      samllestIndex = index
    }
  }
  return samllestIndex
}

function selectionSort(arr) {
  let newArr = []
  let smallest = 0
  let length = arr.length
  for (let index = 0; index < length; index++) {
    smallest = findSmallest(arr)
    newArr.push(arr[smallest])
    arr.splice(smallest, 1)
  }
  return newArr
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.trunc((low + high) / 2);
  let pivot = arr[0]
  let less = []
  let greater = []
  for (let index = 0; index < arr.length - 1; index++) {
  }
}

let testArr1 = [1, 2, 88, 408, 409, 511, 617, 688, 690, 790, 1024, 1568, 1766]
let testArr2 = [265, 17, 12355, 54, 22, 22550, 1, 1748]

console.table(testArr1)
console.log(binarySearch(790, testArr1));

console.table(testArr2)
console.table(selectionSort(testArr2))