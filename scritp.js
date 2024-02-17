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
   {
      scrollTrigger:{
         trigger:".section-container-list",
         start:"top top",
         end:"bottom top",
         scrub:true,
         pin:true,
         ease:"power2.inOut"
      }
   }
);


function removeShowClass(){
   const all_section=document.querySelectorAll(".section-container-list .section-content")
   all_section.forEach(section=>{
      section.classList.remove("show")
   })
}



t1.to(".section-container-list .section-content", {
   className: "section-content show",
   stagger: 1,
   // onComplete: function () {
   //    gsap.to(".section-container-list", { opacity: "0", duration: 1, ease: "power2.inOut" });
   // },
});

