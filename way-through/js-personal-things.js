var input_text = "";
var password = "asdfasdf";

function theEnterButton() {
    input_text = document.getElementById("psswrd").value;

    if(input_text == password) {
        //window.location="\inside.html";
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