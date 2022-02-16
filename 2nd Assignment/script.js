function changeColor() {
    document.getElementById("div-one").style.color = "red";
    document.getElementById("div-two").style.backgroundColor = "blue";
}
function setDefaultColor(){
    document.getElementById("div-one").style.color = "black";
    document.getElementById("div-two").style.backgroundColor = "aqua";

}

document.getElementById("div-two")
    .onmouseover = function () {
        changeColor()
    };

document.getElementById("div-two")
        .onmouseout = function(){
            setDefaultColor();
        }