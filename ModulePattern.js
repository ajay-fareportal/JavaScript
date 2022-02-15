/*
    Problem Statement
    Using Module Pattern, feature, You do we use It ?
    1. Using Module Pattern, Store Employee Details and can access function
    Employee - name, age, designation, getName, getAge, getDesignation
*/

function Employee() {
    var name;
    var age;
    var designation;
    var salary;

    function setEmp(_name, _age, _des, _salary) { 
        name = _name; 
        age = _age;
        designation = _des;
        salary = _salary;
    }

    const getEmp = function () {
        console.log("Employee name: " + name);
        console.log("Employee age: " + age);
        console.log("Employee designation: " + designation);
        console.log("Employee salary: " + salary);
    }

    return{
        setEmp: setEmp,
        getEmp: getEmp,
    };
};

var employee1 = Employee();
employee1.setEmp("Ajay",23,"Developer",45000);
employee1.getEmp();
console.log();
var employee1 = Employee();
employee1.setEmp("Bhramar",23,"Software Engineer",46000);
employee1.getEmp();

