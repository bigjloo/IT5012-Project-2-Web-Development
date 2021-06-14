window.addEventListener('DOMContentLoaded', () => {
    var count= 0;
    const seats = document.getElementsByClassName('seat');
    Array.prototype.forEach.call(seats, (seat) => {
        seat.addEventListener('click', () => {
            seat.style.background = "#01ff00";
            seat.classList.add('off');
            /* TODO toggle offon*/
            count += 1;
            alert(count);
        })
    })
})