let editIndex = -1; // Tracks if editing

function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let fileInput = document.getElementById("image");
    let file = fileInput.files[0];

    if (!name || !price || !description) {
        alert("Fill everything");
        return;
    }

    let products = getProducts();

    // EDIT MODE
    if (editIndex !== -1) {

        if (file) {
            let reader = new FileReader();

            reader.onload = function(e) {
                products[editIndex] = {
                    name: name,
                    price: price,
                    description: description,
                    image: e.target.result
                };

                saveProducts(products);
                displayProducts();
                clearInputs();
                editIndex = -1;
            };

            reader.readAsDataURL(file);

        } else {
            products[editIndex].name = name;
            products[editIndex].price = price;
            products[editIndex].description = description;

            saveProducts(products);
            displayProducts();
            clearInputs();
            editIndex = -1;
        }

        return;
    }

    // ADD MODE
    if (!file) {
        alert("Select an image");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e) {

        products.push({
            name: name,
            price: price,
            description: description,
            image: e.target.result
        });

        saveProducts(products);
        displayProducts();
        clearInputs();
    };

    reader.readAsDataURL(file);
}


function displayProducts() {

    let container = document.getElementById("products");
    if (!container) return;

    let products = getProducts();

    container.innerHTML = "";

    products.forEach((product, index) => {

        container.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" width="100">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p>₦${product.price}</p>

            <button class="edit-btn" onclick="editProduct(${index})">
                Edit
            </button>

            <button class="delete-btn" onclick="deleteProduct(${index})">
                Delete
            </button>

        </div>
        `;
    });
}


function editProduct(index) {

    let products = getProducts();

    let product = products[index];

    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("description").value = product.description;

    editIndex = index;
}


function deleteProduct(index) {

    let products = getProducts();

    products.splice(index, 1);

    saveProducts(products);

    displayProducts();
}


function clearInputs() {

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";

}


displayProducts();


//lock screen////

let pin = "";
let correctPin = "123678"; // CHANGE THIS

// Always lock on refresh
window.onload = function() {
    lockScreen();
}

// Lock screen
function lockScreen() {
    document.getElementById("lockScreen").style.display = "flex";
}

// Unlock screen
function unlockScreen() {
    document.getElementById("lockScreen").style.display = "none";
}

// Press number
function press(num) {

    if(pin.length < 6) {
        pin += num;
        updateDots();
    }

    if(pin.length === 6) {
        checkPin();
    }
}

// Update dots
function updateDots() {

    let dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
        dot.classList.remove("filled");

        if(index < pin.length) {
            dot.classList.add("filled");
        }
    });

}

// Delete
function delPin() {
    pin = pin.slice(0, -1);
    updateDots();
}

// Clear
function clearPin() {
    pin = "";
    updateDots();
}

// Check PIN
function checkPin() {

    if(pin === correctPin) {

        unlockScreen();

    } else {

        alert("Wrong Passcode");

        pin = "";
        updateDots();

    }

}


//script hamburger///
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("open");
});

