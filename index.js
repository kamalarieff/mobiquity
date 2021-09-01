/**
 * @description
 * This is the engine of the program where it contains the logic
 * to only choose the combinations that does not exceed the weight limit
 *
 * It is using a recursive function to generate all the combinations
 *
 * @param {Number[]} inputArr - List of ids
 * @param {Object} inputTable - An object that contains the information about each item
 * @param {Number} weightLimit - Weight limit
 * @returns {Object[]} An array of objects that contains the final items
 *
 * @example
 * engine([1, 2], {
 *   1: {
 *     weight: 1,
 *     price: 1
 *   },
 *   2: {
 *     weight: 2,
 *     price: 2
 *   }
 * }, 1)
 *
 * //=> [
 *   {
 *     id: 1,
 *     weight: 1,
 *     price: 1
 *   }
 * ]
 */
function engine(inputArr, inputTable, weightLimit) {
  let totalPrice = Number.MIN_VALUE;
  let totalWeight = 0;
  let res = [];

  /**
   * @description
   * The backtracking function to try out all the combinations
   *
   * @param {Number[]} cur - Current iteration
   * @param {Number} currentWeight - Current weight of the iteration
   * @param {Number} currentPrice - Current price of the iteration
   */
  function backtrack(cur, currentWeight, currentPrice) {
    // you can uncomment this to see the recursive function in action
    /* console.log(
      'cur currentWeight currentPrice',
      cur,
      currentWeight,
      currentPrice,
    ); */

    // this is our base case
    if (currentWeight > weightLimit) {
      return;
    }

    if (currentPrice > totalPrice) {
      totalPrice = currentPrice;
      totalWeight = currentWeight;
      res = [...cur];
    }

    // there could be some pairs that have the same price
    // in this case, we get the one with the less weight
    if (currentPrice == totalPrice && currentWeight < totalWeight) {
      totalPrice = currentPrice;
      totalWeight = currentWeight;
      res = [...cur];
    }

    // this is the optimization. If you replace this with 0, then it is easier
    // to see
    let startingIndex = cur.length == 0 ? 0 : cur[cur.length - 1];

    // this is also our base case.
    // the recursive function ends when the loop ends
    for (let i = startingIndex; i < inputArr.length; i++) {
      const tableKey = inputArr[i];

      // this is avoid duplicate entries
      if (cur.includes(inputArr[i])) continue;

      currentWeight = currentWeight + inputTable[tableKey].weight;
      currentPrice = currentPrice + inputTable[tableKey].price;
      cur.push(tableKey);
      backtrack(cur, currentWeight, currentPrice);

      // we need to go back to previous weight and price
      // when we do backtracking
      currentWeight = currentWeight - inputTable[tableKey].weight;
      currentPrice = currentPrice - inputTable[tableKey].price;
      cur.pop();
    }
  }

  // we start the function with an empty array
  // then we populate it
  backtrack([], 0, 0);

  return res.reduce((previous, current) => {
    return [
      ...previous,
      {
        id: current,
        weight: inputTable[current].weight,
        price: inputTable[current].price,
      },
    ];
  }, []);
}

export default engine;
