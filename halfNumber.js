let num = document.getElementById("half-input");
let newNum;
let numOutput = document.getElementById("half-button");

numOutput.addEventListener("click", halfNumber);

function halfNumber() {
    let inpNum = num.value;
    newNum = inpNum / 2;
    alert("Half of " + inpNum + " is " + newNum);
}
