
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
gsap.from("nav,.menu ul li",{
    opacity:0,
    stagger:0.5,
    y:50,
    duration:1,
})
gsap.from(".left, .left-top,h4,h1,.left p,.left button",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.5
})
gsap.from(".right img",{
    scale:0,
    opacity:0,
    duration:2,
})
gsap.from(".svgs svg",{
    stagger:1,
    opacity:0,
    scale:0
})
gsap.to(" .s1",{
    // opacity:0,
    scale:0,
    stagger:0.5,
    scrollTrigger: { 
        trigger:".s1", 
        start: "top 0%",
        end: "bottom 80%", 
        scrub:1
    }
})
gsap.to(" .s2",{
    // opacity:0,
    scale:0,
    stagger:0.5,
    scrollTrigger: { 
        trigger:".s2", 
        start: "top 0%",
        end: "bottom 80%", 
        scrub:1
    }
})
gsap.to(" .s3",{
    // opacity:0,
    scale:0,
    stagger:0.5,
    scrollTrigger: { 
        trigger:".s3", 
        start: "top 0%",
        end: "bottom 80%", 
        scrub:1
    }
})
gsap.to(" .s4",{
    // opacity:0,
    scale:0,
    stagger:0.5,
    scrollTrigger: { 
        trigger:".s4", 
        start: "top 0%",
        end: "bottom 0%", 
        scrub:1,
       
    }
})
gsap.to(" .s4 img",{
    // opacity:0,
    scale:1,
    stagger:0.5,
    scrollTrigger: { 
        trigger:".s4", 
        start: "top 0%",
        end: "bottom 0%", 
        scrub:1,
       
    }
})
gsap.from(" .s4-right, .s4-right ul li ",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.5,
    scrollTrigger: { 
        trigger:".s4", 
        start: "top 0%",
        end: "bottom 0%", 
        
       
    }
   
})

gsap.from(".s2 img,h3,p",{
    opacity:0,
    scale:0,
    
})
