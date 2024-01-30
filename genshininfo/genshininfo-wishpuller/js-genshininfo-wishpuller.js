// Character name variables to text
{
    // five star event text
    var venti = "벤티";
    var klee = "클레";
    var tartaglia = "타르탈리아";
    var zhongli = "종려";
    var albedo = "알베도";
    var ganyu = "감우";
    var xiao = "소";
    // var keqing = "각청";
    var hutao = "호두";
    var eula = "유라";
    var kazuha = "카에데하라 카즈하";
    var ayaka = "카미사토 아야카";
    var yoimiya = "요이미야";
    var raiden = "라이덴 쇼군";
    var kokomi = "산고노미야 코코미";
    var itto = "아라타키 이토";
    var shenhe = "신학";
    var miko = "야에 미코";
    var ayato = "카미사토 아야토";
    var yelan = "야란";
    // var tighnari = "타이나리";
    var cyno = "사이노";
    var nilou = "닐루";
    var nahida = "나히다";
    var wanderer = "방랑자";
    var alhaitham = "알하이탐";
    // var dehya = "데히야";
    var baizhu = "백출";
    var lyney = "리니";
    var neuvillette = "느비예트";
    var wriothesley = "라이오슬리";
    var furina = "푸리나";
    var navia = "나비야";
    var xianyun = "한운";

    // five star standard text
    var jean = "진";
    var diluc = "다이루크";
    var mona = "모나";
    var keqing = "각청";
    var qiqi = "치치";
    var tighnari = "타이나리";
    var dehya = "데히야";

    // 4 stars text
    var amber = "엠버";
    var barbara = "바바라";
    var beidou = "북두";
    var bennett = "베넷";
    var chongyun = "중운";
    var fischl = "피슬";
    var kaeya = "케이야";
    var lisa = "리사";
    var ningguang = "응광";
    var noel = "노엘";
    var razer = "레이저";
    var sucrose = "설탕";
    var xiangling = "향릉";
    var xingqiu = "행추";
    var diona = "디오나";
    var xinyan = "구라구라꽃(신염)";
    var rosaria = "로자리아";
    var yanfei = "연비";
    var sayu = "사유";
    var sara = "쿠죠 사라";
    var thoma = "토마";
    var gorou = "고로";
    var yunjin = "운근";
    var kuki = "쿠키 시노부";
    var heizou = "시카노인 헤이조";
    var dori = "도리";
    var collei = "콜레이";
    var candace = "캔디스";
    var layla = "레일라";
    var faruzan = "파루잔";
    var yaoyao = "요요";
    var mika = "미카";
    var kaveh = "카베";
    var kirara = "키라라";
    var lynette = "리넷";
    var freminet = "프레미네";
    var charlotte = "샤를로트";
    var chevreuse = "슈브르즈";
    var gaming = "게이밍(가명)";

    var trash3 = "쓰레기 (3성 무기)";
    var trash4 = "쓰는 쓰레기 (4성 무기)";
}

// Dictionary for how many times a character was pulled
var characterPullCnt = {
    [venti]: -1,
    [klee]: -1,
    [tartaglia]: -1,
    [zhongli]: -1,
    [albedo]: -1,
    [ganyu]: -1,
    [xiao]: -1,
    [hutao]: -1,
    [eula]: -1,
    [kazuha]: -1,
    [ayaka]: -1,
    [yoimiya]: -1,
    [raiden]: -1,
    [kokomi]: -1,
    [itto]: -1,
    [shenhe]: -1,
    [miko]: -1,
    [ayato]: -1,
    [yelan]: -1,
    [cyno]: -1,
    [nilou]: -1,
    [nahida]: -1,
    [wanderer]: -1,
    [alhaitham]: -1,
    [baizhu]: -1,
    [lyney]: -1,
    [neuvillette]: -1,
    [wriothesley]: -1,
    [furina]: -1,
    [navia]: -1,
    [xianyun]: -1,

    [jean]: -1,
    [diluc]: -1,
    [mona]: -1,
    [keqing]: -1,
    [qiqi]: -1,
    [tighnari]: -1,
    [dehya]: -1,
    
    [amber]: -1,
    [barbara]: -1,
    [beidou]: -1,
    [bennett]: -1,
    [chongyun]: -1,
    [fischl]: -1,
    [kaeya]: -1,
    [lisa]: -1,
    [ningguang]: -1,
    [noel]: -1,
    [razer]: -1,
    [sucrose]: -1,
    [xiangling]: -1,
    [xingqiu]: -1,
    [diona]: -1,
    [xinyan]: -1,
    [rosaria]: -1,
    [yanfei]: -1,
    [sayu]: -1,
    [sara]: -1,
    [thoma]: -1,
    [gorou]: -1,
    [yunjin]: -1,
    [kuki]: -1,
    [heizou]: -1,
    [dori]: -1,
    [collei]: -1,
    [candace]: -1,
    [layla]: -1,
    [faruzan]: -1,
    [yaoyao]: -1,
    [mika]: -1,
    [kaveh]: -1,
    [kirara]: -1,
    [lynette]: -1,
    [freminet]: -1,
    [charlotte]: -1,
    [chevreuse]: -1,
    [gaming]: -1,

    [trash4]: -1,
    [trash3]: -1
};

// var characterPullCnt = {
//     [venti]: -1,
//     [klee]: -1,
//     [tartaglia]: -1,
//     [zhongli]: -1,
//     [albedo]: -1,
//     ganyu: -1,
//     xiao: -1,
//     hutao: -1,
//     eula: -1,
//     kazuha: -1,
//     ayaka: -1,
//     yoimiya: -1,
//     raiden: -1,
//     kokomi: -1,
//     itto: -1,
//     shenhe: -1,
//     miko: -1,
//     ayato: -1,
//     yelan: -1,
//     cyno: -1,
//     nilou: -1,
//     nahida: -1,
//     wanderer: -1,
//     alhaitham: -1,
//     baizhu: -1,
//     lyney: -1,
//     neuvillette: -1,
//     wriothesley: -1,
//     furina: -1,
//     navia: -1,
//     xianyun: -1,

//     jean: -1,
//     diluc: -1,
//     mona: -1,
//     keqing: -1,
//     qiqi: -1,
//     tighnari: -1,
//     dehya: -1,

//     amber: -1,
//     barbara: -1,
//     beidou: -1,
//     bennett: -1,
//     chongyun: -1,
//     fischl: -1,
//     kaeya: -1,
//     lisa: -1,
//     ningguang: -1,
//     noel: -1,
//     razer: -1,
//     sucrose: -1,
//     xiangling: -1,
//     xingqiu: -1,
//     diona: -1,
//     xinyan: -1,
//     rosaria: -1,
//     yanfei: -1,
//     sayu: -1,
//     sara: -1,
//     thoma: -1,
//     gorou: -1,
//     yunjin: -1,
//     kuki: -1,
//     heizou: -1,
//     dori: -1,
//     collei: -1,
//     candace: -1,
//     layla: -1,
//     faruzan: -1,
//     yaoyao: -1,
//     mika: -1,
//     kaveh: -1,
//     kirara: -1,
//     lynette: -1,
//     freminet: -1,
//     charlotte: -1,
//     chevreuse: -1,
//     gaming: -1,

//     [trash3]: -1,
//     [trash4]: -1
// };


// epitome invocation banner // 무기 뽑기

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

var characterNormalFiveStar = [];
var characterNormalFiveStarBase = [
    jean,
    diluc,
    mona,
    keqing,
    qiqi, // 1.0 size 5
    tighnari, // 3.0 size 6
    dehya // 3.5 size 7
];

var charactersFourStar = [];
var charactersFourStarBase = [
    amber,
    barbara,
    beidou,
    bennett,
    chongyun,
    fischl,
    kaeya,
    lisa,
    ningguang,
    noel,
    razer,
    sucrose,
    xiangling,
    xingqiu, // 1.0, size : 15
    diona,
    xinyan, // 1.1  size : 17
    rosaria, // 1.4 size : 18
    yanfei, // 1.5 size : 19
    sayu, // 2.0 size : 20
    sara, // 2.1 size : 21
    thoma, // 2.2 size : 22
    gorou, // 2.3 size : 23
    yunjin, // 2.4 size : 24
    kuki, // 2.7 size : 25
    heizou, // 2.8 size : 26
    dori,
    collei, // 3.0 size : 28
    candace, // 3.1 size : 29
    layla, // 3.2 size : 30
    faruzan, // 3.3 size : 31
    yaoyao, // 3.4 size : 32
    mika, // 3.5 size : 33
    kaveh, // 3.6 size : 34
    kirara, // 3.7 size : 35
    lynette, // 4.0 전반 size : 36
    freminet, // 4.0 후반 size : 37
    charlotte, // 4.2 size : 38
    chevreuse, // 4.3 size : 39
    gaming // 4.4 전반 size : 40
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
            characterPullCnt[currPickUpFiveStar] += 1;
            halfFiveStar = false;
        }
        else {
            // 픽업 5성이거나 상시 5성 중에 하나 얻음
            randNum = Math.floor(getRandomNum(1,2));
            if(randNum == 1) { // 픽업 5성 캐릭이 나오는 경우
                itemText = currFiveStar + "번 뽑아서 5성 픽업 캐릭터인 <u>" + currPickUpFiveStar + "</u>";
                characterPullCnt[currPickUpFiveStar] += 1;
            }
            else { // 상시 5성 캐릭이 나오는 경우
                randNum = Math.floor(getRandomNum(0, characterNormalFiveStar.length));
                let temp = characterNormalFiveStar[randNum];
                itemText = currFiveStar + "번 뽑아서 픽뚫당하여 5성 상시 캐릭터인 <u>" + temp + "</u>";
                characterPullCnt[temp] += 1;
                halfFiveStar = true;
            }
        }
    }
    else if(randNum <= percentFourStar) { // 4성 얻는 곳
        getFourStar = true;
        if(halfFourStar == true) { // 확정으로 픽업 4성 캐릭 중 하나 얻음
            randNum = Math.floor(getRandomNum(0, currPickUpFourStar.length));
            let temp = currPickUpFourStar[randNum];
            itemText = "픽업 4성 캐릭터 <u>" + temp + "</u>";
            characterPullCnt[temp] += 1;
            halfFourStar = false;
        }
        else { // 확률에 따라 4성 무기, 랜덤 4성 캐릭, 또는 픽업 4성 캐릭을 얻음
            randNum = Math.floor(getRandomNum(1,2));
            if(randNum == 1) { // 픽업 4성 캐릭이 나오는 경우
                randNum = Math.floor(getRandomNum(0, currPickUpFourStar.length));
                let temp = currPickUpFourStar[randNum];
                itemText = "픽업 4성 캐릭터 <u>" + temp + "</u>";
                characterPullCnt[temp] += 1;
            }
            else { // 확률에 따라 4성 무기 또는 랜덤 4성 캐릭을 얻음
                randNum = Math.floor(getRandomNum(1,2));
                if(randNum == 1) { // 랜덤 4성 캐릭이 나오는 경우
                    randNum = Math.floor(getRandomNum(0, charactersFourStar.length));
                    let temp = charactersFourStar[randNum];
                    itemText = "랜덤 4성 캐릭터 <u>" + temp + "</u>";
                    characterPullCnt[temp] += 1;
                }
                else { // 4성 무기가 나오는 경우
                    itemText = "<u>" + trash4 + "</u>";
                    characterPullCnt[trash4] += 1;
                }
                halfFourStar = true;
            }
        }
    }
    else {
        itemText = trash3;
        characterPullCnt[trash3] += 1;
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

    printCharacterPullCount();
}
function printCharacterPullCount() {
    var str = "";
    for(var key in characterPullCnt) {
        if(key === trash3 || key === trash4) {
            if(characterPullCnt[key] >= 0) {
                str += key + " : " + (characterPullCnt[key] + 1) + "개<br>";
            }
        }
        else if(characterPullCnt[key] >= 0) {
            str += key + " : " + characterPullCnt[key] + "돌<br>";
        }
    }
    document.getElementById("pull-characters").innerHTML = str;
}

function setNames(date) {
    document.getElementById("dateofevent").innerHTML = "픽업 기간 : " + date;
    document.getElementById("fivestarname").innerHTML = "5성 픽업 캐릭터 : " + currPickUpFiveStar;
    document.getElementById("fourstarnames").innerHTML = "4성 픽업 캐릭터 : " + currPickUpFourStar[0] + ", " + currPickUpFourStar[1] + ", " + currPickUpFourStar[2];
}

function addIntoFourStarArray() {
    charactersFourStar.length = 0;
    for(var i = 0; i < charactersFourStarBase.length; i++) {
        charactersFourStar.push(charactersFourStarBase[i]);
    }
}
function addIntoFiveStarArray() {
    characterNormalFiveStar.length = 0;
    for(var i = 0; i < characterNormalFiveStarBase.length; i++) {
        characterNormalFiveStar.push(characterNormalFiveStarBase[i]);
    }
}

/*=== banner functions ===*/
function NameVersionTemplate() {
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7; // change according to version
    addIntoFourStarArray();
    charactersFourStar.length = 40; // change according to version

    currPickUpFiveStar = "5성픽업캐릭";
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push("4성픽업캐릭1");
    currPickUpFourStar.push("4성픽업캐릭2");
    currPickUpFourStar.push("4성픽업캐릭3");

    window.alert("버전 전/후반 픽업캐릭 픽업으로 설정되었습니다!");
}

function Nahida44() { // 4.4 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 40;

    currPickUpFiveStar = nahida;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(noel);
    currPickUpFourStar.push(faruzan);
    currPickUpFourStar.push(gaming);

    setNames("2024년 1월 31일 ~ 2024년 2월 20일");

    window.alert("4.4 전반 " + nahida + " 픽업으로 설정되었습니다!");
}
function Xianyun44() { // 4.4 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 40;

    currPickUpFiveStar = xianyun;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(noel);
    currPickUpFourStar.push(faruzan);
    currPickUpFourStar.push(gaming);

    setNames("2024년 1월 31일 ~ 2024년 2월 20일");

    window.alert("4.4 전반 " + xianyun + " 픽업으로 설정되었습니다!");
}
function Raiden43() { // 4.3 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 39;

    currPickUpFiveStar = raiden;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(bennett);
    currPickUpFourStar.push(chevreuse);
    currPickUpFourStar.push(sara);

    setNames("2024년 1월 9일 ~ 2024년 1월 30일");

    window.alert("4.3 후반 " + raiden + " 픽업으로 설정되었습니다!");
}
function Yoimiya43() { // 4.3 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 39;

    currPickUpFiveStar = yoimiya;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(bennett);
    currPickUpFourStar.push(chevreuse);
    currPickUpFourStar.push(sara);

    setNames("2024년 1월 9일 ~ 2024년 1월 30일");

    window.alert("4.3 후반 " + yoimiya + " 픽업으로 설정되었습니다!");
}
function Navia43() { // 4.3 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 38;

    currPickUpFiveStar = navia;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(candace);
    currPickUpFourStar.push(rosaria);
    currPickUpFourStar.push(sucrose);

    setNames("2023년 12월 20일 ~ 2024년 1월 9일");

    window.alert("4.3 전반 " + navia + " 픽업으로 설정되었습니다!");
}
function Ayaka43() { // 4.3 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 38;

    currPickUpFiveStar = ayaka;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(candace);
    currPickUpFourStar.push(rosaria);
    currPickUpFourStar.push(sucrose);

    setNames("2023년 12월 20일 ~ 2024년 1월 9일");

    window.alert("4.3 전반 " + ayaka + " 픽업으로 설정되었습니다!");
}
function Cyno42() { // 4.2 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 38;

    currPickUpFiveStar = cyno;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(kirara);
    currPickUpFourStar.push(kuki);
    currPickUpFourStar.push(xiangling);

    setNames("2023년 11월 28일 ~ 2023년 12월 19일");

    window.alert("4.2 후반 " + cyno + " 픽업으로 설정되었습니다!");
}
function Ayato42() { // 4.2 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 38;

    currPickUpFiveStar = ayato;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(kirara);
    currPickUpFourStar.push(kuki);
    currPickUpFourStar.push(xiangling);

    setNames("2023년 11월 28일 ~ 2023년 12월 19일");

    window.alert("4.2 후반 " + ayato + " 픽업으로 설정되었습니다!");
}
function Furina42() { // 4.2 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 38;

    currPickUpFiveStar = furina;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(charlotte);
    currPickUpFourStar.push(collei);
    currPickUpFourStar.push(beidou);

    setNames("2023년 11월 8일 ~ 2023년 11월 28일");

    window.alert("4.2 전반 " + furina + " 픽업으로 설정되었습니다!");
}
function Baizhu42() { // 4.2 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 38;

    currPickUpFiveStar = baizhu;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(charlotte);
    currPickUpFourStar.push(collei);
    currPickUpFourStar.push(beidou);

    setNames("2023년 11월 8일 ~ 2023년 11월 28일");

    window.alert("4.2 전반 " + baizhu + " 픽업으로 설정되었습니다!");
}
function Wriothesley41() { // 4.1 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 37;

    currPickUpFiveStar = wriothesley;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(chongyun);
    currPickUpFourStar.push(thoma);
    currPickUpFourStar.push(dori);

    setNames("2023년 10월 17일 ~ 2023년 11월 7일");

    window.alert("4.1 후반 " + wriothesley + " 픽업으로 설정되었습니다!");
}
function Venti41() { // 4.1 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 37;

    currPickUpFiveStar = venti;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(chongyun);
    currPickUpFourStar.push(thoma);
    currPickUpFourStar.push(dori);

    setNames("2023년 10월 17일 ~ 2023년 11월 7일");

    window.alert("4.1 후반 " + venti + " 픽업으로 설정되었습니다!");
}
function Hutao41() { // 4.1 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 37;

    currPickUpFiveStar = hutao;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(xingqiu);
    currPickUpFourStar.push(fischl);
    currPickUpFourStar.push(diona);

    setNames("2023년 9월 27일 ~ 2023년 10월 17일");

    window.alert("4.1 전반 " + hutao + " 픽업으로 설정되었습니다!");
}
function Neuvillette41() { // 4.1 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 37;

    currPickUpFiveStar = neuvillette;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(xingqiu);
    currPickUpFourStar.push(fischl);
    currPickUpFourStar.push(diona);

    setNames("2023년 9월 27일 ~ 2023년 10월 17일");

    window.alert("4.1 전반 " + neuvillette + " 픽업으로 설정되었습니다!");
}
function Zhongli40() { // 4.0 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 37;

    currPickUpFiveStar = zhongli;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(freminet);
    currPickUpFourStar.push(sayu);
    currPickUpFourStar.push(noel);

    setNames("2023년 9월 5일 ~ 2023년 9월 26일");

    window.alert("4.0 후반 " + zhongli + " 픽업으로 설정되었습니다!");
}
function Tartaglia40() { // 4.0 후반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 37;

    currPickUpFiveStar = tartaglia;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(freminet);
    currPickUpFourStar.push(sayu);
    currPickUpFourStar.push(noel);

    setNames("2023년 9월 5일 ~ 2023년 9월 26일");

    window.alert("4.0 후반 " + tartaglia + " 픽업으로 설정되었습니다!");
}
function Yelan40() { // 4.0 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 36;

    currPickUpFiveStar = yelan;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(lynette);
    currPickUpFourStar.push(bennett);
    currPickUpFourStar.push(barbara);

    setNames("2023년 8월 16일 ~ 2023년 9월 5일");

    window.alert("4.0 전반 " + yelan + " 픽업으로 설정되었습니다!");
}
function Lyney40() { // 4.0 전반
    choosePickUp = true;

    addIntoFiveStarArray();
    characterNormalFiveStar.length = 7;
    addIntoFourStarArray();
    charactersFourStar.length = 36;

    currPickUpFiveStar = lyney;
    currPickUpFourStar.length = 0;
    currPickUpFourStar.push(lynette);
    currPickUpFourStar.push(bennett);
    currPickUpFourStar.push(barbara);

    setNames("2023년 8월 16일 ~ 2023년 9월 5일");

    window.alert("4.0 전반 " + lyney + " 픽업으로 설정되었습니다!");
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

