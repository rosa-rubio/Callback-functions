function printMsg() {
    setTimeout(callbackFunction, 3000);
    document.getElementById("message1").innerHTML = 'Imprimiendo mensaje en la pantalla...';
}

function callbackFunction() {
    document.getElementById("message2").innerHTML = '¡MENSAJE IMPRIMIDO!'
}

printMsg();
