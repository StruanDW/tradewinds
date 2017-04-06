var timeouts = [];
var Skipped = false;

var dialogue = prologueDialogue;

function intro() {
    timeouts.push(addDialogue(dialogue[0]));
    timeouts.push(addDialogue(dialogue[1]));
    timeouts.push(addDialogue(dialogue[2]));
    timeouts.push(addDialogue(dialogue[3]));
    timeouts.push(addDialogue(dialogue[4]));
    timeouts.push(addDialogue(dialogue[5]));
    timeouts.push(setTimeout(function(){addButton('standUp()', 'standUpButton', 'Stand');}, 20000));
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
    var door = document.createElement("img");
    door.id = 'door';
    door.className = 'canvas';
    door.src = 'graphics/door.svg';
    cabin.appendChild(door);
    var gradient = document.createElement("div");
    addGradientDiv(cabin);
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
    var ladder = document.createElement("img");
    ladder.id = 'ladder';
    ladder.className = 'canvas';
    ladder.src = 'graphics/ladder.svg';
    belowDecks.appendChild(ladder);
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
    var deck = document.createElement("img");
    deck.id = 'deck';
    deck.className = 'canvas';
    deck.src = 'graphics/deck.svg';
    foreDeck.appendChild(deck);
}
