const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
  ],
];

console.table(arr);
console.log(arr[2][2]);
console.log(arr[3][2][2]);
