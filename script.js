gsap.set(".slidesm", {
  scale: 5,
});

function homepageAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 4,
      // pin: true,
      markers: true,
    },
  });

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
      },
      "b"
    );
}

function realClassAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom top",
      markers: true,
      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function teamAnimation() {
  document.querySelectorAll(".listelem").forEach((el) => {
    el.addEventListener("mousemove", (dets) => {
      gsap.to(el.querySelector(".picture"), {
        opacity: 1,
        duration: 0.5,
        ease: Power4,
        // for moving this picture with mouse for a certain range , we use mapRange util.
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
      });
    });

    el.addEventListener("mouseleave", (dets) => {
      gsap.to(el.querySelector(".picture"), {
        opacity: 0,
        duration: 0.5,
        ease: Power4,
      });
    });
  });
}

homepageAnimation();
realClassAnimation();
teamAnimation();

