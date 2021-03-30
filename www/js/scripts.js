// script css test user incorrecto

function alertDanger() {
    var x = document.getElementById("alertrut");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
};

function toggleDropDownUser() {
    var element = document.getElementById("dropUser");
    element.classList.toggle("hidden");
};

function toggleDropDownAdmin() {
    var element = document.getElementById("dropAdmin");
    element.classList.toggle("hidden");
};


function openModal() {

    var modalBack = document.getElementById("modal-overlay");
    var modal = document.getElementById("modal");

    modalBack.classList.toggle("hidden");
    modal.classList.toggle("hidden");

}

function closeModal() {

    var modalBack = document.getElementById("modal-overlay");
    var modal = document.getElementById("modal");

    modalBack.classList.toggle("hidden");
    modal.classList.toggle("hidden");
}

function openModalEdit() {

    var modalBackEdit = document.getElementById("modal-overlay-edit");
    var modalEdit = document.getElementById("modal-edit");

    modalBackEdit.classList.toggle("hidden");
    modalEdit.classList.toggle("hidden");

}

function closeModalEdit() {

    var modalBackEdit = document.getElementById("modal-overlay-edit");
    var modalEdit = document.getElementById("modal-edit");

    modalBackEdit.classList.toggle("hidden");
    modalEdit.classList.toggle("hidden");
}