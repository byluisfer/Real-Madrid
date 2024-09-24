//when the website reload all
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces dentro del nav
  const navLinks = document.querySelectorAll("nav ul li a");
  const checkbox = document.getElementById("check");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Desmarca el checkbox
      checkbox.checked = false;
    });
  });
});

//To see the other modal from the news
document.addEventListener("DOMContentLoaded", function () {
  // Interacción con las imágenes para abrir los modales
  var imgMbappe = document.querySelector(".mbappe-news");
  var modalMbappe = document.getElementById("mbappeModal");
  imgMbappe.onclick = function () {
    modalMbappe.style.display = "block";
  };

  var imgBellingham = document.querySelector(".bellingham-news");
  var modalBellingham = document.getElementById("bellinghamModal");
  imgBellingham.onclick = function () {
    modalBellingham.style.display = "block";
  };

  var imgNfl = document.querySelector(".nfl-news");
  var modalNfl = document.getElementById("nflModal");
  imgNfl.onclick = function () {
    modalNfl.style.display = "block";
  };

  // Cerrar modales
  var spans = document.getElementsByClassName("close");
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      this.parentElement.parentElement.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };
});
