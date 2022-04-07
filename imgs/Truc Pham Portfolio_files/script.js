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