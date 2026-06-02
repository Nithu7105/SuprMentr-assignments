const products = [
    {
        name: "Laptop",
        category: "electronics",
        price: 60000,
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Shirt",
        category: "fashion",
        price: 1200,
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Phone",
        category: "electronics",
        price: 30000,
        image: "https://via.placeholder.com/200"
    }
];

// Display products
function displayProducts(items) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    items.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
            </div>
        `;
    });
}

// Filter
function filterProducts() {
    const value = document.getElementById("filter").value;

    if (value === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === value);
        displayProducts(filtered);
    }
}

// Initial load
displayProducts(products);
function searchProducts() {
    const value = document.getElementById("search").value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
}