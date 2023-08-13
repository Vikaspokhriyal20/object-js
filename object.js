// Object constructors


function Person(params) {
    this.firstName = 'Elon',
        this.lastName = 'musk'
}

const person1 = new Person();
console.log(person1);


function User(first, last) {
    this.firstName = first,
        this.lastName = last
}

const user1 = new User('vikas', 'pokhriyal');
const user2 = new User('aman', 'singh');

user1.age = 22;
user2.age = 21;

console.log(user1);
console.log(user2);
