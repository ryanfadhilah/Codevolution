// lexical

let global = 1

const parentFucntion = () => {
    let parent = 11
    console.log(global)
    console.log(parent)

    const childFunction = () => {
        console.log(global += 1)
        console.log(parent += 1)
    }

    return childFunction
}

const result = parentFucntion()
result()
result()
result()
