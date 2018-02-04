class Person {
    constructor(name = 'Anonymouse',age =0 ) {
      this.name = name ;
      this.age = age;
    }
    getGreetings() {
        // return 'Hi. I am ' + this.name + ' !';
        return `Hi. I am ${this.name}! and my age is ${this.age}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}
class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
       return !!this.major;
}
    getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()){
       description += description + ` Their major is ${this.major}`;
    }
    return description;
}

}
class Traveler extends Person {
    constructor(name,age,homeTown)
    {
        super(name,age);
        this.homeTown = homeTown;
    }
    getGreetings(){
        let greetings = super.getGreetings();
        if(this.homeTown){
            greetings +=` and I am from ${this.homeTown}`;
        }
        return greetings;
    }
}
const traveler = new Traveler('Amir Ali',26,'Faisalabad');
const anonymouse = new Traveler();
console.log(traveler.getGreetings());
console.log(anonymouse.getGreetings());


