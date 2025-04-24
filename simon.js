let gamesq = [];
let usersq = [];
let highScore = 0;
let btnOpt = ["blue", "orange", "green", "red"];
let level = 0;
let start = false;

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

document.addEventListener("keypress", function(){
    if(start==false){
        start=true;
        levelUp();
    }
})

function levelUp(){
    usersq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let btnInx = Math.floor(Math.random() * 4);
    let btnColor = btnOpt[btnInx];
    gamesq.push(btnColor);
    let randBtn = document.querySelector(`.${btnColor}`);
    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function btnPress(){
    if(start== true){
        btn = this;
        btnFlash(btn);
        userBtnCol = btn.getAttribute("id");
        usersq.push(userBtnCol);
        checkBtn(usersq.length - 1);
    }
}

function checkBtn(idx){
    if(gamesq[idx]==usersq[idx]){
        if(gamesq.length==usersq.length){
            setTimeout(levelUp,500)
        }
    }else{
        let score = level - 1; 
        h3.innerHTML = `Game over!! <br>Your score is: <b>${score}</b> <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#deeecf";
        },200);
        if(score>highScore){
            highScore = score;
            h2.innerHTML = `Highest Score: ${highScore}`;
        }
        reset();
    }
}

function reset(){
    start = false;
    gamesq = [];
    usersq = [];
    level = 0;
}