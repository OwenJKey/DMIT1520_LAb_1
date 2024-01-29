 
const dialog = document.querySelector("#dialog")
const showButtonRef = document.querySelector("dialog + button");
const closeButtonRef = document.querySelector("#button-close");



showButtonRef.addEventListener("click", () => {dialog.showModal();});
closeButtonRef.addEventListener("click", () => {dialog.close();});

