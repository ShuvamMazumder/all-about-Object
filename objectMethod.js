//object method property review
const person ={
    firstName : 'shuvam',
    lastName : 'mazumder',
    salary : 15000,
    chargeBill : function (amount){  //annonymous function
        this.salary = this.salary - amount;
        return this.salary;
    },

};
person.chargeBill(200);
person.chargeBill(500);
console.log(person.salary);