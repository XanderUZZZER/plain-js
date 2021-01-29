//select all items, containing group property with id === 2
let input = [
  {
    id: 3,
    type: 'card',
    group: [
      {
        id: 1,
        name: 'item1',
      },
      {
        id: 2,
        name: 'item2',
      },
    ],
  },
  {
    id: 5,
    type: null,
    group: [
      {
        id: 2,
        name: 'item2',
      },
    ],
  },
  {
    id: 1,
    type: 'block',
    group: null,
  },
  {
    id: 6,
    type: null,
    group: [
      {
        id: 3,
        name: 'item2',
      },
    ],
  },
]
let output = input.filter(item =>
  item.group &&
  item.group.some(grp => grp.id === 2)
)
console.table(output);


let incomingArray = [
  {
    id: 1,
    parentId: 3,
    value: 23,
    children: []
  },
  {
    id: 2,
    parentId: 3,
    value: 23,
    children: []
  },
  {
    id: 3,
    parentId: 1,
    value: 23,
    children: []
  },
  {
    id: 4,
    parentId: 1,
    value: 23,
    children: []
  },
  {
    id: 5,
    parentId: 1,
    value: 23,
    children: []
  }
]
console.table(incomingArray);

let m = new Map()
// incomingArray.forEach(item => {
//   m.set(item.parentId, incomingArray.find(itm => itm.id === item.parentId).children.push(item.id))
// })
m.clear()

let hash = {}
incomingArray.forEach(item => hash[item.id] = item)
incomingArray.forEach(item => hash[item.parentId] !== undefined && hash[item.parentId].children.push(item.id))

console.table(incomingArray)

function ConvertToChar(digit) {
  if (digit < 0) {
    digit = digit * (-1)
  }
  switch (digit) {
    case 0:
      return '0'
    case 1:
      return '1'
    case 2:
      return '2'
    case 3:
      return '3'
    case 4:
      return '4'
    case 5:
      return '5'
    case 6:
      return '6'
    case 7:
      return '7'
    case 8:
      return '8'
    case 9:
      return '9'
    default:
      return
  }
}

function IntToString(num) {
  if (typeof num !== 'number')
    return 'incorrect number'
  resultString = []
  resultSign = ''
  if (num < 0) {
    resultSign = '-'
  }
  while (num !== 0) {
    reminder = num % 10                 // ? do we need separate var
    num = (num - reminder) / 10         // ? may be better to have exnternal function
    reminder = ConvertToChar(reminder)  // ? unshift var or result of convert function
    resultString = reminder + resultString
  }
  resultString = resultSign + resultString
  return resultString
}

let test = 3452347

console.log(IntToString(test));
