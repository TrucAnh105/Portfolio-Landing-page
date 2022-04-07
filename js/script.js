$(document).ready(function(){
    //typing animation
    var typed = new Typed(".typing", {
        strings:["Photographer","UI/UX Design","Web Development","Graphic Design"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    TransitionDuration: "0,6s",
  });