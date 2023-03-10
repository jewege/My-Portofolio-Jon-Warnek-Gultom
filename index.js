/* Sidebar Responsive*/
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

/*Scroll Animation */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElments = document.querySelectorAll(".hidden");
hiddenElments.forEach((el) => observer.observe(el));

// carousel
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector(".carousel").children;
const totalImages = images.length;
let index = 0;

prev.addEventListener("click", () => {
  nextImage("prev");
});

next.addEventListener("click", () => {
  nextImage("next");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main-carousel");
  }
  images[index].classList.add("main-carousel");
}

//to Social Media

function toIg() {
  open("https://instagram.com/uuarneck_gltm");
}
function toFb() {
  open("https://www.facebook.com/uuarnek.gltm/");
}
function toTw() {
  open("https://twitter.com/jwar001");
}
function toLn() {
  open("https://www.linkedin.com/in/jon-warnek-gultom-20953b23a");
}

function toWa() {
  open("https://wa.me/6282366935302/?text=Hello");
}
function toEmail() {
  open("mailto:jonwarnekgultom@gmail.com");
}

function toProject0() {
  open("https://jewege.github.io/Build-a-Blackjack-Game/");
}
function toProject1() {
  open("https://youtu.be/m1EuO-vsivE");
}
function toProject2() {
  open("https://youtu.be/kK6J3loAGYs");
}
function toProject3() {
  open("https://github.com/jewege/Todolist-Yang-sangat-sederhana-dengan-Javascript");
}
function toProject4() {
  open(
    "https://github.com/jewege/Membuat-Navbar-responsive-dengan-menggunakan-HTML-CSS-JavaScript",
  );
}
function toProject5() {
  open("https://github.com/jewege/Contoh-Company-Profile");
}
function toProject6() {
  open("https://github.com/jewege/Calculator-dengan-HTML-CSS-JavaScript");
}
function toProject8() {
  open("https://github.com/jewege/my-vue-todoApp");
}
function toProject9() {
  open("https://github.com/jewege/vue-weather-app");
}
function toProject10() {
  open("https://github.com/jewege/ecommerce_catalog");
}
