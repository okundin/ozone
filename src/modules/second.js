import getData from "./getData"; // we can use a module from another module

const second = () => {
	const cartBtn = document.getElementById("cart");

	getData().then((data) => {
		console.log(data);
	});
};

export default second;
