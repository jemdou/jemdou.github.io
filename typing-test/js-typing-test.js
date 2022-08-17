var language_korean = false;
var language_english = true;

var en_sentences = [];
en_sentences[0] = "Do one thing everyday that scares you.";
en_sentences[1] = "Innovation distinguishes between a leader and a follower";
en_sentences[2] = "Freedom of speech doesn't mean freedom of consequences.";

var kr_sentences = [];
kr_sentences[0] = "좋아하는 사람이 생기면, 모든게 컬러풀하게 보인데.";
kr_sentences[1] = "말은 상처를 준다고! 후회를 해도 주워담을 수 없어.";
kr_sentences[2] = "꿈은 도망가지 않아. 도망가는 것은 언제나 나 자신이지.";

var the_sentence = "";
var input;

function randomSentenceDisplay() {

    if(language_english) {
        var temp_num = getRandomInt(en_sentences.length);

        the_sentence = en_sentences[temp_num]
        document.getElementById("random-sentence").innerHTML = the_sentence;
    }
    else if(language_korean) {
        var temp_num = getRandomInt(kr_sentences.length);

    the_sentence = kr_sentences[temp_num]
    document.getElementById("random-sentence").innerHTML = the_sentence;
    }
    
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
        if(language_english) {
            document.getElementById("entered-input").innerHTML = "no input";
        }
        else if(language_korean) {
            document.getElementById("entered-input").innerHTML = "입력된 문장이 없음";
        }
        
    }

    if(input == the_sentence) {
        if(language_english) {
            document.getElementById("result-text").innerHTML = "nice";
        }
        else if(language_korean) {
            document.getElementById("result-text").innerHTML = "굳";
        }
        
    }
    else {
        if(language_english) {
            document.getElementById("result-text").innerHTML = "try again";
        }
        else if(language_korean) {
            document.getElementById("result-text").innerHTML = "다시해 시발년아";
        }
    }
}
function clearMessage() {
    document.getElementById("input").value = "";
    if(language_korean) {
        document.getElementById("entered-input").innerHTML = "(입력 문장)";
    }
    else if(language_english) {
        document.getElementById("entered-input").innerHTML = "(typed sentence)";
    }
    document.getElementById("result-text").innerHTML = ".";
    focusInputBox();
}

function focusInputBox() {
    document.getElementById("input").focus();
}

function changeToKoreanUI() {
    document.getElementById("readplz").innerHTML = 
        "|| 랜덤 문장을 얻기 위해선 '탭'을 누른 후 '엔터'를 누르세요.<br>|| '탭'을 누르고 문장을 쓴 후, '엔터'를 누르세요.<br>|| 문장을 지우기 위해선 '탭'을 누른 후 '엔터'를 누르세요.";
    document.getElementById("head").innerHTML = "타이핑 프로그램";
    document.getElementById("btn_sentence").innerHTML = "랜덤 문장";
    document.getElementById("random-sentence").innerHTML = "(예시 문장)";
    document.getElementById("entered-input").innerHTML = "(입력 문장)";
    document.getElementById("clr_btn").innerHTML = "지우기";
    document.getElementById("result-text").innerHTML = ".";
    
    language_english = false;
    language_korean = true;
}
function changeToEnglishUI() {
    document.getElementById("readplz").innerHTML =
        "|| press 'tab' and 'enter' to get a random sentence.<br>|| press 'tab', type the random sentence and 'enter' when you are finshed.<br>|| press 'tab' then 'enter' to start typing again.";
    document.getElementById("head").innerHTML = "typing program";
    document.getElementById("btn_sentence").innerHTML = "random sentence"
    document.getElementById("random-sentence").innerHTML = "(example sentence)";
    document.getElementById("entered-input").innerHTML = "(typed sentence)";
    document.getElementById("clr_btn").innerHTML = "clear";
    document.getElementById("result-text").innerHTML = ".";

    language_english = true;
    language_korean = false;
}
