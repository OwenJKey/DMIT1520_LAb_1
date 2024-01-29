 
const dialog = document.querySelector("#menu-element");
const showButtonRef = document.querySelector("#btn-open");
const closeButtonRef = document.querySelector("#btn-close");

showButtonRef.addEventListener("click", openDialogFunction);
closeButtonRef.addEventListener("click", closeDialogFunction);

function openDialogFunction(e) {
    dialog.showModal();
}

function closeDialogFunction(e) {
    dialog.close();
}



