var game1_input;

var u_hp = 10;
var u_maxhp = 10;
var u_mana = 10;
var u_maxmana = 10;
var u_stamina = 10;
var u_maxstamina = 10;


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
function showStats() {
    document.getElementById("user_hp").innerHTML = u_hp;
    document.getElementById("user_maxhp").innerHTML = u_maxhp;
    document.getElementById("user_mana").innerHTML = u_mana;
    document.getElementById("user_maxmana").innerHTML = u_maxmana;
    document.getElementById("user_stamina").innerHTML = u_stamina;
    document.getElementById("user_maxstamina").innerHTML = u_maxstamina;
}


function displayMessage() {
    game1_input = document.getElementById("input").value; 
    if(game1_input) {
        document.getElementById("entered-input").innerHTML = game1_input;
    }
    else {
        document.getElementById("entered-input").innerHTML = "no input";
    }
}

function decreaseHp() {
    u_hp -= 1;
    document.getElementById("user_hp").innerHTML = u_hp;
}
function decreaseMana() {
    u_mana -= 1;
    document.getElementById("user_mana").innerHTML = u_mana;
}
function decreaseStamina() {
    u_stamina -= 1;
    document.getElementById("user_stamina").innerHTML = u_stamina;
}