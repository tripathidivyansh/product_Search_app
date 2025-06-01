function search() {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const products = document.querySelectorAll(".product");
  const productTitles = document.querySelectorAll(".product h2");

  products.forEach((product, index) => {
    const title = productTitles[index].innerText.toUpperCase();
    if (title.includes(searchBox)) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}
