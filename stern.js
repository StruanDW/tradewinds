var timeouts = []
var Skipped = false;

function addButton(func, id, text) {
    controls = document.getElementById('controls');
    var button = document.createElement("a");
    button.textContent = text;
    button.classList.add('button');
    button.setAttribute('id', id);
    button.setAttribute('href', 'javascript:' + func);
    controls.appendChild(button);
    var button = document.getElementById(id);
    setTimeout(function(){button.style.opacity = 1;}, 1000);
}

function removeButton(id) {
    var button = document.getElementById(id);
    button.style.opacity = 0;
    setTimeout(function(){document.getElementById('controls').removeChild(button);}, 1000);
}

function addDialogue(dialogue) {
    var entry = document.createElement("p");
    entry.textContent = dialogue;
    entry.classList.add('dialogue');
    var dialogueHeader = document.getElementById('dialogueHeader');
    var firstDialogue = dialogueHeader.nextSibling;
    dialogueBox.insertBefore(entry, firstDialogue);
}

function intro() {
    drawSunrise()
    timeouts.push(setTimeout(function(){addDialogue("Your head is throbbing...");}, 1000));
    timeouts.push(setTimeout(function(){addDialogue("You can hear waves, somewhere...");}, 3000));
    timeouts.push(setTimeout(function(){addDialogue("You open your eyes, but it doesn't make a difference; there's no light.");}, 4000));
    timeouts.push(setTimeout(function(){addDialogue("You take short breaths through your nose. Your mouth is dry.");}, 7000));
    timeouts.push(setTimeout(function(){addDialogue("Is this what it is like to be dead?");}, 10000));
    timeouts.push(setTimeout(function(){addDialogue("After what feels like untold ages, the sun rises, revealing... a ship's cabin?");}, 16000));
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
    addDialogue('You stand, steadying yourself against the wall. The throbbing in your head remains, but you spot a canteen and take a drink.');
    removeButton('standUpButton');
    setTimeout(function(){addDialogue("The cabin is decorated well, if spartanly. You feel the floor rocking below you as you look around, though that might be your head.");}, 1000);
    setTimeout(function(){addDialogue("Set into the wall next to you is a wood-panelled door.");}, 2000);
    setTimeout(function(){drawDoor();}, 2000);
    setTimeout(function(){addButton('openDoor()', 'openDoorButton', 'Open Door');}, 3000);
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
    gradient.classList.add('fadeToBottom');
    gradient.setAttribute('width', '800px');
    gradient.setAttribute('height', '600px`');
    cabin.appendChild(gradient);
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
    addDialogue("The door opens easily, revealing a dark corridor. You step through, cautiously.");
    setTimeout(function(){addDialogue("There is a ladder leading upwards towards a square of light. The rest of the corridor is shrouded in darkness."); drawLadder();}, 1000);
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
    var gradient = document.createElement("div");
    gradient.classList.add('fadeToBottom');
    gradient.setAttribute('width', '800px');
    gradient.setAttribute('height', '600px`');
    belowDecks.appendChild(gradient);
}

function climbLadder() {
    removeButton('climbLadderButton');
    addDialogue("You grasp the ladder with one gloved hand. Absentmindedly, you notice the blood smeared on it.");
    setTimeout(function(){addDialogue("As you climb, you begin to feel light-headed, but you persevere.");}, 1000);
    setTimeout(function(){addDialogue("When you reach the deck- WOAH."); drawDeck();}, 2500);
    setTimeout(function(){addDialogue("Are you on... an airship?");}, 4000);
    setTimeout(function(){addButton('headAft()', 'headAftButton', 'Head Aft');}, 5000);
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
