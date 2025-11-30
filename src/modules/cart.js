// code incapsulation; this helps use same name for functions and variables,
// since they are not visible globally
const cart = () => {
	const cartBtn = document.getElementById("cart");

	// open hidden cart items by click
	const cartItems = document.querySelector(".cart");

	const openCart = () => {
		cartItems.style.display = "flex";
	};

	// addEventListener can be used many times
	cartBtn.addEventListener("click", openCart);

	// close cart items window by click
	const cartCloseBtn = cartItems.querySelector(".cart-close"); // faster way to find classname
	const closeCart = () => {
		cartItems.style.display = "";
	};

	cartCloseBtn.addEventListener("click", closeCart);
};

export default cart;
