const input = document.querySelector("input[name='input']");
const button = document.querySelector(".add");
const list = document.querySelector(".list");
const filter = document.querySelector("#filter");
const openFilterBtn = document.querySelector(".filterOpen"); 
const closeFilterBtn = document.querySelector(".filterClose"); 
const filterDiv = document.querySelector("div.filter");
const formDiv = document.querySelector("div.form");

button.addEventListener("click", inputFunction);
input.addEventListener("keypress", addWithEnter);
filter.addEventListener("keyup", filterItems);
openFilterBtn.addEventListener("click", hideForm);
closeFilterBtn.addEventListener("click", hideFilter);

// add items
function inputFunction() {
	const inputItem = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");
	const regEx = /[a-z0-9]/i;

	if (inputItem !== "" && regEx.test(inputItem)) {

		listText.textContent = inputItem;
		listItem.appendChild(listText);


		listItem.appendChild(listBtn);
		listBtn.textContent = "Delete";
		listBtn.classList = "btn delete";
		
		list.appendChild(listItem);

		console.log(inputItem.length);
	}

	listBtn.addEventListener("click", () => {
		if(confirm("Are you sure you want to delete this item?")) {
			list.removeChild(listItem);
			input.focus();
		}
	});

	input.focus();
}

function addWithEnter(e) {
	if (e.key === "Enter") inputFunction();
}

// filter items
function filterItems(e) {
	const text = e.target.value.toLowerCase();
	
	const items = list.getElementsByTagName("li");
	
	Array.from(items).forEach((item) => {
		const itemName = item.firstChild.textContent;

		if(itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = "flex";
		} else {
			item.style.display = "none";
		}
	});

}

function hideForm() {
	filterDiv.style.display = "flex";
	formDiv.style.display = "none";
}

function hideFilter() {
	formDiv.style.display = "flex";
	filterDiv.style.display = "none";

	filter.value = "";
	// upon closing the filter section, reset the list view
	const listItems = document.querySelectorAll("li");
	listItems.forEach((item) => item.style.display = "flex");
}