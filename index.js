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
//console.table(output)

// fill in all the elements (which are parents) with the corresponding children
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
//console.log('Incoming Array')
//console.table(incomingArray)
let hash = {}
incomingArray.forEach(item => hash[item.id] = item)
incomingArray.forEach(item => hash[item.parentId] !== undefined && hash[item.parentId].children.push(item.id))
//console.log('Modified incoming Array')
//console.table(incomingArray)

/**
 * Converts digit to a string character (digit sign is ignored)
 * @param {number} digit - Incoming digit
 * @returns {string} string character containing converted incoming value
 */
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
      return 'error'
  }
}

/**
 * Converts integer number to its string representation, fractional numbers are ignored
 * @param {number} num - integer value to convert
 * @returns {string} string containing converted incoming value
 */
function IntToString(num) {
  if (typeof num !== 'number' || (num % 1) !== 0)
    return 'incorrect integer number'
  resultString = []
  resultSign = ''
  if (num < 0) {
    resultSign = '-'
  }
  while (num !== 0) {
    reminder = num % 10                 // ? do we need separate var
    num = (num - reminder) / 10         // ? may be better to have exnternal function
    reminder = ConvertToChar(reminder)
    resultString = reminder + resultString
  }
  resultString = resultSign + resultString
  return resultString
}

let test = -12685
//console.log('Input number: ', test);
//console.log('Output string:', IntToString(test));

let graph = [
  {
    id: 1,

  },
  {
    id: 2,
    parentId: 1
  },
  {
    id: 3,
    parentId: 1
  },
  {
    id: 4,
    parentId: 1
  },
  {
    id: 5,
    parentId: 2
  },
  {
    id: 6,
    parentId: 2
  },
  {
    id: 7,
    parentId: 4
  },
  {
    id: 8,
    parentId: 5
  },
  {
    id: 9,
    parentId: 5
  },
  {
    id: 10,
    parentId: 5
  },
  {
    id: 11,
    parentId: 7
  },
  {
    id: 12,
    parentId: 7
  },
  {
    id: 13,
    parentId: 7
  },
  {
    id: 14,
    parentId: 8
  },
  {
    id: 15,
    parentId: 8
  },
  {
    id: 16,
    parentId: 10
  },
  {
    id: 17,
    parentId: 10
  },
  {
    id: 18,
    parentId: 14
  },
  {
    id: 19,
    parentId: 14
  }
]
console.log('Original graph');
console.table(graph)

let graphHash = {}

graph.forEach(item => {
  graphHash[item.id] = item
  graphHash[item.id].children = []
})
graph.forEach(item => {
  if (graphHash[item.parentId] !== undefined) {
    graphHash[item.parentId].children.push(item.id)
  }
})

console.log('Hashed graph');
console.table(graphHash)
function findParent(node1Id, node2Id, graph) {
  node1 = graph[node1Id]
  node2 = graph[node2Id]
  if (node1 === undefined || node2 === undefined) {
    return `nodes with id: ${node1Id} and id: ${node2Id} do not have common ancestors`
  }
  let visited = {}

  while (node1.parentId !== undefined) {
    visited[node1.parentId] = true
    node1 = graph[node1.parentId]
  }

  while (visited[node2.parentId] !== true) {
    node2 = graph[node2.parentId]
  }
  return graph[node2.parentId].id
}

console.log('Lowest common ancestor for 19 and 16 items: ', findParent(19, 16, graphHash))
console.log('Lowest common ancestor for 16 and 19 items: ', findParent(16, 19, graphHash))
console.log('Lowest common ancestor for 4 and 8 items: ', findParent(4, 8, graphHash))
console.log('Lowest common ancestor for 14 and 12 items: ', findParent(14, 12, graphHash))
console.log('Lowest common ancestor for 14 and 120 items: ', findParent(14, 120, graphHash))
console.log('Lowest common ancestor for 3 and 19 items: ', findParent(3, 19, graphHash))

// Alex has unique way to gamble in the casino every time he is betting 1$ or all-in.
// Every night Alex decides on limited times he will bet all-in
// One time Alex got into the casino and he won all his bets.
// Write code which accept the money Alex has left the casino, and the limited times he can bet all-in. The code should calculate the minimum rounds that Alex had in that lucky night.

// For instance:
// MaxAllin = 1, TotalMoney = 9
// Took Alex 5 rounds
// Alex came in with 1$
// Round1 = 2$
// Round2 = 3$
// Round3 = 4$
// Round4 = 8$ - all-in
// Round5 = 9$
function minimumRounds(maxAllin, totalMoney) {
  let rounds = 0
  let results = []
  if ((totalMoney % 2) !== 0) {
    results.unshift(`${totalMoney}$`)
    totalMoney--
    rounds++
  }

  while (totalMoney > 2) {
    if (maxAllin !== 0) {
      results.unshift(`${totalMoney}$ - all-in`)
      totalMoney = totalMoney - (totalMoney / 2)
      maxAllin--
      rounds++
    }
    else {
      results.unshift(`${totalMoney}$`)
      totalMoney--
      rounds++
    }
  }
  results.unshift(`${totalMoney}$`)
  for (let index = 0; index < results.length; index++) {
    console.log(`Round ${index + 1}: `, results[index])
  }
  rounds++
  return rounds
}

console.log('Allins - 1, total money - 9, rounds - ', minimumRounds(1, 9));
console.log('Allins - 2, total money - 9, rounds - ', minimumRounds(2, 9));
// console.log('Allins - 0, total money - 12, rounds - ', minimumRounds(0, 12));
// console.log('Allins - 0, total money - 5, rounds - ', minimumRounds(0, 5));
// console.log('Allins - 1, total money - 5, rounds - ', minimumRounds(1, 5));
// console.log('Allins - 1, total money - 2, rounds - ', minimumRounds(1, 2));
// console.log('Allins - 0, total money - 2, rounds - ', minimumRounds(0, 2));
// console.log('Allins - 0, total money - 4, rounds - ', minimumRounds(0, 4));
// console.log('Allins - 1, total money - 4, rounds - ', minimumRounds(1, 4));
// console.log('Allins - 4, total money - 4, rounds - ', minimumRounds(4, 4));
// console.log('Allins - 1, total money - 3, rounds - ', minimumRounds(1, 3));
console.log('Allins - 1, total money - 1, rounds - ', minimumRounds(1, 1));




