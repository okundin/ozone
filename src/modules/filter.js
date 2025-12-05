import { priceFilter, saleFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const filter = () => {
	// search by price/price range
	const minInput = document.getElementById("min");
	const maxInput = document.getElementById("max");
	const checkboxinput = document.getElementById("discount-checkbox");
	const checkboxSpan = document.querySelector(".filter-check_checkmark");

	// event handler for items search on min input
	minInput.addEventListener("input", () => {
		getData().then((data) => {
			const filteredData = priceFilter(
				saleFilter(data, checkboxinput.checked),
				minInput.value,
				maxInput.value
			);
			renderGoods(filteredData);
		});
	});

	// event handler for items search on max input
	maxInput.addEventListener("input", () => {
		getData().then((data) => {
			const filteredData = priceFilter(
				saleFilter(data, checkboxinput.checked),
				minInput.value,
				maxInput.value
			);
			renderGoods(filteredData);
		});
	});

	// event handler for items on sale
	checkboxinput.addEventListener("change", () => {
		if (checkboxinput.checked) {
			checkboxSpan.classList.add("checked");
		} else {
			checkboxSpan.classList.remove("checked");
		}

		getData().then((data) => {
			const filteredData = priceFilter(
				saleFilter(data, checkboxinput.checked),
				minInput.value,
				maxInput.value
			);
			renderGoods(filteredData);
		});
	});
};

export default filter;
