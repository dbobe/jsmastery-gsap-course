import gsap from "gsap";

gsap.to(".btn", {
    y: -20,
    duration: 0.4,
    ease: "power4.out",
})

gsap.to(".toast", {
    x: -300,
    duration: 1.2,
    ease: "power2.out",
});

gsap.to(".card", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
});