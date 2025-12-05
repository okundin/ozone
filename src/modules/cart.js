import renderCart from "./renderCart";
import postData from "./postData";

// code incapsulation; this helps use same name for functions and variables,
// since they are not visible globally
const cart = () => {
	const cartBtn = document.getElementById("cart");
	const cartItems = document.querySelector(".cart");
	const cartCloseBtn = cartItems.querySelector(".cart-close"); // faster way to find classname
	const goodsContainer = document.querySelector(".goods");
	const cartTotal = cartItems.querySelector(".cart-total > span");
	const cartWrapper = document.querySelector(".cart-wrapper");
	const orderSubmitBtn = cartItems.querySelector(".cart-confirm");

	// open hidden cart items by click
	const openCart = () => {
		// shows either cart with items or empty cart
		const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
		cartItems.style.display = "flex";
		renderCart(cart);
		// calculating cart total amount; reduce method iterates cart items
		cartTotal.textContent = cart.reduce((sum, cartItem) => {
			return sum + cartItem.price;
		}, 0); // 0 is the start value
	};

	// addEventListener can be used many times
	cartBtn.addEventListener("click", openCart);

	// close cart items modal window by click
	const closeCart = () => {
		cartItems.style.display = "";
	};

	cartCloseBtn.addEventListener("click", closeCart);

	// goodsContainer
	goodsContainer.addEventListener("click", (event) => {
		if (event.target.classList.contains("btn-primary")) {
			const card = event.target.closest(".card");
			const key = card.dataset.key; // capturing goods data-key
			// getting goods from localStorage
			const goods = localStorage.getItem("goods"); // returns a string of goods
			const goodsArray = JSON.parse(goods); // converts the string of goods to array of goods in JSON format
			// shows either cart with items or empty cart
			const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
			// get an item from the goods array using data-key value
			const goodsItem = goodsArray.find((item) => {
				return item.id === key;
			});
			// add the item to the user cart
			cart.push(goodsItem);
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	});

	// cart handler: remove cart items
	cartWrapper.addEventListener("click", (event) => {
		if (event.target.classList.contains("btn-primary")) {
			// get all cart items
			const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
			// capturing item data-key
			const card = event.target.closest(".card");
			const key = card.dataset.key;

			// remove cart item from the cart array
			const index = cart.findIndex((item) => {
				return item.id === key;
			});
			cart.splice(index, 1);

			// save new array of items to the local storage after item removal
			localStorage.setItem("cart", JSON.stringify(cart));

			renderCart(cart);

			// calculating cart total amount; reduce method iterates cart items
			cartTotal.textContent = cart.reduce((sum, cartItem) => {
				return sum + cartItem.price;
			}, 0);
		}
	});

	// order submit handler
	orderSubmitBtn.addEventListener("click", () => {
		// get all cart items
		const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
		// send items
		postData(cart).then(() => {
			// clean local storage with key 'cart'
			localStorage.removeItem("cart");
			// render updated cart
			renderCart([]); // render cart with empty array
			// recalculate cart total amount; reduce method iterates cart items
			cartTotal.textContent = 0;
		});
	});
};

export default cart;
