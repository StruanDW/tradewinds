function drawSunrise() {
    var stern = document.getElementById('stern').getContext('2d');
    var cabin = document.getElementById('stern');
    cabin.style.opacity = "0";
    stern.fillStyle = "rgba(255,234,76)";
    stern.beginPath();
    stern.moveTo(400, 200);
    stern.lineTo(400, 300);
    stern.lineTo(50, 300);
    stern.lineTo(150, 200);
    stern.closePath();
    stern.fill();
    stern.beginPath();
    stern.moveTo(450, 200);
    stern.lineTo(450, 300);
    stern.lineTo(800, 300);
    stern.lineTo(700, 200);
    stern.closePath();
    stern.fill();
    stern.beginPath();
    stern.moveTo(400, 50);
    stern.lineTo(400, 150);
    stern.lineTo(175, 150);
    stern.lineTo(275, 50);
    stern.closePath();
    stern.fill();
    stern.beginPath();
    stern.moveTo(450, 50);
    stern.lineTo(450, 150);
    stern.lineTo(675, 150);
    stern.lineTo(575, 50);
    stern.closePath();
    stern.fill();
    var time = 0;
    var opacity = 0;
    while (time < 1000) {
        time += 100;
        setTimeout(function(){cabin.style.opacity = opacity; opacity += 0.1}, time);
    }
}

function drawWindows() {
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p>As you watch, the sun rises, revealing... a cabin on a ship?</p>";}, 2000);
    setTimeout(drawSunrise, 2500);
}
