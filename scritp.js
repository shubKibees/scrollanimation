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
         top:0,
         start:"top top",
         end:"1000px top",
         scrub:true,
         pin:true,
         markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
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
});

