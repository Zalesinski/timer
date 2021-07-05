function timer(id, deadline) {

    function getTimeRemaining(deadline) { // get time remaining as an object
        const t = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / 1000 / 60 % 60),
            seconds = Math.floor(t / 1000 % 60);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimer(selector, deadline) {
        const timer = document.querySelector(selector), // get timer selector, use yours
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTimer, 1000);

        updateTimer(); // first call to init. without delay

        function updateTimer() {
            const t = getTimeRemaining(deadline);

            days.innerHTML = getZero(t.days),
                hours.innerHTML = getZero(t.hours),
                minutes.innerHTML = getZero(t.minutes),
                seconds.innerHTML = getZero(t.seconds);

            if (t <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setTimer(id, deadline);
}

export default timer;