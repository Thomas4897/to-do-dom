const todoForm = document.querySelector("#todo-form");

const todoInputText = document.querySelector("#todo-input-text");

const todoList = document.querySelector("#todo-list");

const addTodoSubmit = document.querySelector("#add-todo-submit");
const removeCompletedSubmit = document.querySelector(
	"#remove-completed-submit"
);
const removeAllSubmit = document.querySelector("#remove-all-submit");

addTodoSubmit.value = "ADD";
removeCompletedSubmit.value = "REMOVE COMPLETED TASKS";
removeAllSubmit.value = "REMOVE ALL";

todoForm.addEventListener("submit", function (event) {
	event.preventDefault();
	console.log("The todoForm function called");
	let str = todoInputText.value;
	const newDiv = document.createElement("div");
	newDiv.innerHTML = str;

	newDiv.addEventListener("click", function () {
		if (newDiv.style.textDecoration === "") {
			newDiv.style.textDecoration = "line-through";
		} else {
			newDiv.style.textDecoration = "";
		}
	});

	if (str !== "") {
		todoList.appendChild(newDiv);
	}

	todoForm.reset();
});

removeCompletedSubmit.addEventListener("click", function () {
	const todoList = document.querySelectorAll("#todo-list div");
	for (let i = 0; i < todoList.length; i++) {
		const items = todoList[i];
		if (items.style.textDecoration === "line-through") {
			items.remove();
		}
	}
});

removeAllSubmit.addEventListener("click", function () {
	const todoList = document.querySelectorAll("#todo-list div");
	for (let i = 0; i < todoList.length; i++) {
		const items = todoList[i];
		items.remove();
	}
});
