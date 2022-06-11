var language_english = true;
var language_korean = false;

var iphone13_reg_128 = false;
var iphone13_mini_128 = false;
var iphone13_pro_128 = false;
var iphone13_promax_128 = false;

var iphone12_reg_64 = false;
var iphone12_mini_64 = false;

var iphoneSE3_64 = false;
var iphoneSE3_128 = false;

var ipad_64 = false;
var ipad_256 = false;

var ipadAir_64 = false;
var ipadAir_256 = false;




var total = 0;

//13
function addiphone13_reg_128() {
    if(!iphone13_reg_128) {
        total += 109;
        iphone13_reg_128 = true;
    }
    else {
        total -= 109;
        iphone13_reg_128 = false;
    }
    showResult();
}
function addiphone13_mini_128() {
    if(!iphone13_mini_128) {
        total += 95;
        iphone13_mini_128 = true;
    }
    else {
        total -= 95;
        iphone13_mini_128 = false;
    }
    showResult();
}
function addiphone13_pro_128() {
    if(!iphone13_pro_128) {
        total += 135;
        iphone13_pro_128 = true;
    }
    else {
        total -= 135;
        iphone13_pro_128 = false;
    }
    showResult();
}
function addiphone13_promax_128() {
    if(!iphone13_promax_128) {
        total += 149;
        iphone13_promax_128 = true;
    }
    else {
        total -= 149;
        iphone13_promax_128 = false;
    }
    showResult();
}

//12
function addiphone12_reg_64() {
    if(!iphone12_reg_64) {
        total += 95;
        iphone12_reg_64 = true;
    }
    else {
        total -= 95;
        iphone12_reg_64 = false;
    }
    showResult();
}
function addiphone12_mini_64() {
    if(!iphone12_mini_64) {
        total += 85;
        iphone12_mini_64 = true;
    }
    else {
        total -= 85;
        iphone12_mini_64 = false;
    }
    showResult();
}

//se
function addiphoneSE3_64() {
    if(!iphoneSE3_64) {
        total += 59;
        iphoneSE3_64 = true;
    }
    else {
        total -= 59;
        iphoneSE3_64 = false;
    }
    showResult();
}
function addiphoneSE3_128() {
    if(!iphoneSE3_128) {
        total += 66;
        iphoneSE3_128 = true;
    }
    else {
        total -= 66;
        iphoneSE3_128 = false;
    }
    showResult();
}

//ipad




function changeToEnglishUI() {
    document.getElementById("info").innerHTML = 
        "|| Total amount of money you will need to spend will be displayed below.<br>|| Use the buttons to add to the total amount.<br>|| Most likely, the products will be grouped together.";
    document.getElementById("head").innerHTML = "How much money will it cost?";
}

function changeToKoreanUI() {
    document.getElementById("info").innerHTML =
        "|| 총 금액은 아랫쪽에 표시 될 것입니다.<br>|| 버튼들을 이용해 총 가격을 측정하세요.<br>|| 제품들은 대부분 분류가 되어 있을 것 입니다.";
    document.getElementById("head").innerHTML = "돈이 얼마나 들까요?";
}

function showResult() {
    document.getElementById("total-cost").innerHTML = total + "만원";
}