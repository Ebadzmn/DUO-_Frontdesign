function smoothScroll () {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        lerp:0.02

    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

smoothScroll()




var carsor = document.querySelector ('.carsor')
var main = document.querySelector ('.main')
main.addEventListener('mousemove' , function (dets) {
   gsap.to (carsor , {
       x : dets.clientX + 20+ 'px',
       y : dets.clientY + 20+ 'px'
   })
})










var tl = gsap.timeline ({
    scrollTrigger:{
        trigger:'.page1 h1',
        scroller:'.main',
        // markers:true,
        start : 'top 29%',
        end : 'top 0',
        scrub : 3
    }
}) 


var tl2 = gsap.timeline ({
    scrollTrigger:{
        trigger:'.page1 h1',
        scroller:'.main',
        // markers:true,
        start : 'top -95%',
        end : 'top -130',
        scrub : 3
    }
}) 


// var tl3 = gsap.timeline ({
//     scrollTrigger:{
//         trigger:'.page1 h1',
//         scroller:'.main',
//         markers:true,
//         start : 'top 200%',
//         end : 'top -130',
//         scrub : 3
//     }
// })



tl.to ('.page1 h1' , {
    x:-120,
},'anim')

tl.to ('.page1 h2' , {
    x:120,
},'anim')

tl.to ('.page1' ,{

    opacity:0,

},'anim')
tl.to ('.page1 p' , {
    opacity:0,
},'anim')
tl.to ('.page2 video' , {
  width: '85%',
} , 'anim')


tl2.to ('.page3' , {
    backgroundColor : 'white',
    color : 'black',
})


var tl3 = gsap.timeline ({
    scrollTrigger : {
        trigger : '.page6',
        scroller : '.main',
        scrub : 2,
        // markers : true,
        start : 'top 10%',
        end : 'top 0'
    }
})

tl3.to ('.page6' , {
    backgroundColor : 'white',
    color : 'black',
},'anim')


// tl3.from ('.page6 h1' , {
//    opacity: 0,
// },'anim')

tl3.from ('.page6 img' , {
   x: -800,
   duration : 1,
   ease : 'fade.inout(1, 0.3)'
},'anim')


tl3.from ('.page6 video' , {
    x: 900,
    duration : 1,
    ease : 'fade.inout(1, 0.3)'
 },'anim')


// gsap.from ('.page1 h1' , {
//     x : -300 ,
//     opacity : 0,
//     duration : 1,
//     delay : 0.3  
// })

// gsap.from ('.page1 h2' , {
//     x : 300 ,
//     opacity : 0,
//     duration : 1,
//     delay : 0.3  
// })





var boxs = document.querySelectorAll('.pagecontent')

boxs.forEach ( function (box) {
    box.addEventListener('mouseenter' , function () {
        var att = box.getAttribute('data-image')
        carsor.style.width = '400px'
        carsor.style.height = '350px'
        carsor.style.borderRadius = '0'
        carsor.style.backgroundImage = `url(${att})`
        carsor.style.mixBlendMode  = 'initial'
        // carsor.style.position = 'absolute'
        // carsor.style.zIndex = '99'
    })

    box.addEventListener('mouseleave' , function () {
        // var att = box.getAttribute('data-image')
        carsor.style.backgroundColor = 'transparent'
        carsor.style.width = '20px'
        carsor.style.height = '20px'
        carsor.style.borderRadius = '50%'
        // // carsor.style.borderRadius = '0'
        carsor.style.backgroundImage = `none`
    })
})

// boxs.forEach ( function (box) {
//     box.addEventListener('mouseleave' , function () {
//         var att = box.getAttribute('data-image')
//         carsor.style.width = '300px'
//         carsor.style.height = '250px'
//     })
// })


