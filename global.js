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
	timer = 0
	if (dialogue.length == 2) { timer = dialogue[1]; }
	dialogue = dialogue[0]
	return(setTimeout(function(){	var entry = document.createElement("p");
									entry.textContent = dialogue;
									entry.classList.add('dialogue');
									var dialogueHeader = document.getElementById('dialogueHeader');
									var firstDialogue = dialogueHeader.nextSibling;
									dialogueBox.insertBefore(entry, firstDialogue);}, timer));
}
