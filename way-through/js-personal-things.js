var input_text = "";
var password = "asdfasdf";

document.onkeypress = function(event) {
    event = (event || window.event);
    if(event.keyCode == 123 || event.keyCode == 17 || event.keyCode == 85) { // f12 || ctrl || U
        alert('no u');
        return false
    }
}
document.onmousedown = function(event) {
    event = (event || window.event);
    if(event.keyCode == 123 || event.keyCode == 17 || event.keyCode == 85) { // f12 || ctrl || U
        alert('no u');
        return false
    }
}
document.onkeydown = function(event) {
    event = (event || window.event);
    if(event.keyCode == 123 || event.keyCode == 17 || event.keyCode == 85) { // f12 || ctrl || U
        alert('no u');
        return false
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());



function theEnterButton() {
    input_text = document.getElementById("psswrd").value;

    if(input_text == password) {
        //window.location="\inside.html";
        clearText();
        document.getElementById("result").innerHTML = ".";
        window.open("\inside.html",'_blank');

    }
    else {
        clearText();
        document.getElementById("result").innerHTML = "wrong password";
    }
}

function clearText() {
    document.getElementById("psswrd").value = "";
}

