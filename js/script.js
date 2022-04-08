const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));


window.addEventListener("scroll", () => {
  skillsEffect();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

 

$(document).ready(function(){
 //typing animation
    var typed = new Typed(".typing", {
        strings:["Photographer","UI/UX Design","Web Development","Graphic Design"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

 //moving button
const filter_btns = document.querySelectorAll(".filter-btn");
 
filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
      console.log('click here');
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

//transition grid
$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    TransitionDuration: "0,6s",
  });

  