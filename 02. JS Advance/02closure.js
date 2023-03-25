// let global = 1

// const parentFunction = () => {
//     let parent = 1
//     console.log(global)
//     console.log(parent)


//     childFunction = () => {
//         console.log(global += 1)
//         console.log(parent += 1)
//     }

//     childFunction()
// }

// parentFunction()

let global = 1

const parentFunction = () => {
    let parent = 1
    console.log(global)
    console.log(parent)


    childFunction = () => {
        console.log(global += 1)
        console.log(parent += 1)
    }

    return childFunction
}

const result = parentFunction()
// 1
// 1

result()
// 2
// 2
result()
// 3
// 3
