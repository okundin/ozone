import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
	// search by goods title/name
	const searchInput = document.querySelector(".search-wrapper_input");
	searchInput.addEventListener("input", (event) => {
		const value = event.target.value;
		getData().then((data) => {
			renderGoods(searchFilter(data, value));
		});
	});
};

export default search;
