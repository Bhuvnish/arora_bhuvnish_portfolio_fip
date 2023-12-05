(()=> {
//gsap.registerplugin(DrawSVGPlugin);


//gsap.set(".st0",{visibility:"visible"});

//gsap.from(".st0",2,{drawsvg:0,ease : "power1.inout"})//
const gallery = document.getElementById('gallery');

gallery.addEventListener('wheel', (event) => {
  gallery.scrollLeft += event.deltaY;
  event.preventDefault();
});

})();

	
