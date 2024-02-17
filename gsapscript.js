const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



const t1=gsap.timeline(
   {scrollTrigger:{
      trigger:'.accordions',
      start:'top top',
      end:'bottom top',
      scrub:true,
      pin:true,
   }}
);

t1.to(".accordion .text",{
   height:0,
   opacity:0,
   paddingBottom:0,
   stagger:0.5,
}
)

