/* ===manhwa scipts=== */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";    
}

/* ===game-1 scripts=== */

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
