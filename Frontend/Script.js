async function loadProducts() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  const list = document.getElementById("productList");
  list.innerHTML = "";
  data.forEach(p => {
    list.innerHTML += `<li>${p.name} - ₹${p.price} (Stock: ${p.stock})</li>`;
  });
}

async function addProduct() {
  const product = {
    name: name.value,
    price: price.value,
    stock: stock.value
  };

  await fetch("http://localhost:3000/add-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });

  loadProducts();
}

loadProducts();
