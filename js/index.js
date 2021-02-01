const modalShowButton = document.querySelector(".modal-show-button");
const modalForm = document.querySelector(".modal-search");

modalShowButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (modalForm.classList.contains("display-none")) {
        modalForm.classList.remove("display-none");
    }) else {modalForm.classList.add("display-none");
}









