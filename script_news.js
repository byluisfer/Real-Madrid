// All the modal form the News
document.addEventListener("DOMContentLoaded", function () {
  var imgMbappe = document.querySelector(".gol-news");
  var modalMbappe = document.getElementById("golModal");

  imgMbappe.onclick = function () {
    modalMbappe.style.display = "block";
  };

  var imgbrahim = document.querySelector(".brahim-news");
  var modalbrahim = document.getElementById("brahimModal");

  imgbrahim.onclick = function () {
    modalbrahim.style.display = "block";
  };

  var imgbellingham = document.querySelector(".bellingham-news");
  var modalbellingham = document.getElementById("bellinghamModal");

  imgbellingham.onclick = function () {
    modalbellingham.style.display = "block";
  };

  var imgsalary = document.querySelector(".salary-news");
  var modalsalary = document.getElementById("salaryModal");

  imgsalary.onclick = function () {
    modalsalary.style.display = "block";
  };

  var imgkross = document.querySelector(".kross-news");
  var modalkross = document.getElementById("krossModal");

  imgkross.onclick = function () {
    modalkross.style.display = "block";
  };

  var imgmodric = document.querySelector(".modric-news");
  var modalmodric = document.getElementById("modricModal");

  imgmodric.onclick = function () {
    modalmodric.style.display = "block";
  };

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
