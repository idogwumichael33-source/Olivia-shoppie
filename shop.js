function loadShopProducts() {

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let container = document.getElementById("shop-products");

    if (!container) return;

    products.forEach(product => {

        let message = `Hello, I'm interested in ${product.name} - ₦${product.price}`;
        let link = `https://wa.me/2349167781152?text=${encodeURIComponent(message)}`;

        container.innerHTML += `
        <div class="pro">
            <img src="${product.image}" alt="product">

            <div class="des">
                <h5>${product.name}</h5>

                <span>${product.description}</span>

                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>

                <h4>₦${product.price}</h4>
            </div>

            <a href="${link}" target="_blank">
                <i class="fa-brands fa-whatsapp cart"></i>
            </a>
        </div>
        `;
    });
}

loadShopProducts();


//script hamburger///
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("open");
});
