gsap.from("h2 div", 1.5, {
    yPercent:100,
    ease: "power4.inOut",
    stagger: {
        amount: 0.5,
    },
});

gsap.to("h2", 1.5, {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease:"power4.inOut",
    stagger: {
        amount: 0.5,
    },
});

document.addEventListener("DOMContentLoaded",
function () {
    let overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", function (){ 
        gsap.to("h2 div", 1.5, {
            yPercent: -100,
            ease:"power4.inOut",
            stagger: {
                amount: 0.5,
            },
        });
        gsap.to("h2", 1.5, {
            clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
            ease:"power4.inOut",
            stagger: {
                amount: 0.5,
            },
        },
        0
        ); 

        gsap.to(".overlay",2,{
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            ease: "power4.inOut",
        });

        gsap.to(".img",2,{
            clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
            ease: "power4.inOut",
            stagger: {
                amount: 1.5,
            },
        });

        gsap.to(".loader",2,{
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            ease: "power4.inOut", 
            delay: 2,
        });
        });
});

 