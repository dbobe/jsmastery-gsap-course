import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const repeatBtn = document.querySelector(".repeat");
const box = document.querySelector(".box");

const animation =gsap.to(".box", {
    opacity: 1,
    rotation: 360,
    borderRadius: '50%',
    scale: 1.25,
    duration: 2,
})

play.addEventListener("click", () => {
    animation.play();
})

pause.addEventListener("click", () => {
    animation.pause();
})

resume.addEventListener("click", () => {
    animation.resume();
})

restart.addEventListener("click", () => {
    animation.restart();
})

reverse.addEventListener("click", () => {
    animation.reverse();
})

kill.addEventListener("click", () => {
    animation.kill();
})

yoyo.addEventListener("click", () => {
    const isYoyoActive = animation.vars.yoyo;
    animation.yoyo(!isYoyoActive);

    if (!isYoyoActive) {
        animation.repeat(-1);
        yoyo.classList.add("active");
        box.classList.add("yoyo-active");
        box.classList.remove("repeat-active");
    } else {
        animation.yoyo(false);
        animation.repeat(0);
        yoyo.classList.remove("active");
        box.classList.remove("yoyo-active");
    }

    animation.restart();
})

repeatBtn.addEventListener("click", () => {
    const currentRepeat = animation.repeat(2);

    if (currentRepeat === 2) {
        animation.repeat(2);
        box.classList.add("repeat-active");
        box.classList.remove("yoyo-active");
        repeatBtn.classList.add("active");
    } else {
        animation.repeat(0);
        box.classList.remove("repeat-active");
        repeatBtn.classList.remove("active");
    }
})