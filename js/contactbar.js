var myContactBar = document.getElementById("contactbar"); // get the bar
var myMenuItem = document.querySelector("nav [href='#contact']"); // get the Contact menu item

myMenuItem.addEventListener("click", handler, false);

function handler(e) {
  if (myContactBar.classList.contains("cb_hide")) {
    myContactBar.classList.remove("cb_hide");
    myContactBar.classList.add("cb_show");
  }
  else {
    myContactBar.classList.remove("cb_show");
    myContactBar.classList.add("cb_hide");
  }
}
