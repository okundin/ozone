import getData from "./getData";
import renderGoods from "./renderGoods";
import { maxPriceFilter, minPriceFilter, priceFilter, searchFilter } from "./filters";

const search = () => {
	const searchInput = document.querySelector(".search-wrapper_input");
	searchInput.addEventListener("input", (event) => {
		const value = event.target.value;
		getData().then((data) => {
			renderGoods(searchFilter(data, value));
		});
	});

	const searchMinPriceInput = document.getElementById("min");
	const searchMaxPriceInput = document.getElementById("max");

	// Price Search; not perfect, but good enough in these circumstances
	searchMinPriceInput.addEventListener("input", (event) => {
		const minPrice = event.target.value;
		getData().then((data) => {
			const filteredOnMinData = minPriceFilter(data, minPrice);
			renderGoods(filteredOnMinData);
			searchMaxPriceInput.addEventListener("input", (event) => {
				const maxPrice = event.target.value;
				const filteredOnMaxData = maxPriceFilter(filteredOnMinData, maxPrice);
				renderGoods(filteredOnMaxData);
			});
		});
	});
};

export default search;
