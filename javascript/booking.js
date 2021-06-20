window.addEventListener('DOMContentLoaded', () => {
    var count= 0;
    var seatCount = document.getElementById('seat-selected-count');
    var priceTotal = document.getElementById('total-price');
    const seats = document.getElementsByClassName('seat');

    /* select seat */
    Array.prototype.forEach.call(seats, (seat) => {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('seat-selected')){
                seat.classList.remove('seat-selected');
                count -= 1;
                seatCount.innerHTML = count;
                priceTotal.innerHTML = `$${count * 12}.00`;
                localStorage.setItem("tickets", count);
            } else if (seat.classList.contains('seat-not-available')){
                alert('Seat not available');
            } else {
                seat.classList.add('seat-selected');
                count += 1;
                seatCount.innerHTML = count;
                priceTotal.innerHTML = `$${count * 12}.00`;
                localStorage.setItem("tickets", count);
            }
        })
    })
})