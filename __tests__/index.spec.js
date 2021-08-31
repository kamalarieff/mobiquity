import engine from "../index";

describe("engine", () => {
  it("test 1", () => {
    const inputArr = [1, 2, 3];

    const inputTable = {
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

    const weightLimit = 10;

    const res = engine(inputArr, inputTable, weightLimit);
    expect(res).toEqual([
      { id: 1, weight: 1, price: 1 },
      { id: 2, weight: 2, price: 2 },
      { id: 3, weight: 3, price: 3 },
    ]);
  });

  it("test 2", () => {
    const inputArr = [1, 2, 3, 4, 5, 6];

    const inputTable = {
      1: {
        weight: 53.38,
        price: 45,
      },
      2: {
        weight: 88.62,
        price: 98,
      },
      3: {
        weight: 78.48,
        price: 3,
      },
      4: {
        weight: 72.3,
        price: 76,
      },
      5: {
        weight: 30.18,
        price: 9,
      },
      6: {
        weight: 46.34,
        price: 48,
      },
    };
    const weightLimit = 81;

    const res = engine(inputArr, inputTable, weightLimit);
    expect(res).toEqual([{ id: 4, weight: 72.3, price: 76 }]);
  });

  it("test 3", () => {
    const inputArr = [1];

    const inputTable = {
      1: {
        weight: 15.3,
        price: 34,
      },
    };
    const weightLimit = 8;

    const res = engine(inputArr, inputTable, weightLimit);
    expect(res).toEqual([]);
  });

  it("test 4", () => {
    const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const inputTable = {
      1: {
        weight: 85.31,
        price: 29,
      },
      2: {
        weight: 14.55,
        price: 74,
      },
      3: {
        weight: 3.98,
        price: 16,
      },
      4: {
        weight: 26.24,
        price: 55,
      },
      5: {
        weight: 63.69,
        price: 52,
      },
      6: {
        weight: 76.24,
        price: 75,
      },
      7: {
        weight: 60.02,
        price: 74,
      },
      8: {
        weight: 93.18,
        price: 35,
      },
      9: {
        weight: 89.95,
        price: 78,
      },
    };
    const weightLimit = 75;

    const res = engine(inputArr, inputTable, weightLimit);
    expect(res).toEqual([
      { id: 2, weight: 14.55, price: 74 },
      { id: 7, weight: 60.02, price: 74 },
    ]);
  });

  it("test 5", () => {
    const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const inputTable = {
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
    const weightLimit = 56;
    const res = engine(inputArr, inputTable, weightLimit);
    expect(res).toEqual([
      { id: 8, weight: 19.36, price: 79 },
      { id: 9, weight: 6.76, price: 64 },
    ]);
  });
});
