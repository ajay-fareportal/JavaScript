var SingletonEmpObject = (function Employee(name,age,designation,salary) {
    const getEmp = function () {
        console.log("Employee name: " + name);
        console.log("Employee age: " + age);
        console.log("Employee designation: " + designation);
        console.log("Employee salary: " + salary);
    }

    return{
        getEmp: getEmp,
    };
})("Ajay",23,"Developer",45000);
console.log(SingletonEmpObject.getEmp());
// var employee1 = Employee();


