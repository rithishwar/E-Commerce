let cartItems = [];

function addToCart(product, price) {
    cartItems.push({ product, price });
    alert(`${product} added to the cart!`);
}

function openCart() {
    const cartItemsList = document.getElementById("cartItems");
    cartItemsList.innerHTML = "";

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.product} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    document.getElementById("cartModal").style.display = "flex";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}
