// Implicit Binding
function sayMyName(name) {
    console.log(`my name is ${name}`)
}
sayMyName("ryan")


const person = {
    name: "ryan",
    greet: function () {
        console.log(`hi my name is also ${this.name}`)
    }
}
person.greet()


// Explicit Binding
function greet() {
    console.log(`My name is ${this.name}`)
}
sayMyName.call(person)



// New Binding
function People(name) {
    this.name = name
}
const p1 = new People("ryan")
const p2 = new People("fadhilah")

console.log(p1.name, p2.name)
