function drawSunrise() {
    var prow = document.getElementById('prow').getContext('2d');
    var helm = document.getElementById('prow');
    helm.style.opacity = "0";
    prow.fillStyle = "rgba(255,234,76)";
    prow.beginPath();
    prow.moveTo(400, 300);
    prow.lineTo(400, 500);
    prow.lineTo(50, 500);
    prow.lineTo(150, 300);
    prow.closePath();
    prow.fill();
    prow.beginPath();
    prow.moveTo(450, 300);
    prow.lineTo(450, 500);
    prow.lineTo(800, 500);
    prow.lineTo(700, 300);
    prow.closePath();
    prow.fill();
    prow.beginPath();
    prow.moveTo(400, 50);
    prow.lineTo(400, 250);
    prow.lineTo(175, 250);
    prow.lineTo(275, 50);
    prow.closePath();
    prow.fill();
    prow.beginPath();
    prow.moveTo(450, 50);
    prow.lineTo(450, 250);
    prow.lineTo(675, 250);
    prow.lineTo(575, 50);
    prow.closePath();
    prow.fill();
    var time = 0
    var opacity = 0
    while (time < 1000) {
        time += 100
        setTimeout(function(){helm.style.opacity = opacity;opacity += 0.1}, time);
    }
}

function drawWindows() {
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p>As you watch, the sun rises, revealing... the bridge of a ship?</p>";}, 2000);
    setTimeout(drawSunrise, 2500);
}
