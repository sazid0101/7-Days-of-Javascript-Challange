class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} is playing`)
    }
}
const person1 = new person("sazid", 25);
const person2 = new person("islam", 20);

person1.play();
person2.play()