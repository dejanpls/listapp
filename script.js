const input = document.querySelector("input[type='text']");
const button = document.querySelector("button");
const list = document.querySelector(".list");


const inputFunction = () => {
	const inputItem = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");

	if (inputItem !== "" && inputItem.length <= 22) {
		listText.textContent = inputItem;
		listItem.appendChild(listText);

		listItem.appendChild(listBtn);
		listBtn.textContent = "Delete";
		listBtn.classList = "btn delete";
		
		list.appendChild(listItem);
	}

	listBtn.addEventListener("click", () => {
		list.removeChild(listItem);
		input.focus();
	});

	input.focus();

	console.log(inputItem.length);
};

button.addEventListener("click", inputFunction);

input.addEventListener("keypress", (e) => {
	if (e.key === "Enter") inputFunction();
});