// imidiately invoked function expression

// privateCounter called imidately and only called once
const privateCounter = (() => {

    let count = 0
    console.log(`initial value ${count}`)
    // the actual thing thats being called
    return () => { count += 1; console.log(count) }

})();

privateCounter()
privateCounter()
privateCounter()