const ids = [1, 2, 3];

const table = {
  1: {
    weight: 1,
    price: 1,
  },
  2: {
    weight: 2,
    price: 2,
  },
  3: {
    weight: 3,
    price: 3,
  },
};

let totalPrice = Infinity;

let weightLimit = 100;

let res = [];

function backtrack(cur, currentWeight, currentPrice) {
  if (currentWeight > weightLimit) {
    return;
  }

  if (currentPrice < totalPrice) {
    res = [...cur];
  }

  for (let i = 0; i < ids.length; i++) {
    if (cur.includes(ids[i])) continue;

    const tableKey = ids[i];
    currentWeight = currentWeight + table[tableKey].weight;
    currentPrice = currentPrice + table[tableKey].price;
    cur.push(tableKey);
    backtrack(cur, currentWeight, currentPrice);
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
