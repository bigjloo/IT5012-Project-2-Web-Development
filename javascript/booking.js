window.addEventListener('DOMContentLoaded', () => {
    function addsClassToSeatsWhenClicked(){
        var count= 0;
        var seatCount = document.getElementById('seat-selected-count');
        var priceTotal = document.getElementById('total-price');
        const seats = document.getElementsByClassName('seat');
        const ticketPrice = 12;

        Array.prototype.forEach.call(seats, (seat) => {
            seat.addEventListener('click', () => {
                if(seat.classList.contains('seat-selected')){
                    seat.classList.remove('seat-selected');
                    count -= 1;
                    setSeatDiv();
                } else if(seat.classList.contains('seat-not-available')){
                    alert('Seat not available');
                } else {
                    seat.classList.add('seat-selected');
                    count += 1;
                    setSeatDiv();
                }
            })
        })

        function setSeatDiv(){
            seatCount.innerHTML = count;
            priceTotal.innerHTML = `$${count * ticketPrice}.00`;
            localStorage.setItem("tickets", count);
        }
    }

    addsClassToSeatsWhenClicked();
    
})