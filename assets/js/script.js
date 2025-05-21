// // Daftarkan plugin ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// // Animasi untuk box
// const boxAnimation = gsap.to(".hero", {
//     height: 400,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     duration: 1
// });

// // Setup ScrollTrigger
// ScrollTrigger.create({
//     trigger: ".hero",
//     start: "top top",
//     end: "bottom top", // Animasi selesai ketika bottom box mencapai top viewport
//     animation: boxAnimation,
//     scrub: 1,
//     pin: true,
//     markers: false,
//     onEnter: () => {

//     },
//     onLeave: () => {

//     }
// });

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
    if (window.scrollY >= 130) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
});
// Animasi teks (opsional)

const sidebar = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".overlay-sidebar");
if(sidebar && overlay){
    function OpenSidebar(){
        sidebar.style.transform = "translateX(0%)";
        overlay.style.display = "block";
    }
    function CloseSidebar(){
        sidebar.style.transform = "translateX(100%)";
        overlay.style.display = "none";
    }
}