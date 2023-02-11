let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
const myAlert = document.querySelector(".alert");
const btnSend = document.querySelector("btn-send");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

menu.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

myAlert.onclick = () => {
  myAlert.classList.toggle("d-none");
  myAlert.querySelector("d-none").innerHTML = "d-block";
};
