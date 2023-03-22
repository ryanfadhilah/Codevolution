function Person(fname, lname) {
    this.firstName = fname
    this.lastName = lname
}

const p1 = new Person("ryan", "Fadhilah")
const p2 = new Person("ryan2", "Fadhilah2")

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

console.log(p2.getFullName())