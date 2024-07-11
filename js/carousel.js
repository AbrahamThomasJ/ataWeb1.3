



/*Funcion del Carousel*/ 
function carousel(arrowLeft,arrowRight,scroll,elements){





    function updateArrowVisibility() {
        // Si scroll.scrollLeft es 0, no hay elementos a la izquierda.
        arrowLeft.style.display = scroll.scrollLeft > 0 ? 'block' : 'none';

        // Si scroll.scrollLeft + scroll.clientWidth es menor que scroll.scrollWidth, hay más elementos a la derecha.
        
        arrowRight.style.display = (scroll.scrollLeft + scroll.clientWidth ) >= scroll.scrollWidth-1 ? 'none' : 'block';
    }
    
    
    scroll.addEventListener("wheel",(evt) => {
        evt.preventDefault();
        scroll.scrollLeft += evt.deltaY;
        updateArrowVisibility();
    },{ passive: true });


    arrowRight.addEventListener("click",(evt)=>{
        
        scroll.scrollLeft += elements.scrollWidth;
        updateArrowVisibility();
    })

    arrowLeft.addEventListener("click",(evt)=>{
        
        scroll.scrollLeft -= elements.scrollWidth;
        updateArrowVisibility();
    })

    updateArrowVisibility();

}


/*Funcion para saber si el carousel tiene más de una elemento*/ 
function thereAreMoreThanOneElement(elements){
    return elements.length > 1;
}


/* Funcion para ocultar las flechas para deslizar los elementos*/ 
function hideElement(element){
    element.style.display = "none";
}


function initCarousel(carouselDiv){
    let liElements = carouselDiv.querySelectorAll(".carousel-li");
    const arrowLeft = carouselDiv.querySelector(".carousel-button-left");
    const arrowRight = carouselDiv.querySelector(".carousel-button-right");

    if(!thereAreMoreThanOneElement(liElements)){
        hideElement(arrowLeft);
        hideElement(arrowRight);
        return
    }


    const scrollContainer = carouselDiv.querySelector(".carousel-ul");
    liElements = carouselDiv.querySelector(".carousel-li");

    carousel(arrowLeft,arrowRight,scrollContainer,liElements);



}


document.querySelectorAll(".carousel-div").forEach(initCarousel);