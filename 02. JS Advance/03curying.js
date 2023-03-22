function sum(a, b, c) {
    return a + b + c
}
console.log(sum(2, 3, 5))

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))

const input1 = curriedSum(2)
const input2 = input1(3)
const input3 = input2(5)