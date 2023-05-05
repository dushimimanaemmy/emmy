var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menux");
sideNav.style.right = "-300px;";
// menuBtn.onclick= function menuBtn() {
menuBtn.onclick = function () {
  if (sideNav.style.right == "-300px") {
    sideNav.style.right = "0";
    menux.src = "close.png";
  } else {
    sideNav.style.right = "-300px";
    menux.src = "bars2.png";
  }
}