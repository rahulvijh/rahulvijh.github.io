
class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    getMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.getMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, major, homeLocation) {
        super(name, age, major);
        this.homeLocation = homeLocation;
    }
    
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }

}

const me = new Traveler("Rahul Vijh", 26, "Computer Science", "New Delhi");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());