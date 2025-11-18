// code incapsulation; this helps use same name for functions and variables,
// since they are not visible globally
const cart = () => {
	const cartBtn = document.getElementById("cart");
	console.dir(cartBtn); // shows element structure

	// open hidden cart items by click
	const cartItems = document.querySelector(".cart");
	console.dir(cartItems); // shows element structure
	const openCart = () => {
		cartItems.style.display = "flex";
	};

	// onclick method allows only one function
	//cartBtn.onclick = openCart;

	// addEventListener can be used many times
	cartBtn.addEventListener("click", openCart);
	// this is for fun
	cartBtn.onclick = function () {
		console.log("Wow! Andrew clicked the button!");
	};

	// close cart items window by click
	const cartCloseBtn = cartItems.querySelector(".cart-close"); // faster way to find classname
	const closeCart = () => {
		cartItems.style.display = "";
	};

	//cartCloseBtn.onclick = closeCart;
	cartCloseBtn.addEventListener("click", closeCart);

	cartCloseBtn.onclick = function () {
		console.log("Wow! Andrew clicked the button again!");
	};
};

export default cart;
