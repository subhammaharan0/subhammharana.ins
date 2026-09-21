
/* =========================
   MOBILE MENU
========================= */

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");


/* OPEN / CLOSE MENU */

menu.addEventListener("click", function(){

    menu.classList.toggle("active");

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(function(link){

        link.addEventListener("click", function(){

            menu.classList.remove("active");

            navLinks.classList.remove("active");

        });

    });


/* =========================
   CLOSE MENU WHEN CLICKING
   OUTSIDE NAVBAR
========================= */

document.addEventListener("click", function(event){

    const clickedInsideNavbar =
        event.target.closest(".navbar");


    if(!clickedInsideNavbar){

        menu.classList.remove("active");

        navLinks.classList.remove("active");

    }

});
