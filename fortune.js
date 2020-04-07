let fortInput = document.getElementById("fortune-input").value;
let fortOutput = document.getElementById("fortune-output");
let fortButton = document.getElementById("fortune-button");

let fortuneList = ["Everyone agrees. You are the best.", "Your shoes will make you happy today.", "Jealousy doesn't open doors, it closes them!", "You learn from your mistakes... You will learn a lot today.", "Love can last a lifetime, if you want it to.", ]

fortButton.addEventListener("click", fortune);
fortButton.addEventListener("click", restyle);

function fortune() {
    fortuneOut = fortuneList[Math.floor(Math.random() * fortuneList.length)];
    console.log(fortInput.value + ":" + fortuneOut);
    fortOutput.innerHTML = fortuneOut;
}

function restyle() {
    fortOutput.style.fontSize = (Math.random() * 200) + "px";
    fortOutput.style.color = "rgb(" + (Math.random() * 255)+ "," + (Math.random() * 255)+ "," + (Math.random() * 255)+ ")";
    fortOutput.style.padding = (Math.random() * 150) + "px";
}

//fortOutput.innerHTML = fortune();
