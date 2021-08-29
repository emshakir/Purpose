let nav = document.getElementById("navbar");
let scrolled = false;
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    nav.classList.remove("bar");
    if (!scrolled) {
      nav.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      nav.style.transform = "translateY(0)";
      scrolled = true;
    }, 300);
  } else {
    nav.classList.add("bar");
    scrolled = false;
  }
};

// Smooth Scrolling
$("#navbar a, .btn, .flex_btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
