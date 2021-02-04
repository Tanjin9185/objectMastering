//object er modhye kono key er property/value function takle take method bole, oi function er name take na
//Object er kono property/method er property use korte   this.  use kra hoi
//Object er property baire teke access krte hole objectName.propertyName

const normalPerson = {
    firstName: "Tanjin",
    lastName:"Ahamed",
    salary: 500,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){   
        this.salary = this.salary - amount;
        console.log(this);
        return this.salary;     
    },
}
normalPerson.chargeBill(200);

console.log(normalPerson.salary);
