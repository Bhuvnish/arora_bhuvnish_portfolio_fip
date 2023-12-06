(()=> {
//gsap.registerplugin(DrawSVGPlugin);


//gsap.set(".st0",{visibility:"visible"});

//gsap.from(".st0",2,{drawsvg:0,ease : "power1.inout"})//
//const gallery = document.getElementById('gallery');

//gallery.addEventListener('wheel', (event) => {
 // gallery.scrollLeft += event.deltaY;
 // event.preventDefault();
//});//




document.addEventListener("DOMContentLoaded", function () {
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
});

})();

	
