//  for loop

for (let i = 1; i <= 5; i++) {
    console.log(`for loop ${i}`)
}

// while loop
let i = 1
while (i <= 5) {
    console.log(`while loop ${i}`)
    i++
}

// do While
do {
    console.log(`Do while loop ${i}`)
    i++
} while (i <= 5);


// for of Loop
const arr = [1, 2, 3, 4, 5, 6, 7]

for (const i of arr) {
    console.log(`for of loop : ${i}`)
}