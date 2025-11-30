const getData = (str) => {
	return fetch(
		// `https://ozone-396c0-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${
		// 	str ? `search=${str}` : ""
		// }` this option is not working with firebase service

		`https://ozone-396c0-default-rtdb.europe-west1.firebasedatabase.app/goods.json`
	).then((response) => {
		return response.json();
	});
};

export default getData;
