
let variable = {};
Object.defineProperty(variable,"firstName",{
    get:function(){
        return value;
    },
    set : function(val){
        
    }
});
document.getElementById("btn")
    .onclick = function () {
        variable = document.getElementById("textbox").value;
        document.getElementById("value")
            .innerText = "The value of variable is: " + variable;
        console.log(variable);
    }

var x = setInterval(changeValue, 10000)
function changeValue() {
    variable = Math.floor(Math.random() * (100 - 1) + 1);

    document.getElementById("textbox").value = variable;
    document.getElementById("value")
        .innerText = "The value of variable is: " + variable;
    console.log(variable);
}

