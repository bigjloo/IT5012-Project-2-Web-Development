window.addEventListener('DOMContentLoaded', () => {
    /* inactive for movie card on focus */
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
    
    

    const imageSlides = [
        "banner.webp",
        "imax.jpg",
        "Black-Widow.png",
    ]

    const slideImageDiv = document.getElementById('slideImage')
    function changeSlide(){
        slideImageDiv.src = "../images/large/" + imageSlides[Math.floor(Math.random() * imageSlides.length)];

    }

    setInterval(changeSlide, 3000);
})