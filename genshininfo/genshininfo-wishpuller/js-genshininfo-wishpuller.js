const maxFiveStarHardPity = 90; // 5성 천장
const maxFiveStarSoftPity = 74; // 5성 활률 올라가는 때
const maxFourStarHardPity = 10; // 4성 천장(?)
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

var currNumWishes = 0; // 현재까지 뽑은 횟수
var usedPrimo = currNumWishes * 1600; // 현재까지 원석 사용한 량

var randNum = 0; // 확률을 위한 랜덤한 숫자 (0 ~ 1)
var itemText = ""; // 아이템의 이름을 이곳에 저장함

var getFiveStar = false; // 5성을 얻었으면 true
var getFourStar = false; // 4성을 얻었으면 true

var characterNormalFiveStar = [
    "진",
    "다이루크",
    "모나",
    "각청",
    "치치",
    "타이나리",
    "데히야"
];

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
var charactersFourStar = [
    "베넷",
    "설탕",
    "행추",
    "향릉",
    "연비",
    "시노부",
    "디오나",
    "로자리아",
    "피슬",
    "운근",
    "요요",
    "고로",
    "쿠죠 사라",
    "파루잔",
    "레일라",
    "레이저",
    "북두",
    "미카",
    "토마",
    "콜레이",
    "카베",
    "케이야",
    "노엘",
    "바바라",
    "응광",
    "중운",
    "사유",
    "사카노인 헤이조",
    "도리",
    "캔디스",
    "엠버",
    "리사",
    "구라구라꽃 (신염)",
    "키라라",
    "리넷",
    "프레미네",
    "샤를로트",
    "슈브르즈"
];
var weaponFourStar = [
    "4성 무기"
]

var currPickUpFiveStar = "라이덴 쇼군";
var currPickUpFourStar = [
    "베넷",
    "슈브르즈",
    "쿠죠 사라"
];



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
    currNumWishes += 1;
    currFourStar += 1;
    currFiveStar += 1;
    keepFiveStar += 1;
    randNum = getRandomNum(0, 100);

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
}

function printInfo(item) {
    var str = document.getElementById("pullbox").innerHTML;
    str = item + " 획득<br>" + str;
    document.getElementById("pullbox").innerHTML = str;

    document.getElementById("pullcount").innerHTML = "총 기원 횟수 : " + currNumWishes;
    document.getElementById("fivestarpitty").innerHTML = "5성 천장까지의 남은 횟수 : " + (maxFiveStarHardPity - currFiveStar);
    document.getElementById("fourstarpitty").innerHTML = "4성 천장까지의 남은 횟수 : " + (maxFourStarHardPity - currFourStar);
    
}

