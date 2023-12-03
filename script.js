// Smooth scrolling effect for anchor links
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("a[href^='#']");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    });
  }
});