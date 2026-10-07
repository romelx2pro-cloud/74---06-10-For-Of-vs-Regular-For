// const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

// // Version using a for loop...
// for (let i = 0; i < magicSquare.length; i++) {
// 	let row = magicSquare[i];
// 	let sum = 0;
// 	for (let j = 0; j < row.length; j++) {
// 		sum += row[j];
// 	}
// 	console.log(`${row} summed to ${sum}`);
// }

// // Much cleaner version using a for...of
// for (let row of magicSquare) {
// 	let sum = 0;
// 	for (let num of row) {
// 		sum += num;
// 	}
// 	console.log(`${row} summed to ${sum}`);
// }

// // EXAMPLE 2
// // If you need the indices, use a traditional for loop!
// const words1 = [ 'mail', 'milk', 'bath', 'black' ];
// const words2 = [ 'box', 'shake', 'tub', 'berry' ];

// for (let i = 0; i < words1.length; i++) {
// 	//Access index i of both arrays
// 	console.log(`${words1[i]}${words2[i]}`);
// }
// const na=[
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9]
// ]
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
for (const r of magicSquare) {
  let s = 0;
  // console.log(r);
  for (let n of r) {
    // console.log(n);
    s += n;
  }
  // console.log(`sum of row ${r} is ${s}`);
}
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];
// for (const w1 of words1) {
//   console.log(`w1 is ${w1}`);
//   for (const w2 of words2) {
//     console.log(`  w2 is ${w2}`);
//   }
// }
let w3 = [];
for (let i = 0; i < words1.length; i++) {
  const element1 = words1[i];
  // console.log(`element1 is ${element1}`);
  for (let j = 0; j < words2.length; j++) {
    const element2 = words2[j];
    // console.log(`		element2 is ${element2}`);
    if (i === j) {
      w3.push(`${element1}${element2}`);
    }
  }
}
console.log(w3);
