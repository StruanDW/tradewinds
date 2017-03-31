function drawSunrise() {
    var prow = document.getElementById('prow').getContext('2d');
    prow.fillStyle = "rgba(255,234,76,255)";
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
    setTimeout(function(){prow.fillStyle = "rgba(255,234,76,0.2)";}, 200);
    setTimeout(function(){prow.fillStyle = "rgba(255,234,76,0.4)";}, 400);
    setTimeout(function(){prow.fillStyle = "rgba(255,234,76,0.6)";}, 600);
    setTimeout(function(){prow.fillStyle = "rgba(255,234,76,255)";}, 800);
    setTimeout(function(){prow.fillStyle = "rgba(255,234,76,255)";}, 1000);
}

function drawWindows() {
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p>As you watch, the sun rises, revealing... the bridge of a ship?</p>";}, 2000);
    setTimeout(drawSunrise, 500);
}
