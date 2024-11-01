const userModal = document.getElementById("userModal");

const modalUserName = document.getElementById("modalUserName");
const modalUserAge = document.getElementById("modalUserAge");
const modalUserCity = document.getElementById("modalUserCity");
const modalUserDescription = document.getElementById("modalUserDescription");

userModal.addEventListener("shown.bs.modal", (evt) => {
  const button = evt.relatedTarget;
  const userId = button.getAttribute("data-user-id");
  const userData = users.find((user) => user.id === parseInt(userId, 10));

  if (userData) {
    modalUserName.textContent = userData.name;
    modalUserAge.textContent = userData.age;
    modalUserCity.textContent = userData.city;
    modalUserDescription.textContent = userData.description;
  }
});

userModal.addEventListener("hidden.bs.modal", () => {
  modalUserName.textContent = "";
  modalUserAge.textContent = "";
  modalUserCity.textContent = "";
  modalUserDescription.textContent = "";
});
