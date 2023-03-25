// Closure & IIFE

// Credit directly start an initial value of 3
const credit = ((num) => {

    let credit = num
    console.log(`initial credit value ${credit}`)

    // initial value will be incremented each time it is being called
    return () => {
        credit -= 1
        if (credit > 0) console.log(`playing game, ${credit} credit(s) remaining`)
        if (credit < 0) console.log(`not enought credit(s)`)
    }

})(3)

credit()
credit()
credit()
credit()