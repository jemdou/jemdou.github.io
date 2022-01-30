var game1_input;




/* 
document.getElementById("input").addEventListener("keyup",
    function(event) {
        event.preventDefault();
        if(event.keyCode === 13) {
            document.getElementById("btn").click();
        }
    }
);
*/

function displayMessage() {
    game1_input = document.getElementById("input").value; 
    if(game1_input) {
        document.getElementById("entered-input").innerHTML = game1_input;
    }
    else {
        document.getElementById("entered-input").innerHTML = "no input";
    }
}