const getData = () => {
	return fetch(
		"https://ozone-396c0-default-rtdb.europe-west1.firebasedatabase.app/goods.json"
	).then((response) => {
		return response.json();
	});
};

// this is another comment

export default getData;
