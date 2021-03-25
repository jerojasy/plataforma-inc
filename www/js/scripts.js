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