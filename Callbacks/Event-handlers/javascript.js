// EVENT CONTROLER - addEventListener


document.querySelector("#play-btn").addEventListener("click", playSound); 

function playSound () {
new Audio("bombo.wav").play();
}

//código refactorizado
//document.querySelector("#play-btn").addEventListener("click", playSound = () => new Audio("bombo.wav").play())





