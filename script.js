 var tl=gsap.timeline()
tl.from("#nav #one,#nav h3,#nav button",{
    y:-100,
    duration:.5,
    opacity:0,
    delay:1,
    stagger:.2,
})
tl.from("#main h1",{
    y:100,
    duration:1,
    stagger:.3,
    opacity:0,
})
tl.from("#main>img",{
    scale:0,
    // opacity:0,
    stagger:.3,
})

tl.from("h5",{
    
    // opacity:0,
    scale:0,
})
tl.to("h5",{
    y:40,
    duration:1,
    repeat:-1,
    yoyo:true,
})