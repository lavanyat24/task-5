const cartItems = [];

    function addToCart(item) {
      cartItems.push(item);
      updateCart();
    }

    function removeFromCart(index) {
      cartItems.splice(index, 1);
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById("cart-items");
      const cartCount = document.getElementById("cart-count");
      const cartCountPopup = document.getElementById("cart-count-popup");
      cartList.innerHTML = "";

      cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        removeBtn.style.marginLeft = "10px";

        li.appendChild(removeBtn);
        cartList.appendChild(li);
      });

      cartCount.textContent = cartItems.length;
      cartCountPopup.textContent = cartItems.length;
    }

    function toggleCart() {
      const cartPopup = document.getElementById("cart-popup");
      cartPopup.classList.toggle("hidden");
    }

    
// contact

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We'll get back to you soon.");
  this.reset();
});
