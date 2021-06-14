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
})