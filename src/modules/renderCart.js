const renderCart = (cart) => {
	const cartWrapper = document.querySelector(".cart-wrapper");

	// cleans duplicated rendering of goods
	cartWrapper.innerHTML = "";

	// if cart is empty, show message 'your cart is empty'
	if (cart.length === 0) {
		cartWrapper.insertAdjacentHTML(
			"beforeend",
			`
			<div id="cart-empty">Ваша корзина пока пуста</div>
			`
		);
	} else {
		// iterating cart array
		cart.forEach((item) => {
			cartWrapper.insertAdjacentHTML(
				"beforeend",
				`
				<div class="card" data-key="${item.id}">
          ${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ""}
					<div class="card-img-wrapper">
						<span
							class="card-img-top"
							style="
								background-image: url(${item.img});
							"
						></span>
					</div>
					<div class="card-body justify-content-between">
						<div class="card-price">${item.price} ₽</div>
							<h5 class="card-title">${item.title}</h5>
							<button class="btn btn-primary">Удалить</button>
						</div>
				</div>
      `
			);
		});
	}
};

export default renderCart;
