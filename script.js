const input = document.querySelector("input[name='input']");
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
		if(confirm("Are you sure you want to delete this item?")) {
			list.removeChild(listItem);
			input.focus();
		}
	});

	input.focus();
};

button.addEventListener("click", inputFunction);

input.addEventListener("keypress", (e) => {
	if (e.key === "Enter") inputFunction();
});

// filter items
const filter = document.querySelector("#filter");

const filterItems = (e) => {
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

filter.addEventListener("keyup", filterItems);

const openFilterBtn = document.querySelector(".filterOpen"); 
const closeFilterBtn = document.querySelector(".filterClose"); 
const filterDiv = document.querySelector("div.filter");
const formDiv = document.querySelector("div.form");

openFilterBtn.addEventListener("click", () => {
	// disable form visibility
	filterDiv.style.display = "flex";
	formDiv.style.display = "none";
});

closeFilterBtn.addEventListener("click", () => {
	// disable filter visibility
	formDiv.style.display = "flex";
	filterDiv.style.display = "none";
});
