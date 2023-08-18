const inputTag = document.querySelector("#inputForm");
const shoppingListTag = document.querySelector(".shoppingListContainer");
const darkMode = document.querySelector(".darkModeIcon");

inputTag.addEventListener("change", handleChange);
let productId = 1;
function handleChange(e) {
	
	let inputValue = e.target.value;
	const productContainer = document.createElement("div");
	productContainer.classList.add("productContainer");
	let parentDiv = document.createElement("div");
	parentDiv.classList.add("productName");
	parentDiv.addEventListener("click", () => {
		parentDiv.classList.toggle("purchased");
	});
	const product = productId.toString() + ". " + inputValue;
	const spanTag = document.createElement("span");
	const trashIcon = document.createElement("i");
	trashIcon.classList.add("bi", "bi-trash");
	trashIcon.addEventListener("click", () => {
		productContainer.remove();
	});
	spanTag.id = productId;
	spanTag.append(product);
	parentDiv.append(spanTag);
	productContainer.append(parentDiv, trashIcon);
	shoppingListTag.append(productContainer);
	inputTag.value = "";
	productId += 1;
	
}
