// const ids = [1, 2, 3];
//
// const table = {
//   1: {
//     weight: 1,
//     price: 1,
//   },
//   2: {
//     weight: 2,
//     price: 2,
//   },
//   3: {
//     weight: 3,
//     price: 3,
//   },
// };

// const ids = [1, 2, 3, 4, 5, 6];
//
// const table = {
//   1: {
//     weight: 53.38,
//     price: 45,
//   },
//   2: {
//     weight: 88.62,
//     price: 98,
//   },
//   3: {
//     weight: 78.48,
//     price: 3,
//   },
//   4: {
//     weight: 72.3,
//     price: 76,
//   },
//   5: {
//     weight: 30.18,
//     price: 9,
//   },
//   6: {
//     weight: 46.34,
//     price: 48,
//   },
// };

// const ids = [1];
//
// const table = {
//   1: {
//     weight: 15.3,
//     price: 34,
//   },
// };

// const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// const table = {
//   1: {
//     weight: 85.31,
//     price: 29,
//   },
//   2: {
//     weight: 14.55,
//     price: 74,
//   },
//   3: {
//     weight: 3.98,
//     price: 16,
//   },
//   4: {
//     weight: 26.24,
//     price: 55,
//   },
//   5: {
//     weight: 63.69,
//     price: 52,
//   },
//   6: {
//     weight: 76.24,
//     price: 75,
//   },
//   7: {
//     weight: 60.02,
//     price: 74,
//   },
//   8: {
//     weight: 93.18,
//     price: 35,
//   },
//   9: {
//     weight: 89.95,
//     price: 78,
//   },
// };

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const table = {
  1: {
    weight: 90.72,
    price: 13,
  },
  2: {
    weight: 33.8,
    price: 40,
  },
  3: {
    weight: 43.15,
    price: 10,
  },
  4: {
    weight: 37.97,
    price: 16,
  },
  5: {
    weight: 46.81,
    price: 36,
  },
  6: {
    weight: 48.77,
    price: 79,
  },
  7: {
    weight: 81.8,
    price: 45,
  },
  8: {
    weight: 19.36,
    price: 79,
  },
  9: {
    weight: 6.76,
    price: 64,
  },
};

let totalPrice = Number.MIN_VALUE;

let weightLimit = 100;

let res = [];

function backtrack(cur, currentWeight, currentPrice) {
  if (currentWeight > weightLimit) {
    return;
  }

  if (currentPrice > totalPrice) {
    totalPrice = currentPrice;
    res = [...cur];
  }

  for (let i = 0; i < ids.length; i++) {
    if (cur.includes(ids[i])) continue;

    const tableKey = ids[i];
    currentWeight = currentWeight + table[tableKey].weight;
    currentPrice = currentPrice + table[tableKey].price;
    cur.push(tableKey);
    backtrack(cur, currentWeight, currentPrice);

    // we need to go back to previous weight and price
    // when we do backtracking
    currentWeight = currentWeight - table[tableKey].weight;
    currentPrice = currentPrice - table[tableKey].price;
    cur.pop();
  }
}

backtrack([], 0, 0);
const temp = res.reduce((previous, current) => {
  return [
    ...previous,
    { id: current, weight: table[current].weight, price: table[current].price },
  ];
}, []);
console.log("temp", temp);
