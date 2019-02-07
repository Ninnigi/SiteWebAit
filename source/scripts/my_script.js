/*
*init
*called when body loaded
*/

function init() {
    document.getElementById("test").innerHTML="init says hi!";
}

/*
button test
*/

function test_button(){
    document.getElementById("test").innerHTML="you just activated my trap card"
    document.bgColor="green"
    document.fgColor="red"
    
}