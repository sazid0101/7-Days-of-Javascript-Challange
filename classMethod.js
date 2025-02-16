class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(d) {
        console.log(`Hello, my name is ${this.name},my age is ${this.age}, ${d}`);
    }
}

const person2 = new Person("Shahriar", 25);
console.log(person2);
person2.greet("i am learning web development");