var sentenes = [];
sentenes[0] = "Do one thing everyday that scares you.";
sentenes[1] = "Innovation distinguishes between a leader and a follower";
sentenes[2] = "Freedom of speech doesn't mean freedom of consequences.";

var the_sentence = "";
var input;

function randomSentenceDisplay() {
    var temp_num = getRandomInt(sentenes.length);

    the_sentence = sentenes[temp_num]
    document.getElementById("random-sentence").innerHTML = the_sentence;
}

function getRandomInt(size) {
    return Math.floor(Math.random() * size);
}


function displayMessage() {
    input = document.getElementById("input").value; 
    if(input) {
        document.getElementById("entered-input").innerHTML = input;
    }
    else {
        document.getElementById("entered-input").innerHTML = "no input";
    }

    if(input == the_sentence) {
        document.getElementById("result-text").innerHTML = "nice";
    }
    else {
        document.getElementById("result-text").innerHTML = "try again";
    }
}
function clearMessage() {
    document.getElementById("input").value = "";
    document.getElementById("entered-input").innerHTML = "";
    document.getElementById("result-text").innerHTML = "";
    focusInputBox();
}

function focusInputBox() {
    document.getElementById("input").focus();
}
