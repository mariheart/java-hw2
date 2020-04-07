let num = document.getElementById("half-input");
let fortInput = document.getElementById("fortune-input");
let fortOutput = document.getElementById("fortune-output");
let newNum;
let fortuneList = ["Everyone agrees. You are the best.", "Your shoes will make you happy today.", "Jealousy doesn't open doors, it closes them!", "You learn from your mistakes... You will learn a lot today.", "Love can last a lifetime, if you want it to.", ]
let randFort = Math.floor(Math.random() * (fortInput.length / fortuneList.length));

function halfNumber(num) {
    newNum = num / 2;
    let message = alert("Half of " + num + " is " + newNum);
    return message;
}

function fortune(fortInput) {
    fortOutput = fortuneList[randFort];
    return fortOutput;
}

function restyle(fortInput) {

}


let halfOutput = halfNumber(num);