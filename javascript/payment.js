window.addEventListener('DOMContentLoaded', () => {
    const ticketCount = localStorage.getItem('tickets');
    const ticketCountDiv = document.getElementById('ticket-count');
    ticketCountDiv.innerHTML = `Tickets: ${ticketCount}`;

    const priceTotal = document.getElementById('total-price');
    priceTotal.innerHTML = `$${ticketCount * 12}.00`;
    
    const seatsDiv = document.getElementById('seats');
    for (let i = 0; i < ticketCount; i++) {
        seatsDiv.innerHTML += `<span>C1${i} | </span>`
    }
})