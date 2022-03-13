let sentences = 
[
"this is a random sentence one",
"this is a random sentence two"
];

let the_sentence = "";
var input;

function randomSentenceDisplay() {
    var rnd_num = getRandomInt(sentences.length);
    document.getElementById("random-sentence").innerHTML = sentences.length;

    the_sentence = sentences[rnd_num];

    //document.getElementById("random-sentence").innerHTML = the_sentence;
}

function getRandomInt(size) {
    return Math.floor(Math.random() * max);
}


function displayMessage() {
    input = document.getElementById("input").value; 
    if(input) {
        document.getElementById("entered-input").innerHTML = input;
    }
    else {
        document.getElementById("entered-input").innerHTML = "no input";
    }
}