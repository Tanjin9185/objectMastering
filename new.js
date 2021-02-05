//onk gula object lagbe similar type r tkhn class use kra hoi..class name capital dye suro hoi "P"erson
class Person{
    constructor(firstName, lastName, salary){       //constructor er parameter hisebe property/keyword/attribute dite hoi
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Heo', 'Balam', 1000);    //class teke object create kora hoi new keyword use kre
console.log(heroPerson);

//onk gula same type object dorkar hole tader pattern/template hisebe class banano hoi