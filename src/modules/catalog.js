import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";

const catalog = () => {
	const catalogBtn = document.querySelector(".catalog-button > button"); // capturing tag 'button'
	const catalogModal = document.querySelector(".catalog");
	const catalogModalItems = document.querySelectorAll(".catalog li");

	let isOpen = false;

	catalogBtn.addEventListener("click", () => {
		isOpen = !isOpen; // true
		if (isOpen) {
			catalogModal.style.display = "flex";
		} else {
			catalogModal.style.display = "";
		}
	});

	catalogModalItems.forEach((item) => {
		item.addEventListener("click", () => {
			const text = item.textContent; // getting item text
			getData().then((data) => {
				renderGoods(categoryFilter(data, text));
			});
		});
	});
};

export default catalog;
