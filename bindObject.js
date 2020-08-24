const person ={
    firstName : 'shuvam',
    lastName : 'mazumder',
    salary : 15000,
    chargeBill : function (amount){  //annonymous function
        this.salary = this.salary - amount;
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

const heroSalary = person.chargeBill.bind(friend2);
heroSalary(2000);
console.log(friend2.salary);
console.log(person.salary);