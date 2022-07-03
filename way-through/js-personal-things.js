var input_text = "";
var password = "12345678";

function theEnterButton() {
    input_text = document.getElementById("psswrd").value;

    if(input_text == password) {
        window.location="\inside.html";
    }
    else {
        clearText();
        document.getElementById("result").innerHTML = "wrong password";
    }
}

function clearText() {
    document.getElementById("psswrd").value = "";
}