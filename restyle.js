let fortButton = document.getElementById("fortune-button");
let fortOutput = document.getElementById("fortune-output");

fortButton.addEventListener("click", restyle);


function restyle() {
    fortOutput.style.fontSize = "(" + (Math.random() * 13) + "vmin)";
    fortOutput.style.color = "rgb(" + (Math.random() * 255)+ "," + (Math.random() * 255)+ "," + (Math.random() * 255)+ ")";
    fortOutput.style.padding = "(" +  (Math.random() * 15) + "vmin)";
}