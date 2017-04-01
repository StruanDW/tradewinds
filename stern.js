var Standing = false;

function drawSunrise() {
    var cabin = document.getElementById('stern');
    var stern = cabin.getContext('2d');
    stern.fillStyle = "#fc1";
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
    stern.fillStyle="#FFF";
    stern.font="40px " + stern.font.split(' ')[stern.font.length - 1];
    stern.fillText("Tradewinds", 320, 190);
}

function offerStand() {
    controls = document.getElementById('controls');
    controls.innerHTML += "<a href='#' class='button' id='standButton' onclick='standUp()'>Stand</span>";
}

function addDialogue(dialogue) {
    dialogue = "<p class='dialogue'>" + dialogue + "</p>";
    document.getElementById('dialogBox').innerHTML += dialogue;
}

function standUp() {
    if (!Standing) {
        var cabin = document.getElementById('stern');
        var stern = cabin.getContext('2d');
        stern.clearRect(320, 160, 300, 40);
        document.getElementById('dialogHeader').innerHTML = "Tradewinds";
        addDialogue('You stand, steadying yourself against the wall. The throbbing in your head remains, but you spot a canteen and take a drink.');
        Standing = true;
        var controls = document.getElementById('controls');
        var standButton = document.getElementById('standButton');
        controls.removeChild(standButton);

    }
}

function intro() {
    drawSunrise()
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p class='dialogue'>Your head is throbbing...</p>";}, 1000);
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p class='dialogue'>You can hear waves, somewhere...</p>";}, 3000);
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p class='dialogue'>You open your eyes, but it doesn't make a difference; there's no light.</p>";}, 4000);
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p class='dialogue'>You take short breaths through your nose. Your mouth is dry.</p>";}, 7000);
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p class='dialogue'>Is this what it is like to be dead?</p>";}, 10000);
    setTimeout(function(){document.getElementById('dialogBox').innerHTML += "<p class='dialogue'>After what feels like untold ages, the sun rises, revealing... a ship's cabin?</p>";}, 16000);
    setTimeout(function(){offerStand();}, 24000);
}
