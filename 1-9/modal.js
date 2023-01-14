const modal = document.getElementById("modal");
const createBottun = document.getElementById("create-button");
const closeBottun = document.getElementById("close-bottun");
const modalHeader = document.querySelector("h2");
const modalBody = document.querySelector(".modal-body");
const modalFooter = document.querySelector(".modal-footer");

function modalOpen() {
  modal.style.display = "block";
}
function modalClose() {
  modal.style.display = "none";
}

function resetModal() {
  modalBody.innerHTML = "";
  modalFooter.innerHTML = "";
  modalHeader.innerHTML = "";
}

closeBottun.onclick = modalClose;

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
