function drawSunrise() {
    var prow = document.getElementById('prow').getContext('2d');
    prow.fillStyle = '#ffea4c';
    prow.beginPath();
    prow.moveTo(400, 300);
    prow.lineTo(400, 500);
    prow.lineTo(50, 500);
    prow.lineTo(150, 300);
    prow.closePath();
    prow.fill();prow.fillStyle = '#ffea4c';
    prow.beginPath();
    prow.moveTo(450, 300);
    prow.lineTo(450, 500);
    prow.lineTo(800, 500);
    prow.lineTo(700, 300);
    prow.closePath();
    prow.fill();
    prow.fillStyle = '#ffea4c';
    prow.beginPath();
    prow.moveTo(400, 50);
    prow.lineTo(400, 250);
    prow.lineTo(175, 250);
    prow.lineTo(275, 50);
    prow.closePath();
    prow.fill();prow.fillStyle = '#ffea4c';
    prow.beginPath();
    prow.moveTo(450, 50);
    prow.lineTo(450, 250);
    prow.lineTo(675, 250);
    prow.lineTo(575, 50);
    prow.closePath();
    prow.fill();

    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p>As you watch, the sun rises, revealing... the bridge of a ship?</p>";}, 500)
}

function drawWindows() {
    setTimeout(drawSunrise, 2000);
}
