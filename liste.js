var list = document.querySelectorAll("li");
// Birebir class içinde yapabilirsiniz.

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", function() {
    // list[i].classList.add("ustunde");
    this.classList.add("ustunde");
  });

  list[i].addEventListener("mouseout", function() {
    this.classList.remove("ustunde");
  });
  list[i].addEventListener("click", function() {
    this.classList.toggle("tamam");
  });
}

function goster() {
  alert("Bastınız");
}

function renkDegis(element, color) {
  //bir elementin
  if (element.style.color === color) {
    element.style.color = "";
  } else {
    element.style.color = color;
    //this.style.color = "red";
  }
}
