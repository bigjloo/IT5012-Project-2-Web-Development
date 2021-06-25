window.addEventListener('DOMContentLoaded', () => {
    // Gets ticket count from Booking page and updates seats, price, ticket count
    function updateAndRenderTickets(){
        const ticketCount = getTicketCount();

        setTicketCount(ticketCount);
        setPrice(ticketCount);
        setSeatCount(ticketCount);
    }   
    
    // Gets ticket count from local storage
    function getTicketCount(){
        return localStorage.getItem('tickets');
    }

    // Sets seats
    function setSeatCount(ticketCount) {
        const seatsDiv = document.getElementById('seats');

        for (let i = 0; i < ticketCount; i++) {
            seatsDiv.innerHTML += `<span>C1${i} | </span>`
        }
    }

    // Sets ticket count
    function setTicketCount(ticketCount) {
        const ticketCountDiv = document.getElementById('ticket-count');
        ticketCountDiv.innerHTML = `Tickets: ${ticketCount}`;
    }

    // Sets price
    function setPrice(ticketCount){
        const price = 12;
        const priceTotalDiv = document.getElementById('total-price');
        priceTotalDiv.innerHTML = `$${ticketCount * price}.00`;
    }

    updateAndRenderTickets();
})