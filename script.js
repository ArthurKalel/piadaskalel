function pesquisa() {
  var p = document.getElementById("pesquisa")

  if (p.style.display == "flex") {
    p.style.display = "none"
  } else {
    p.style.display = "flex"
  }
}


function abremenu() {
  var n = document.getElementById("nav");
  var e = document.getElementById("english")
  if (n.style.display == "flex") {
    n.style.display = "none";
    e.style.display = "none";

  } else {
    n.style.display = "flex";
    e.style.display = "flex";
  }

}


function fechamenu() {
  var f = document.getElementById("nav");

  if (f.style.display == "flex") {
    f.style.display = "none";
  } else {
    f.style.display = "flex";
  }

}

function loadPage(page) {
  document.getElementById('content-frame').src = page;
}
