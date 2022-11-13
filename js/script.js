let comApStat = document.querySelector("#com-ap-stat");
let comHcStat = document.querySelector("#com-hc-stat");
let comLsStat = document.querySelector("#com-ls-stat");
comApCount = 1
comHcCount = 4
comLsCount = 0
comLifepoints = 20
comApStat.innerHTML = comApCount;
comHcStat.innerHTML = comHcCount;
comLsStat.innerHTML = comLsCount;
let comSuper = document.querySelector("#com-super");
comSuper.style.display = "none";
let userSuper = document.querySelector("#user-super");
userSuper.style.display = "none";
let comSpecialBtn = document.querySelector("#com-special-button");
//com attreibute declaration and buttons
let comAttrBtn1 = document.querySelector("#com-attr-button1");
comAttrBtn1.style.display = "none";
comAttrBtn1.addEventListener("click", addComApStatBtn);
let comAttrBtn2 = document.querySelector("#com-attr-button2");
comAttrBtn2.style.display = "none";
comAttrBtn2.addEventListener("click", addComHcStatBtn);
let comAttrBtn3 = document.querySelector("#com-attr-button3");
comAttrBtn3.style.display = "none";
comAttrBtn3.addEventListener("click", addComLsStatBtn);

let userActionBtn = document.querySelector("#user-turn-result");
userActionBtn.addEventListener("click", userTurnAction);


function addComApStatBtn(){
    comApCount++;
    comApStat.innerHTML = comApCount;
    comAttrBtn1.style.display = "none";
    comAttrBtn2.style.display = "none";
    comAttrBtn3.style.display = "none";
    comDoneBtn.removeAttribute("disabled", "");
}
function addComHcStatBtn(){
    comHcCount++;
    comHcStat.innerHTML = comHcCount;
    comAttrBtn1.style.display = "none";
    comAttrBtn2.style.display = "none";
    comAttrBtn3.style.display = "none";
    comDoneBtn.removeAttribute("disabled", "");
}
function addComLsStatBtn(){
    comLsCount++;
    comLsStat.innerHTML = comLsCount;
    comAttrBtn1.style.display = "none";
    comAttrBtn2.style.display = "none";
    comAttrBtn3.style.display = "none";
    comDoneBtn.removeAttribute("disabled", "");
}



let comDoneBtn = document.querySelector("#done-button-com");
comDoneBtn.addEventListener("click", comDoneAction);
comDoneBtn.setAttribute("disabled", "");
function comDoneAction () {


    document.querySelector("#display").innerHTML = "";
    document.querySelector("#display2").innerHTML = "";
    document.querySelector("#display3").innerHTML = "";
    turnDie.innerHTML = "";
    comDoneBtn.setAttribute("disabled", "");
    
    userTurnResult.removeAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");
    comActionBtn.setAttribute("disabled", "");

}

let comCount = 20;
comCount = parseInt(document.querySelector("#com-life").textContent);
let userCount =20;
userCount = parseInt(document.querySelector("#user-life").textContent);

let userApStat = document.querySelector("#user-ap-stat");
let userHcStat = document.querySelector("#user-hc-stat");
let userLsStat = document.querySelector("#user-ls-stat");
userApCount = 1
userHcCount = 5
userLsCount = 0
userLifepoints = 20
userApStat.innerHTML = userApCount;
userHcStat.innerHTML = userHcCount;
userLsStat.innerHTML = userLsCount;



let turnDie = document.querySelector("#die-result");

let comActionBtn = document.querySelector("#com-turn-result");
comActionBtn.addEventListener("click", comTurnAction);
function comTurnAction() {
    let Die = Math.ceil(Math.random(1) * 20)
    console.log(Die);
    turnDie.innerHTML = "Die result " + Die;
   
    
    let x = parseInt(comHcStat.textContent);
    if (Die <= x) {
        comWin()
    } else {
        comLose()
    }
    let lsDie = Math.ceil(Math.random(1) * 20);
    console.log("ls= " + lsDie);
    let y = parseInt(comLsStat.textContent);
    if (lsDie <= y) {

        document.querySelector("#display2").innerHTML = "Computer gains " + comLsStat.textContent;

        console.log("LS");
        comCount = comCount + y;
        document.querySelector("#com-life").innerHTML = comCount;
        
        
    }
    let comSpecialCount = 0;
    if (parseInt(document.querySelector("#com-life").textContent) <= 15 && comSpecialCount < 2) {
        comSpecialBtn.removeAttribute("disabled", "");
        userActionBtn.setAttribute("disabled", "");
        userDoneBtn.setAttribute("disabled", "");
        comSpecialCount = 1;
        console.log("trigger " +comSpecialCount);
        
    }
}

//com special event
comSpecialBtn.addEventListener("click", comSuperActive);
function comSuperActive() {
    comSuper.style.display = "block";
}

// com super buttons 
let comDeal10Btn = document.querySelector("#com-deal10");
comDeal10Btn.addEventListener("click", comDeal10Action);
comDeal10Btn.style.display = "none";
let comGain10Btn = document.querySelector("#com-gain10");
comGain10Btn.addEventListener("click", comGain10Action);
comGain10Btn.style.display = "none";
let comGain3ApBtn = document.querySelector("#com-gain3-ap");
comGain3ApBtn.addEventListener("click", comGain3ApAction);
let comGain3HcBtn = document.querySelector("#com-gain3-hc");
comGain3HcBtn.addEventListener("click", comGain3HcAction);
let comGain3LsBtn = document.querySelector("#com-gain3-ls");
comGain3LsBtn.addEventListener("click", comGain3LsAction);
//com super action functions
function comDeal10Action(){
    let x = parseInt(document.querySelector("#user-life").textContent);
    let y = x-10;
    document.querySelector("#user-life").innerHTML = y;
    comSuper.style.display = "none";
    comSpecialBtn.setAttribute("disabled","")
    userActionBtn.removeAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");

}
function comGain10Action(){
    let x = parseInt(document.querySelector("#com-life").textContent);
    let y = x + 10;
    document.querySelector("#com-life").innerHTML = y;
    comSuper.style.display = "none";
    comSpecialBtn.setAttribute("disabled","")
    userActionBtn.removeAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");

}
function comGain3ApAction(){
    let x = parseInt(document.querySelector("#com-ap-stat").textContent);
    console.log("comgain3ap " + x);
    let y = x + 3;
    document.querySelector("#com-ap-stat").innerHTML = y;
    comSuper.style.display = "none";
    comSpecialBtn.setAttribute("disabled","")
    userActionBtn.removeAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");

}
function comGain3HcAction(){
    let x = parseInt(document.querySelector("#com-hc-stat").textContent);
    let y = x + 3;
    document.querySelector("#com-hc-stat").innerHTML = y;
    comSuper.style.display = "none";
    comSpecialBtn.setAttribute("disabled","")
    userActionBtn.removeAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");
}
function comGain3LsAction(){
    let x = parseInt(document.querySelector("#com-ls-stat").textContent);
    let y = x + 3;
    document.querySelector("#com-ls-stat").innerHTML = y;
    comSuper.style.display = "none";
    comSpecialBtn.setAttribute("disabled","")
    userActionBtn.removeAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");
}


function comWin() {
    document.querySelector("#display").innerHTML = "Computer deals " + comApStat.textContent;

    comAttrBtn1.style.display = "block";
    comAttrBtn2.style.display = "block";
    comAttrBtn3.style.display = "block";
    comDoneBtn.setAttribute("disabled", "");
    comActionBtn.setAttribute("disabled", "");
    
    let x = parseInt(document.querySelector("#com-ap-stat").textContent);
    let a = parseInt(document.querySelector("#user-life").textContent);
    a - x;
    document.querySelector("#user-life").innerHTML = a;
}

function comLose() {
    document.querySelector("#display").innerHTML = "Player deals " + userApStat.textContent;

    let x = parseInt(document.querySelector("#user-ap-stat").textContent);

    comCount-=x;
    document.querySelector("#com-life").innerHTML = comCount;
    comActionBtn.setAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");
    
    userTurnResult.removeAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");
    comDoneBtn.setAttribute("disabled", "");

    let y = parseInt(userLsStat.textContent);
    userCount = userCount + y;
    document.querySelector("#user-life").innerHTML = userCount;

    document.querySelector("#display3").innerHTML = "Player gains " + userLsStat.textContent;

}


//player turn

//com attreibute declaration and buttons
let userAttrBtn1 = document.querySelector("#user-attr-button1");
userAttrBtn1.style.display = "none";
userAttrBtn1.addEventListener("click", addUserApStatBtn);
let userAttrBtn2 = document.querySelector("#user-attr-button2");
userAttrBtn2.style.display = "none";
userAttrBtn2.addEventListener("click", addUserHcStatBtn);
let userAttrBtn3 = document.querySelector("#user-attr-button3");
userAttrBtn3.style.display = "none";
userAttrBtn3.addEventListener("click", addUserLsStatBtn);

function addUserApStatBtn(){
    userApCount++;
    userApStat.innerHTML = userApCount;
    userAttrBtn1.style.display = "none";
    userAttrBtn2.style.display = "none";
    userAttrBtn3.style.display = "none";
    userDoneBtn.removeAttribute("disabled", "");
}
function addUserHcStatBtn(){
    userHcCount++;
    userHcStat.innerHTML = userHcCount;
    userAttrBtn1.style.display = "none";
    userAttrBtn2.style.display = "none";
    userAttrBtn3.style.display = "none";
    userDoneBtn.removeAttribute("disabled", "");
}
function addUserLsStatBtn(){
    userLsCount++;
    userLsStat.innerHTML = userLsCount;
    userAttrBtn1.style.display = "none";
    userAttrBtn2.style.display = "none";
    userAttrBtn3.style.display = "none";
    userDoneBtn.removeAttribute("disabled", "");
}

let userSpecialBtn = document.querySelector("#user-special-button");
let userTurnResult = document.querySelector("#user-turn-result");
let userDoneBtn = document.querySelector("#user-done-button");
userSpecialBtn.setAttribute("disabled", "");
userTurnResult.setAttribute("disabled", "");
userDoneBtn.setAttribute("disabled", "");
 


function userTurnAction() {
    let Die = Math.ceil(Math.random(1) * 20)
    console.log(Die);
    turnDie.innerHTML = "Die result " + Die;
    

    let x = parseInt(userHcStat.textContent);

    if (Die <= x) {
        userWin()
    } else {
        userLose()
    }

    let lsDie = Math.ceil(Math.random(1) * 20);
    console.log("ls= " + lsDie);
    let y = parseInt(userLsStat.textContent);
    if (lsDie <= y) {
        
        document.querySelector("#display3").innerHTML = "Player gains " + userLsStat.textContent;

        console.log("LS");
        userCount = userCount + y;
        document.querySelector("#user-life").innerHTML = userCount;
        
    }
    let userSpecialCount = 0;
    if (parseInt(document.querySelector("#user-life").textContent) <= 15 && userSpecialCount < 1) {
        userSpecialBtn.removeAttribute("disabled", "");
        userActionBtn.setAttribute("disabled", "");
        userDoneBtn.setAttribute("disabled", "");
        
        comActionBtn.setAttribute("disabled", "");
        comDoneBtn.setAttribute("disabled", "");
        userSpecialCount = 1;
    }
    
}
userSpecialBtn.addEventListener("click", userSuperActive);
function userSuperActive() {
    userSuper.style.display = "block";
}


// user super buttons 
let userDeal10Btn = document.querySelector("#user-deal10");
userDeal10Btn.addEventListener("click", userDeal10Action);
userDeal10Btn.style.display = "none";
let userGain10Btn = document.querySelector("#user-gain10");
userGain10Btn.addEventListener("click", userGain10Action);
userGain10Btn.style.display = "none";
let userGain3ApBtn = document.querySelector("#user-gain3-ap");
userGain3ApBtn.addEventListener("click", userGain3ApAction);
let userGain3HcBtn = document.querySelector("#user-gain3-hc");
userGain3HcBtn.addEventListener("click", userGain3HcAction);
let userGain3LsBtn = document.querySelector("#user-gain3-ls");
userGain3LsBtn.addEventListener("click", userGain3LsAction);
//user super action functions
function userDeal10Action(){
    let x = parseInt(document.querySelector("#com-life").textContent);
    let y = x-10;
    document.querySelector("#com-life").innerHTML = y;
    userSuper.style.display = "none";
    userSpecialBtn.setAttribute("disabled","")
    comActionBtn.removeAttribute("disabled", "");
    comDoneBtn.removeAttribute("disabled", "");

}
function userGain10Action(){
    let x = parseInt(document.querySelector("#user-life").textContent);
    let y = x + 10;
    document.querySelector("#user-life").innerHTML = y;
    userSuper.style.display = "none";
    userSpecialBtn.setAttribute("disabled","")
    comActionBtn.removeAttribute("disabled", "");
    comDoneBtn.removeAttribute("disabled", "");

}
function userGain3ApAction(){
    let x = parseInt(document.querySelector("#user-ap-stat").textContent);
    console.log("usergain3ap " + x);
    let y = x + 3;
    document.querySelector("#user-ap-stat").innerHTML = y;
    userSuper.style.display = "none";
    userSpecialBtn.setAttribute("disabled","")
    comActionBtn.removeAttribute("disabled", "");
    comDoneBtn.removeAttribute("disabled", "");

}
function userGain3HcAction(){
    let x = parseInt(document.querySelector("#user-hc-stat").textContent);
    let y = x + 3;
    document.querySelector("#user-hc-stat").innerHTML = y;
    userSuper.style.display = "none";
    userSpecialBtn.setAttribute("disabled","")
    comActionBtn.removeAttribute("disabled", "");
    comDoneBtn.removeAttribute("disabled", "");
}
function userGain3LsAction(){
    let x = parseInt(document.querySelector("#user-ls-stat").textContent);
    let y = x + 3;
    document.querySelector("#user-ls-stat").innerHTML = y;
    userSuper.style.display = "none";
    userSpecialBtn.setAttribute("disabled","")
    comActionBtn.removeAttribute("disabled", "");
    comDoneBtn.removeAttribute("disabled", "");
}







function userWin() {
    document.querySelector("#display").innerHTML = "Player deals " + userApStat.textContent;

    userAttrBtn1.style.display = "block";
    userAttrBtn2.style.display = "block";
    userAttrBtn3.style.display = "block";
    userDoneBtn.setAttribute("disabled", "");
    userActionBtn.setAttribute("disabled", "");
    
    let x = parseInt(userApStat.textContent);
    comCount-=x;
    document.querySelector("#com-life").innerHTML = comCount;
}

function userLose() {
    document.querySelector("#display").innerHTML = "Computer deals " + comApStat.textContent;

    let x = parseInt(comApStat.textContent);
    userCount-=x;

    let y = parseInt(comLsStat.textContent);
    comCount = comCount + y;
    document.querySelector("#com-life").innerHTML = comCount;
    document.querySelector("#display2").innerHTML = "Computer gains " + comLsStat.textContent;

    document.querySelector("#user-life").innerHTML = userCount;

    

    userActionBtn.setAttribute("disabled", "");
    userDoneBtn.removeAttribute("disabled", "");
    comActionBtn .removeAttribute("disabled", "");
    comDoneBtn.removeAttribute("disabled", "");
    userDoneBtn.setAttribute("disabled", "");




}

// let userDoneBtn = document.querySelector("#done-button-user");
userDoneBtn.addEventListener("click", userDoneAction);
userDoneBtn.setAttribute("disabled", "");
function userDoneAction () {

 
    document.querySelector("#display").innerHTML = "";
    document.querySelector("#display2").innerHTML = "";
    document.querySelector("#display3").innerHTML = "";
    turnDie.innerHTML = "";
    userDoneBtn.setAttribute("disabled", "");
    
    comActionBtn.removeAttribute("disabled", "");
    comDoneBtn.removeAttribute("disabled", "");
    userActionBtn.setAttribute("disabled", "");

}


comSpecialBtn.setAttribute("disabled", "");