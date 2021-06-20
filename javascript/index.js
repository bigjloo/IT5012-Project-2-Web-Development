window.addEventListener('DOMContentLoaded', () => {
    /* Blur out of focus movie cards */
    const cards = document.getElementsByClassName('card')
    Array.prototype.forEach.call(cards, element => {
        element.addEventListener('mouseenter', () => {
            Array.prototype.forEach.call(cards, e => {
                e.classList.add('inactive');
            })
            element.classList.remove('inactive')
        })

        element.addEventListener('mouseleave', () => {
            Array.prototype.forEach.call(cards, e => {
                e.classList.remove('inactive')
            })
        })
    });

    /* main carousel change every 3 seconds at random */
    const imageSlides = [
        "banner.webp",
        "imax.jpg",
        "godzilla_large.jpg",
        "venom_large.png",
    ]
    
    const slideImageDiv = document.getElementById('slideImage')
    function changeSlide(){
        slideImageDiv.src = "../images/large/" + imageSlides[Math.floor(Math.random() * imageSlides.length)];

    }

    setInterval(changeSlide, 3000);
})