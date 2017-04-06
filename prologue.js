var timeouts = [];
var Skipped = false;

var dialogue = prologueDialogue;

function intro() {
    drawSunrise()
    timeouts.push(addDialogue(dialogue[0]));
    timeouts.push(addDialogue(dialogue[1]));
    timeouts.push(addDialogue(dialogue[2]));
    timeouts.push(addDialogue(dialogue[3]));
    timeouts.push(addDialogue(dialogue[4]));
    timeouts.push(addDialogue(dialogue[5]));
    timeouts.push(setTimeout(function(){addButton('standUp()', 'standUpButton', 'Stand');}, 20000));
}

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
}

function skipIntro() {
    if (!Skipped) {
        for (i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
        addButton('standUp()', 'standUpButton', 'Stand');
        Skipped = true;
    }
}

function standUp() {
    document.getElementById('dialogueHeader').textContent = "Tradewinds";
    timeouts.push(addDialogue(dialogue[6]));
    removeButton('standUpButton');
    timeouts.push(addDialogue(dialogue[7]));
    setTimeout(function(){drawDoor();}, 2000);
	setTimeout(function(){addButton('openDoor()', 'openDoorButton', 'Open Door');}, 2000);
}

function drawDoor() {
    var cabin = document.getElementById('captainsCabin');
    cabin.removeChild(document.getElementById('stern'));
    var door = document.createElement("canvas");
    door.setAttribute('id','door');
    door.setAttribute('width', '800');
    door.setAttribute('height', '600');
    cabin.appendChild(door);
    var gradient = document.createElement("div");
    addGradientDiv(cabin);
    door = door.getContext('2d');
    door.fillStyle = "#751d07";
    door.beginPath();
    door.moveTo(140, 600);
    door.lineTo(140, 10);
    door.lineTo(660, 10);
    door.lineTo(660, 600);
    door.lineTo(650, 600);
    door.lineTo(650, 20);
    door.lineTo(150, 20);
    door.lineTo(150, 600);
    door.lineTo(140, 600);
    door.closePath();
    door.fill();
    door.beginPath();
    door.moveTo(155, 600);
    door.lineTo(155, 25);
    door.lineTo(645, 25);
    door.lineTo(645, 600);
    door.closePath();
    door.fill();
}

function openDoor() {
    removeButton('openDoorButton');
    timeouts.push(addDialogue(dialogue[8]));
    setTimeout(function(){drawLadder();}, 1000);
	setTimeout(function(){addButton('climbLadder()', 'climbLadderButton', 'Climb');}, 1000);
}

function drawLadder() {
    var active = document.getElementById('captainsCabin');
    active.style.display = 'none';
    var main = document.getElementById('main');
    var belowDecks = document.createElement("div");
    belowDecks.setAttribute('id','belowDecks');
    belowDecks = main.insertBefore(belowDecks, main.firstChild);
    var ladder = document.createElement("canvas");
    ladder.setAttribute('id', 'ladder');
    ladder.setAttribute('width', '800');
    ladder.setAttribute('height', '600');
    belowDecks.appendChild(ladder);
    ladder = document.getElementById('ladder').getContext("2d");
    ladder.fillStyle = '#459fff';
    ladder.fillRect(100, 100, 150, 100);
    ladder.fillStyle = "#751d07";
    ladder.fillRect(125, 200, 10, 400);
    ladder.fillRect(215, 200, 10, 400);
    ladder.fillRect(125, 250, 90, 10);
    ladder.fillRect(125, 300, 90, 10);
    ladder.fillRect(125, 350, 90, 10);
    ladder.fillRect(125, 400, 90, 10);
    ladder.fillRect(125, 450, 90, 10);
    ladder.fillRect(125, 500, 90, 10);
    ladder.fillRect(125, 550, 90, 10);
    ladder.fillRect(125, 600, 90, 10);
    addGradientDiv(belowDecks);
}

function climbLadder() {
    removeButton('climbLadderButton');
    timeouts.push(addDialogue(dialogue[9]));
    timeouts.push(addDialogue(dialogue[10]));
    timeouts.push(addDialogue(dialogue[11]));
    timeouts.push(addDialogue(dialogue[12]));
    setTimeout(function(){drawDeck();}, 2500);
}

function drawDeck() {
    var active = document.getElementById('belowDecks');
    active.style.display = 'none';
    var main = document.getElementById('main');
    var foreDeck = document.createElement("div");
    foreDeck.setAttribute('id','foreDeck');
    foreDeck = main.insertBefore(foreDeck, main.firstChild);
    var deck = document.createElement("canvas");
    deck.setAttribute('id', 'deck');
    deck.setAttribute('width', '800');
    deck.setAttribute('height', '600');
    foreDeck.appendChild(deck);
    deck.style.backgroundColor = '#459fff';
    deck = document.getElementById('deck').getContext("2d");
    deck.fillStyle = "#992305";
    deck.fillRect(0, 500, 800, 100);
    deck.fillRect(0, 400, 800, 10);
    deck.fillRect(100, 400, 10, 100);
    deck.fillRect(300, 400, 10, 100);
    deck.fillRect(500, 400, 10, 100);
    deck.fillRect(700, 400, 10, 100);
    deck.fillStyle = '#9c846e';
    deck.beginPath();
    deck.arc(0, -24850, 25000, 0, Math.PI);
    deck.stroke();
    deck.fill();

}
