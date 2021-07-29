import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainData } from "../data/MainData";

gsap.registerPlugin(ScrollTrigger);

// Get sections class
const sections = [];
MainData.forEach((element) => {
  sections.push("." + element.title);
});
// Define a scrollTrigger
const scrollTrigger = (trigger) => {
  return {
    trigger: trigger,
    scroller: ".main",
    start: "top 10%",
    end: "center 40%",
    toggleActions: "play reverse play reverse",
  };
};

const Animation = () => {
  //Title Animation
  sections.forEach((section) => {
    gsap.from(`${section}-section .title`, {
      scrollTrigger: scrollTrigger(section + "-section"),
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
    // Nav Intersection
    gsap.from(`${section}-nav .button`, {
      scrollTrigger: {
        trigger: section + "-section",
        scroller: ".main",
        start: "top 10%",
        end: "center 40%",
        toggleClass: {
          targets: `${section}-nav .button`,
          className: "active",
        },
      },
    });
  });
  //introduction
  gsap.from(".jumbotron__left *", {
    scrollTrigger: scrollTrigger("#introduction"),
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.25,
  });
  gsap.from(".jumbotron__right *", {
    scrollTrigger: scrollTrigger("#introduction"),
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.25,
  });
  gsap.from(".jumbotron__right--mobile *", {
    scrollTrigger: scrollTrigger("#introduction"),
    y: 500,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.25,
  });
  //goals
  gsap.from("#goal .content-box:nth-child(1) h4", {
    scrollTrigger: scrollTrigger("#goal"),
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });
  gsap.from("#goal .content-box:nth-child(2) h4", {
    scrollTrigger: scrollTrigger("#goal"),
    x: 500,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });
  gsap.from("#goal .content-box .rect", {
    scrollTrigger: scrollTrigger("#goal"),
    scale: 0,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.4)",
    stagger: 0.2,
  });
  //skills
  gsap.from("#skills .content-box li", {
    scrollTrigger: scrollTrigger("#skills"),
    x: 200,
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
    stagger: 0.1,
  });
  gsap.from("#skills .content-box h4", {
    scrollTrigger: scrollTrigger("#skills"),
    y: 300,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.4)",
    stagger: 0.1,
  });
  gsap.from("#skills .content-box .rect", {
    scrollTrigger: scrollTrigger("#skills"),
    opacity: 0,
    scale: 0,
    duration: 0.7,
    ease: "back.out(1.7)",
    stagger: 0.1,
  });
  // projects
  gsap.from("#projects .controller", {
    scrollTrigger: scrollTrigger("#projects"),
    opacity: 0,
    scale: 0,
    duration: 0.7,
    ease: "back.out(1.7)",
    stagger: 0.1,
  });
  gsap.from("#projects .swiper-pagination", {
    scrollTrigger: scrollTrigger("#projects"),
    opacity: 0,
    scale: 0,
    duration: 0.7,
    ease: "back.out(1.7)",
    delay: 0.3,
  });
  gsap.from("#projects .swiper-wrapper", {
    scrollTrigger: scrollTrigger("#projects"),
    opacity: 0,
    y: 500,
    duration: 0.7,
    ease: "back.out(1.4)",
    delay: 0.3,
  });
};

export default Animation;
