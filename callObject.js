const person ={
    firstName : 'shuvam',
    lastName : 'mazumder',
    salary : 15000,
    chargeBill : function (amount,tips,tax){  //annonymous function
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    },
};
const friend ={
    firstName : 'joy',
    lastName : 'x',
    salary : 30000,
}
const friend2 ={
    firstName : 'hero',
    lastName : 'alam',
    salary : 20000,
}
person.chargeBill.call(friend2,2000,50,10);  //no of values -> no of parameter
console.log(friend2.salary);
