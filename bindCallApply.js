const normalPerson = {
    firstName: "Tanjin",
    lastName:"Ahamed",
    salary: 500,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, vat){   
        this.salary = this.salary - amount -vat;
        console.log(this);
        return this.salary;        
    },
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 1000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 1000,
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);    //kono object a onno object er method use krte blind use kre..bind(this er value)..bind return hisebe function dibe/ edik eta function heroChargeBill()
//heroChargeBill(100);
//console.log(heroPerson.salary);

normalPerson.chargeBill.call(heroPerson, 600,10);      //call(this,parameter_value)
//console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [600,10]);       //apply(this, [parameter_value])
console.log(heroPerson.salary);