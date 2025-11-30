export const searchFilter = (goods, value) => {
	// filter creates new array with searched items
	return goods.filter((goodsItem) => {
		return goodsItem.title.toLowerCase().includes(value.toLowerCase()); // register independent
	});
};

export const categoryFilter = (goods, text) => {
	// filter creates new array with searched items
	return goods.filter((goodsItem) => {
		return goodsItem.category === text;
	});
};

export const minPriceFilter = (goods, price) => {
	return goods.filter((goodsItem) => {
		return goodsItem.price >= price;
	});
};

export const maxPriceFilter = (goods, price) => {
	return goods.filter((goodsItem) => {
		if (price !== "") {
			return goodsItem.price <= price;
		} else {
			return goodsItem.price;
		}
	});
};
