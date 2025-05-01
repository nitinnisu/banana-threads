let quantity = 1;

function increaseQty() {
  quantity++;
  document.getElementById("quantity").textContent = quantity;
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("quantity").textContent = quantity;
  }
}

function toggleModal() {
  const modal = document.getElementById("sizeChartModal");
  modal.classList.toggle("show");
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("sizeChartModal");
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
