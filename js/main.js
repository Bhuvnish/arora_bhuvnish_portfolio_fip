(()=> {
//gsap.registerplugin(DrawSVGPlugin);


//gsap.set(".st0",{visibility:"visible"});

//gsap.from(".st0",2,{drawsvg:0,ease : "power1.inout"})//
//const gallery = document.getElementById('gallery');

//gallery.addEventListener('wheel', (event) => {
 // gallery.scrollLeft += event.deltaY;
 // event.preventDefault();
//});//






const options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, options);

document.querySelectorAll('.grid-item').forEach(item => {
    observer.observe(item);
});





const canvas = document.querySelector("#explode-view");
const context = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;
const frameCount = 750; //how many still frames do we have?
const images = []; //an array to hold all of our images
//create an object literal with a property frame to hold the current frame
const buds = {
    frame: 0
};

for (let i=0; i<frameCount; i++) {
    //console.log(i);
    //const img = new Image();
    const img = document.createElement("img");
    //need to recreate a string: images/explode_0001.webp
    img.src = `images/animations_${(i+1).toString().padStart(5, '0')}.jpg`;
    images.push(img);
}
//console.table(images)

//Not actually aniamting a DOM element, but rather an object
//which contains a frame count
gsap.to(buds, {
    frame: 1080,
    snap: "frame",
    scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 1,
        start: "top top",
        markers: true
    },
    onUpdate: render
})

images[0].addEventListener("onload", render);

function render() {
    // console.log(buds.frame);
    //console.log(images[buds.frame]);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
}




//burger menu

(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con")

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};


	button.addEventListener("click", hamburgerMenu, false);		
})();







})();

	
