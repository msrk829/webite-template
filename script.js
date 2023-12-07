var crs = document.querySelector("#crs")
var blur = document.querySelector("#crs-blur")

var h4all = document.querySelectorAll(".nav h4")

h4all.forEach(function (e) {
    console.log(e)
    e.addEventListener("mouseenter",function(){
        crs.style.scale = 3
        crs.style.border ="1px solid white"
        crs.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave",function(){
        crs.style.scale = 1
        crs.style.border ="0px solid #95C11E"
        crs.style.backgroundColor = "#95C11E"
    })
})

document.addEventListener("mousemove",function(e){
    crs.style.left = e.x+"px"
    crs.style.top = e.y+"px"
    blur.style.left = e.x-150+"px"
    blur.style.top = e.y-150+"px"
})

gsap.to(".nav",{
    height:"90px",
    backgroundColor :"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start: "top -10%",
        end:"top -11%",
        scrub:1

    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})
