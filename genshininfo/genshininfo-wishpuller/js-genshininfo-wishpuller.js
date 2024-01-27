const maxFiveStarHardPity = 90; // 5성 천장
const maxFiveStarSoftPity = 74; // 5성 활률 올라가는 때
const maxFourStarHardPity = 10; // 4성 천장
const maxFourStarSoftPity = 9;

var currFiveStar = 0; // 5성 천장까지의 뽑은 횟수
var keepFiveStar = 0;
var currFourStar = 0; // 4성 천장까지의 뽑은 횟수

var percentFiveStar = 0.6; // 현재 5성 확률
var percentFourStar = 5.1; // 현재 4성 확률
var percentCharacterFourStar = 2.55;
var percentWeaponFourStar = 2.55;

var halfFiveStar = false; // 5성 필업 캐릭터 반천장 되었는지 안돼었는지
var halfFourStar = false; // 4성 픽업 캐릭터 반천장 되었는지 안돼었는지

var choosePickUp = false;

var currNumWishes = 0; // 현재까지 뽑은 횟수
var usedPrimo = currNumWishes * 160; // 현재까지 원석 사용한 량
var usedMoney = usedPrimo * 14.8; 

var randNum = 0; // 확률을 위한 랜덤한 숫자 (0 ~ 1)
var itemText = ""; // 아이템의 이름을 이곳에 저장함

var getFiveStar = false; // 5성을 얻었으면 true
var getFourStar = false; // 4성을 얻었으면 true

var characterPickUpFiveStar = [
    "벤티",
    "클레",
    "타르탈리아",
    "종려",
    "알베도",
    "감우",
    "소",
    "각청",
    "호두",
    "유라",
    "카에데하라 카즈하",
    "카미사토 아야카",
    "요이미야",
    "라이덴 쇼군",
    "산고노미야 코코미",
    "아라타키 이토",
    "신학",
    "야에 미코",
    "카미사토 아야토",
    "야란",
    "타이나리",
    "사이노",
    "닐루",
    "나히다",
    "방랑자",
    "알하이탐",
    "데히야",
    "백출",
    "리니",
    "느비예트",
    "라이오슬리",
    "푸리나",
    "나비야"
];

var characterNormalFiveStar = [];
var characterNormalFiveStarBase = [
    "진",
    "다이루크",
    "모나",
    "각청",
    "치치", // 1.0 size 5
    "타이나리", // 3.0 size 6
    "데히야" // 3.5 size 7
];

var charactersFourStar = [];
var charactersFourStarBase = [
    "엠버",
    "바바라",
    "북두",
    "베넷",
    "행추",
    "중운",
    "피슬",
    "케이야",
    "리사",
    "응광",
    "노엘",
    "레이저",
    "설탕",
    "향릉",
    "행추", // 1.0, size : 15
    "디오나",
    "구라구라꽃(신염)", // 1.1  size : 17
    "로자리아", // 1.4 size : 18
    "연비", // 1.5 size : 19
    "사유", // 2.0 size : 20
    "쿠죠 사라", // 2.1 size : 21
    "토마", // 2.2 size : 22
    "고로", // 2.3 size : 23
    "운근", // 2.4 size : 24
    "쿠키 시노부", // 2.7 size : 25
    "시카노인 헤이조", // 2.8 size : 26
    "도리",
    "콜레이", // 3.0 size : 28
    "캔디스", // 3.1 size : 29
    "레일라", // 3.2 size : 30
    "파루잔", // 3.3 size : 31
    "요요", // 3.4 size : 32
    "미카", // 3.5 size : 33
    "카베", // 3.6 size : 34
    "키라라", // 3.7 size : 35
    "리넷", // 4.0 전반 size : 36
    "프레미네", // 4.0 후반 size : 37
    "샤를로트", // 4.2 size : 38
    "슈브르즈", // 4.3 size : 39
]

var weaponFourStar = [
    "4성 무기"
]

var currPickUpFiveStar = "";
var currPickUpFourStar = [];

function percentFiveStarCalc() {
    if(maxFiveStarSoftPity <= currFiveStar && currFiveStar <= (maxFiveStarHardPity + 15)) {
        percentFiveStar += 6;
    }
    else if(currFiveStar == maxFiveStarHardPity) {
        percentFiveStar = 100;
    }
}

function percentFourStarCalc() {
    if(currFourStar == maxFourStarSoftPity) {
        percentFourStar = 56.1;
    }
    else if(currFourStar == maxFourStarHardPity) {
        percentFourStar = 100;
    }
}

function getRandomNum(min, max) {
    return Math.random() * max + min;
}

function newWishOne() {
    if(choosePickUp == false) {
        window.alert("픽업 배너를 선택해주세요!");
        return;
    }

    currNumWishes += 1;
    currFourStar += 1;
    currFiveStar += 1;
    keepFiveStar += 1;
    randNum = getRandomNum(0, 100);
    // randNum = randNum.toFixed(1);
    randNum = Math.ceil(randNum);

    percentFiveStarCalc();
    percentFourStarCalc();

    if(randNum <= percentFiveStar) { // 5성 얻는 곳
        getFiveStar = true;
        if(halfFiveStar == true) { // 확정으로 픽업 5성 캐릭터 얻음
            itemText = currFiveStar + "번 뽑아서 5성 픽업 캐릭터인 <u>" + currPickUpFiveStar + "</u>";
            halfFiveStar = false;
        }
        else {
            // 픽업 5성이거나 상시 5성 중에 하나 얻음
            randNum = Math.floor(getRandomNum(1,2));
            if(randNum == 1) { // 픽업 5성 캐릭이 나오는 경우
                itemText = currFiveStar + "번 뽑아서 5성 픽업 캐릭터인 <u>" + currPickUpFiveStar + "</u>";
            }
            else { // 상시 5성 캐릭이 나오는 경우
                randNum = Math.floor(getRandomNum(0, characterNormalFiveStar.length));
                itemText = currFiveStar + "번 뽑아서 픽뚫당하여 5성 상시 캐릭터인 <u>" + characterNormalFiveStar[randNum] + "</u>";
                halfFiveStar = true;
            }
        }
    }
    else if(randNum <= percentFourStar) { // 4성 얻는 곳
        getFourStar = true;
        if(halfFourStar == true) { // 확정으로 픽업 4성 캐릭 중 하나 얻음
            randNum = Math.floor(getRandomNum(0, currPickUpFourStar.length));
            itemText = "픽업 4성 캐릭터 <u>" + currPickUpFourStar[randNum] + "</u>";
            halfFourStar = false;
        }
        else { // 확률에 따라 4성 무기, 랜덤 4성 캐릭, 또는 픽업 4성 캐릭을 얻음
            randNum = Math.floor(getRandomNum(1,2));
            if(randNum == 1) { // 픽업 4성 캐릭이 나오는 경우
                randNum = Math.floor(getRandomNum(0, currPickUpFourStar.length));
                itemText = "픽업 4성 캐릭터 <u>" + currPickUpFourStar[randNum] + "</u>";
            }
            else { // 확률에 따라 4성 무기 또는 랜덤 4성 캐릭을 얻음
                randNum = Math.floor(getRandomNum(1,2));
                if(randNum == 1) { // 랜덤 4성 캐릭이 나오는 경우
                    randNum = Math.floor(getRandomNum(0, charactersFourStar.length));
                    itemText = "랜덤 4성 캐릭터 <u>" + charactersFourStar[randNum] + "</u>";
                }
                else { // 4성 무기가 나오는 경우
                    itemText = "<u>4성 무기</u>";
                }
                halfFourStar = true;
            }
        }
    }
    else {
        itemText = "쓰레기 (3성 무기)";
    }

    endFunction();
    printInfo(itemText);
}

function newWishTen() {
    if(choosePickUp == false) {
        window.alert("픽업 배너를 선택해주세요!");
        return;
    }

    for(let cnt = 0; cnt < 10; cnt++) {
        newWishOne();
    }
}

function endFunction() {
    if(getFiveStar == true) {
        getFiveStar = false;
        currFiveStar = 0;
        percentFiveStar = 0.6;
    }
    if(getFourStar == true) {
        getFourStar = false;
        currFourStar = 0;
        percentFourStar = 5.1;
    }
    if(maxFourStarHardPity - currFourStar == 0) {
        currFourStar--;
    }
}

function printInfo(item) {
    var str = document.getElementById("pullbox").innerHTML;
    str = item + " 획득<br>" + str;
    document.getElementById("pullbox").innerHTML = str;

    document.getElementById("pullcount").innerHTML = "총 기원 횟수 : " + currNumWishes + "회";
    usedPrimo = currNumWishes * 160;
    document.getElementById("primocount").innerHTML = "총 사용한 원석 개수 : " + usedPrimo + "개";
    usedMoney = usedPrimo * 14.8;
    document.getElementById("moneycount").innerHTML = "총 사용한 돈 : " + usedMoney + "원";
    document.getElementById("fivestarpitty").innerHTML = "5성 천장까지의 남은 횟수 : " + (maxFiveStarHardPity - currFiveStar) + "회";
    document.getElementById("fourstarpitty").innerHTML = "4성 천장까지의 남은 횟수 : " + (maxFourStarHardPity - currFourStar) + "회";
    
}

function setNames(date) {
    document.getElementById("dateofevent").innerHTML = "픽업 기간 : " + date;
    document.getElementById("fivestarname").innerHTML = "5성 픽업 캐릭터 : " + currPickUpFiveStar;
    document.getElementById("fourstarnames").innerHTML = "4성 픽업 캐릭터 : " + currPickUpFourStar[0] + ", " + currPickUpFourStar[1] + ", " + currPickUpFourStar[2];
}

/*=== banner functions ===*/
function NameVersionTemplate() {
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7; // change according to version
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 39; // change according to version

    currPickUpFiveStar = "5성픽업캐릭";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("4성픽업캐릭1");
    currPickUpFourStar.push("4성픽업캐릭2");
    currPickUpFourStar.push("4성픽업캐릭3");

    window.alert("버전 전/후반 픽업캐릭 픽업으로 설정되었습니다!");
}


function Raiden43() { // 4.3 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 39;

    currPickUpFiveStar = "라이덴 쇼군";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("베넷");
    currPickUpFourStar.push("슈브르즈");
    currPickUpFourStar.push("쿠죠 사라");

    setNames("2024년 1월 9일 ~ 2024년 1월 30일");

    window.alert("4.3 후반 라이덴 쇼군 픽업으로 설정되었습니다!");
}
function Yoimiya43() { // 4.3 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 39;

    currPickUpFiveStar = "요이미야";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("베넷");
    currPickUpFourStar.push("슈브르즈");
    currPickUpFourStar.push("쿠죠 사라");

    setNames("2024년 1월 9일 ~ 2024년 1월 30일");

    window.alert("4.3 후반 요이미야 픽업으로 설정되었습니다!");
}
function Navia43() { // 4.3 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 38;

    currPickUpFiveStar = "나비아";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("캔디스");
    currPickUpFourStar.push("로자리아");
    currPickUpFourStar.push("설탕");

    setNames("2023년 12월 20일 ~ 2024년 1월 9일");

    window.alert("4.3 전반 나비아 픽업으로 설정되었습니다!");
}
function Ayaka43() { // 4.3 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 38;

    currPickUpFiveStar = "카미사토 아야카";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("캔디스");
    currPickUpFourStar.push("로자리아");
    currPickUpFourStar.push("설탕");

    setNames("2023년 12월 20일 ~ 2024년 1월 9일");

    window.alert("4.3 전반 카미사토 아야카 픽업으로 설정되었습니다!");
}
function Cyno42() { // 4.2 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 38;

    currPickUpFiveStar = "사이노";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("키라라");
    currPickUpFourStar.push("쿠키 시노부");
    currPickUpFourStar.push("향릉");

    setNames("2023년 11월 28일 ~ 2023년 12월 19일");

    window.alert("4.2 후반 사이노 픽업으로 설정되었습니다!");
}
function Ayato42() { // 4.2 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 38;

    currPickUpFiveStar = "카미사토 아야토";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("키라라");
    currPickUpFourStar.push("쿠키 시노부");
    currPickUpFourStar.push("향릉");

    setNames("2023년 11월 28일 ~ 2023년 12월 19일");

    window.alert("4.2 후반 카미사토 아야토 픽업으로 설정되었습니다!");
}
function Furina42() { // 4.2 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 38;

    currPickUpFiveStar = "푸리나";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("샤를로트");
    currPickUpFourStar.push("콜레이");
    currPickUpFourStar.push("북두");

    setNames("2023년 11월 8일 ~ 2023년 11월 28일");

    window.alert("4.2 전반 푸리나 픽업으로 설정되었습니다!");
}
function Baizhu42() { // 4.2 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 38;

    currPickUpFiveStar = "백출";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("샤를로트");
    currPickUpFourStar.push("콜레이");
    currPickUpFourStar.push("북두");

    setNames("2023년 11월 8일 ~ 2023년 11월 28일");

    window.alert("4.2 전반 백출 픽업으로 설정되었습니다!");
}
function Wriothesley41() { // 4.1 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 37;

    currPickUpFiveStar = "라이오슬리";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("중운");
    currPickUpFourStar.push("토마");
    currPickUpFourStar.push("도리");

    setNames("2023년 10월 17일 ~ 2023년 11월 7일");

    window.alert("4.1 후반 라이오슬리 픽업으로 설정되었습니다!");
}
function Venti41() { // 4.1 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 37;

    currPickUpFiveStar = "벤티";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("중운");
    currPickUpFourStar.push("토마");
    currPickUpFourStar.push("도리");

    setNames("2023년 10월 17일 ~ 2023년 11월 7일");

    window.alert("4.1 후반 벤티 픽업으로 설정되었습니다!");
}
function Hutao41() { // 4.1 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 37;

    currPickUpFiveStar = "호두";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("행추");
    currPickUpFourStar.push("피슬");
    currPickUpFourStar.push("디오나");

    setNames("2023년 9월 27일 ~ 2023년 10월 17일");

    window.alert("4.1 전반 호두 픽업으로 설정되었습니다!");
}
function Neuvillette41() { // 4.1 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 37;

    currPickUpFiveStar = "느비예트";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("행추");
    currPickUpFourStar.push("피슬");
    currPickUpFourStar.push("디오나");

    setNames("2023년 9월 27일 ~ 2023년 10월 17일");

    window.alert("4.1 전반 느비예트 픽업으로 설정되었습니다!");
}
function Zhongli40() { // 4.0 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 37;

    currPickUpFiveStar = "종려";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("프레미네");
    currPickUpFourStar.push("사유");
    currPickUpFourStar.push("노엘");

    setNames("2023년 9월 5일 ~ 2023년 9월 26일");

    window.alert("4.0 후반 종려 픽업으로 설정되었습니다!");
}
function Tartaglia40() { // 4.0 후반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 37;

    currPickUpFiveStar = "타르탈리아";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("프레미네");
    currPickUpFourStar.push("사유");
    currPickUpFourStar.push("노엘");

    setNames("2023년 9월 5일 ~ 2023년 9월 26일");

    window.alert("4.0 후반 타르탈리아 픽업으로 설정되었습니다!");
}
function Yelan40() { // 4.0 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 36;

    currPickUpFiveStar = "야란";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("리넷");
    currPickUpFourStar.push("베넷");
    currPickUpFourStar.push("바바라");

    setNames("2023년 8월 16일 ~ 2023년 9월 5일");

    window.alert("4.0 전반 야란 픽업으로 설정되었습니다!");
}
function Lyney40() { // 4.0 전반
    choosePickUp = true;

    characterNormalFiveStar = characterNormalFiveStarBase;
    characterNormalFiveStar.length = 7;
    charactersFourStar = charactersFourStarBase;
    charactersFourStar.length = 36;

    currPickUpFiveStar = "리니";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("리넷");
    currPickUpFourStar.push("베넷");
    currPickUpFourStar.push("바바라");

    setNames("2023년 8월 16일 ~ 2023년 9월 5일");

    window.alert("4.0 전반 리니 픽업으로 설정되었습니다!");
}


/*=== toggling divs ===*/
/**
 * Toggles a div to be shown or hidden
 * @param {*} divID The id of the div or span that will be hidden or shown
 * @param {*} linkID The id of the link that will be clicked to hide or show the div or span
 * @param {*} linkName The name of the link that will be clicked on
 */
function toggleDiv(divID, linkID, linkName) {
    var div = document.getElementById(divID);
    var link = document.getElementById(linkID);

    if(div.style.display == 'none') {
        div.style.display = '';
        link.innerText = '- ' + linkName;
    } else {
        div.style.display = 'none';
        link.innerText = '+ ' + linkName;
    }
}

