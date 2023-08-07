const ypieImg = document.getElementById("ypieimg");

ypieImg.style.borderColor = "black";
ypieImg.style.border = "5px";
ypieImg.style.border = "solid";
ypieImg.style.width = "300px";

const ypieButton = document.getElementById("ypiebutton");

ypieButton.addEventListener("click", () => {
    window.open('https://ypie.org', '_blank');
})

const ypieArea = document.getElementById("ypie_area");
const ypieText = document.getElementById("ypietext");

ypieArea.style.width = "300px";
ypieArea.style.justifyContent = "center";
ypieButton.style.justifySelf = "center";
ypieText.style.textAlign = "center";

const allstarcodeImg = document.getElementById("allstarcodeimg");

allstarcodeImg.style.width = "300px";