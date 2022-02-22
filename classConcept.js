class Employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getEmployeeAge(){
        return this.age;
    }
    getEmployeeName(){
        return this.name;
    }
}

var emp1 = new Employee("Ajay",20);

debugger;