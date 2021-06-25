window.addEventListener('DOMContentLoaded', () => {
    let isScheduleCollapsed = true;
    const booking_schedule_div = document.getElementById('booking-schedule');
    const todaySchedule = 
            `<div class="daily-schedule">
                <div>
                    <span class="day">TODAY</span> <span class="date"><abbr title="Monday">MON</abbr> 14 <abbr title="June">JUN</abbr></span>
                </div>
                <div class="time-schedule">
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">12:30pm</span>
                                <span class="theatre-type v-max uppercase">v-max</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">2:30pm</span>
                                <span class="theatre-type gold uppercase">gold</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">5:30pm</span>
                                <span class="theatre-type deluxe uppercase">deluxe</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>`
    const allSchedule = 
            `<div class="daily-schedule">
                <div>
                    <span class="day">TODAY</span> <span class="date"><abbr title="Monday">MON</abbr> 14 <abbr title="June">JUN</abbr></span>
                </div>
                <div class="time-schedule">
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">12:30pm</span>
                                <span class="theatre-type v-max uppercase">v-max</span>
                            </button>
                        </a>        
                    </div>
                    <div>
                        <a href="booking.html">
                        <button class="booking-btn">
                            <span class="btn-time">2:30pm</span>
                            <span class="theatre-type gold uppercase">gold</span>
                        </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">5:30pm</span>
                                <span class="theatre-type deluxe uppercase">deluxe</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="daily-schedule ">
                <div>
                    <span class="day">TOMORROW</span> <span class="date"><abbr title="Tuesday">TUES</abbr> 15 <abbr title="June">JUN</abbr></span>
                </div>
                <div class="time-schedule">
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">3:00pm</span>
                                <span class="theatre-type gold uppercase">v-max</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">7:30pm</span>
                                <span class="theatre-type deluxe uppercase">deluxe</span>
                            </button>
                        </a>    
                    </div>
                </div>
            </div>
            <div class="daily-schedule">
                <div>
                    <span class="date"><abbr title="Wednesday">WED</abbr> 16 <abbr title="June">JUN</abbr></span>
                </div>
                <div class="time-schedule ">
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">12:30pm</span>
                                <span class="theatre-type v-max uppercase">v-max</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">2:30pm</span>
                                <span class="theatre-type gold uppercase">gold</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">5:30pm</span>
                                <span class="theatre-type deluxe uppercase">deluxe</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">2:30pm</span>
                                <span class="theatre-type gold uppercase">gold</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">5:30pm</span>
                                <span class="theatre-type deluxe uppercase">deluxe</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">2:30pm</span>
                                <span class="theatre-type gold uppercase">gold</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="booking.html">
                            <button class="booking-btn">
                                <span class="btn-time">5:30pm</span>
                                <span class="theatre-type deluxe uppercase">deluxe</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>`

    const toggleAllScheduleElement = document.getElementById('toggle-more-schedule');

    toggleAllScheduleElement.addEventListener('click', (e) => {
        if (isScheduleCollapsed == true) {
            booking_schedule_div.innerHTML = allSchedule;
            isScheduleCollapsed = false;
            toggleAllScheduleElement.innerHTML = `<span class="highlight">-COLLAPSE</span>`
        } else {
            booking_schedule_div.innerHTML = todaySchedule;
            isScheduleCollapsed = true;
            toggleAllScheduleElement.innerHTML = `<span class="highlight">+ SHOW ALL FILM TIMES</span>`
        }
    })
})