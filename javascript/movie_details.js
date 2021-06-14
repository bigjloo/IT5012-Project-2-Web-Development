window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggle-more-schedule').addEventListener('click', (e) => {
        const booking_schedule_div = document.getElementById('booking-schedule');

        const todaySchedule = 
            `<div class="daily-schedule">
                <div>
                    <span class="day">TODAY</span> <span class="date"><abbr title="Monday">MON</abbr> 14 <abbr title="June">JUN</abbr></span>
                </div>
                <div class="time-schedule">
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">12:30pm</span>
                            <span class="theatre-type v-max uppercase">v-max</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">2:30pm</span>
                            <span class="theatre-type gold uppercase">gold</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">5:30pm</span>
                            <span class="theatre-type deluxe uppercase">deluxe</span>
                        </button>
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
                        <button class="booking-btn">
                            <span class="btn-time">12:30pm</span>
                            <span class="theatre-type v-max uppercase">v-max</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">2:30pm</span>
                            <span class="theatre-type gold uppercase">gold</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">5:30pm</span>
                            <span class="theatre-type deluxe uppercase">deluxe</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="daily-schedule ">
                <div>
                    <span class="day">TOMORROW</span> <span class="date"><abbr title="Tuesday">TUES</abbr> 15 <abbr title="June">JUN</abbr></span>
                </div>
                <div class="time-schedule">
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">3:00pm</span>
                            <span class="theatre-type gold uppercase">v-max</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">7:30pm</span>
                            <span class="theatre-type deluxe uppercase">deluxe</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="daily-schedule">
                <div>
                    <span class="date"><abbr title="Wednesday">WED</abbr> 16 <abbr title="June">JUN</abbr></span>
                </div>
                <div class="time-schedule ">
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">12:30pm</span>
                            <span class="theatre-type v-max uppercase">v-max</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">2:30pm</span>
                            <span class="theatre-type gold uppercase">gold</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">5:30pm</span>
                            <span class="theatre-type deluxe uppercase">deluxe</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">2:30pm</span>
                            <span class="theatre-type gold uppercase">gold</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">5:30pm</span>
                            <span class="theatre-type deluxe uppercase">deluxe</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">2:30pm</span>
                            <span class="theatre-type gold uppercase">gold</span>
                        </button>
                    </div>
                    <div>
                        <button class="booking-btn">
                            <span class="btn-time">5:30pm</span>
                            <span class="theatre-type deluxe uppercase">deluxe</span>
                        </button>
                    </div>
                </div>
            </div>`
        
        
        booking_schedule_div.innerHTML = allSchedule
            
        document.getElementById('toggle-more-schedule').innerHTML = `<span class="highlight">-</span>collapse</a>`

        /* TODO 
        toggle on off full/partial movie schedule
        */
    })
})