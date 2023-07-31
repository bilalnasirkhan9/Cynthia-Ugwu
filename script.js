var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-15',
        opacity: 0,
        duration: 1.3,
        ease: Expo.easeInOut
    })

    tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        stagger: .2,
        delay: -1
    })
    tl.from("#herofooter", {
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1
    })


}

function circleChaptaKaro() {
    // define defaule scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        //    var xdiff = dets.clientX - xprev;
        //    var ydiff = dets.clientY - yprev;
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale)
        timeout = setTimeout(function () {
            document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

// teeno element ko select karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pta karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab
// mouse ki x and y position pata karo, ab mouse ki x and y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mosue tez chale
// waise waise rotation bhi tez ho jaye

 document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets){

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        });

    });
 });
 document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function (dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top
       diffrot = dets.clientX - rotate;
       rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot * 0.5),
        });

    });
 });


