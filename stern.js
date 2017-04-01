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

function addButton(func, id, text) {
    controls = document.getElementById('controls');
    var button = document.createElement("a");
    button.textContent = text;
    button.classList.add('button');
    button.setAttribute('id', id);
    button.setAttribute('href', 'javascript:' + func);
    //button.setAttribute('onclick', func);
    controls.appendChild(button);
}

function addDialogue(dialogue) {
    var entry = document.createElement("p");
    entry.textContent = dialogue;
    entry.classList.add('dialogue');
    dialogueBox = document.getElementById('dialogueBox');
    dialogueBox.appendChild(entry);
}

function standUp() {
    var cabin = document.getElementById('stern');
    var stern = cabin.getContext('2d');
    stern.clearRect(320, 160, 300, 40);
    document.getElementById('dialogueHeader').textContent = "Tradewinds";
    addDialogue('You stand, steadying yourself against the wall. The throbbing in your head remains, but you spot a canteen and take a drink.');
    var button = document.getElementById('standUpButton')
    document.getElementById('controls').removeChild(button);
    setTimeout(function(){addDialogue("The cabin is decorated well, if spartanly. You feel the floor rocking below you as you look around, though that might be your head.");}, 1000);
    setTimeout(function(){addDialogue("Set into the wall next to you is a wood-panelled door.");}, 2000);
    setTimeout(function(){addButton('openDoor()', 'openDoorButton', 'Open Door');}, 2000);
}

function openDoor() {
    var button = document.getElementById('openDoorButton')
    document.getElementById('controls').removeChild(button);
    addDialogue("The door opens easily, revealing a dark corridor. You step through, cautiously.");
    setTimeout(function(){addDialogue("There is a ladder leading upwards towards a square of light. The rest of the corridor is shrouded in darkness.");}, 1000);
    setTimeout(function(){addButton('climbLadder()', 'climbLadderButton', 'Climb');}, 1000);

}

function intro() {
    drawSunrise()
    setTimeout(function(){addDialogue("Your head is throbbing...");}, 1000);
    setTimeout(function(){addDialogue("You can hear waves, somewhere...");}, 3000);
    setTimeout(function(){addDialogue("You open your eyes, but it doesn't make a difference; there's no light.");}, 4000);
    setTimeout(function(){addDialogue("You take short breaths through your nose. Your mouth is dry.");}, 7000);
    setTimeout(function(){addDialogue("Is this what it is like to be dead?");}, 10000);
    setTimeout(function(){addDialogue("After what feels like untold ages, the sun rises, revealing... a ship's cabin?");}, 16000);
    setTimeout(function(){addButton('standUp()', 'standUpButton', 'Stand');}, 20000);
}
