const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://www.portronics.com/cdn/shop/files/Portronics_Muff_M3_best_headphones_under_5000.jpg?v=1744893854",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuNds2aqtvtZi95-SA0iobHRiT7w8qJfu6g&s",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 29.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWUv-2xCDMPg1gIJVmVdr7NhKm6Y5wAIvZQ&s",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 59.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrjigMTjlygSQ2BIgzOAYG2izFjq7QknjkQ&s",
  },
  {
    id: 6,
    name: "4K Action Camera",
    price: 119.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2EoOrrJ7sspebwvIdOAtxNMmvNWl2zxNbQ&s",
  },
  {
    id: 7,
    name: "Laptop Backpack",
    price: 39.49,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLEV0-jzKtmkpIgkJvFXTQSZyFDMNvSQmVQ&s",
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    price: 99.95,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMfH2m0xD_CfcCYmuyKj2ocSxNfti2QHgOw&s",
  },
  {
    id: 9,
    name: "USB-C Charging Cable (3 Pack)",
    price: 14.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gZPHkksg4m1mcXuxAiMC2n7zHFXUMS4LTQ&s",
  },
  {
    id: 10,
    name: "Smartphone Tripod Stand",
    price: 24.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqSCmCKy6fvc66zWz6Qj1Jn5PRqzXQVXegQ&s",
  },
 
];

let cartCount = 0;
const productGrid = document.getElementById("productGrid");
const cartCountEl = document.getElementById("cartCount");

// Display products
function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    card.querySelector("button").addEventListener("click", () => addToCart());
    productGrid.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  cartCountEl.textContent = cartCount;
}

// Search functionality
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

// Initial render
renderProducts(products);
