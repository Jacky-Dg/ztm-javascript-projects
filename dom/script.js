var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var buttons = document.querySelectorAll("button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + ' '));
	toggleClassDone(li);

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("x"));
	button.classList.add("deleteItem");
	addDeleteButton(button);

	li.appendChild(button);

	ul.appendChild(li);
	input.value = "";
}

function createButtonElement() {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("x"));
	button.classList.add("deleteItem");

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClassDone(listItem) {
	listItem.addEventListener("click", function() {
		listItem.classList.toggle('done')
	});
}

function addDeleteButton(listItem) {
	listItem.addEventListener("click", function() {
		listItem.parentElement.remove();
	});
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

listItems.forEach((li) => { 
	toggleClassDone(li);
});

buttons.forEach((button, index) => {
	if(index > 0) {
		addDeleteButton(button);
	}
});