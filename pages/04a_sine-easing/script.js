import gsap from "gsap";

// Get the scroll to top button
const scrollToTopBtn = document.querySelector(".scroll-to-top");

// Set initial state
gsap.set(scrollToTopBtn, {
    opacity: 0,
    y: 100,
})

// Floating animation
const floatingAnimation = gsap.to(scrollToTopBtn, {
    y:-10,
    duration: 1.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    paused: true,
});

let scrollTimeout;
let hasAppeared = false;

// Show or hide based on scroll position
window.addEventListener("scroll", () => {
    // Pause animation if user is scrolling
    if (scrollToTopBtn.classList.contains("show")) {
        floatingAnimation.pause();
    }

    // Clear existing timeout
    clearTimeout(scrollTimeout);

    // Set new timeout to resume animation after scrolling stops
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
            if (!hasAppeared) {
                hasAppeared = true;

                // Set initial position off-screen from the right
                gsap.set(scrollToTopBtn, {
                    y: 100,
                    opacity: 0,
                });

                scrollToTopBtn.classList.add("show");

                // Slide in animation
                gsap.to(scrollToTopBtn, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "sine.out",
                    onComplete: () => {
                        // Start floating animation
                        floatingAnimation.resume();
                    }
                });
            } else {
                // Just show and resume floating for subsequent scrolls
                scrollToTopBtn.classList.add("show");
                floatingAnimation.resume();
            }
        } else {
            scrollToTopBtn.classList.remove("show");
            floatingAnimation.pause();
            hasAppeared = false;

            // Animate out and reset
            gsap.to(scrollToTopBtn, {
                opacity: 0,
                duration: 0.3,
                ease: "sine.in"
            })
        }
    }, 150); // Resume after 150ms of no scrolling
});

// Hover scale animation
scrollToTopBtn.addEventListener("mouseenter", () =>{
    gsap.to(scrollToTopBtn, {
        scale: 1.15,
        duration: 0.4,
        ease: "sine.out",
    });
    floatingAnimation.pause();
});

scrollToTopBtn.addEventListener("mouseleave", () =>{
    gsap.to(scrollToTopBtn, {
        scale: 1,
        duration: 0.3,
        ease: "sine.in",
    });
    floatingAnimation.resume();
});

// Scroll to top with GSAP animation
scrollToTopBtn.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})