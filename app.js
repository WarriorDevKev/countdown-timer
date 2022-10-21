/* start date and end date 
    Get Time (Days, hr, min, sec)

    figure out time difference between now and End dat
    parse and format properly
    1) get diff in milliseconds
    2) convert milliseconds to secs to min and so on
    3) substract time from today till end date by multiplying number of days
*/

const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hr");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");

function getTimeDiff(start, end) {
    let milliseconds = Math.floor(end - start);
    let secs = Math.floor(milliseconds/1000);
    let mins = Math.floor(secs / 60);
    let hrs = Math.floor(mins / 60);
    let days = Math.floor(hrs / 24);
    // Practice testing the next 3 lines
    hrs = hrs - (days * 24)
    mins = mins - (days * 24 * 60) - (hrs * 60)
    secs = secs - (days * 24 * 60 * 60) - (hrs * 60 * 60) - (mins * 60);
    // return `${days} ${hrs} ${mins} ${secs}`;
    return {
        rDays: days,
        rHours: hrs,
        rMinutes: mins,
        rSeconds: secs
    }
}
//setInterval Timer
let timer = setInterval(function() {
    const startDate = new Date();
    const endDate = new Date("November 1, 2022 9:00:00")

    let timeDifferenceObj = getTimeDiff(startDate, endDate);
    timerDayEl.textContent = timeDifferenceObj.rDays;
    timerHourEl.textContent = timeDifferenceObj.rHours;
    timerMinEl.textContent = timeDifferenceObj.rMinutes;
    timerSecEl.textContent = timeDifferenceObj.rSeconds;
}, 1000);

// BONUS: Hmmm - How can I check if the End Date is reached using timeDifferenceObj

