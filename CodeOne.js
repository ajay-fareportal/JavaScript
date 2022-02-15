debugger
var ename = 'TechNo';

function functionOne(ename){
    this.ename = ename;
    console.log(ename);
}

functionOne("Ajay");
console.log(ename);