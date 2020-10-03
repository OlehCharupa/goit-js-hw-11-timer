// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });



const date = new Date('Jan 01 2021 00:00:00').getTime();
// const currentTime = new Date().getTime();
// console.log(currentTime)
const day = document.querySelector('[data-value="days"]');
const hour = document.querySelector('[data-value="hours"]')
const mins = document.querySelector('[data-value="mins"]')
const secs = document.querySelector('[data-value="secs"]')

const expirationDate = setInterval(() => {
    const currentTime = new Date().getTime()
    const time = date - currentTime;
    // console.log(time);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(time % (1000 * 60) / (1000));
    day.textContent = days;
    hour.textContent = hours;
    mins.textContent = minutes;
    secs.textContent = seconds;
    // p.textContent = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;


    if (time < 0) {
        clearInterval(expirationDate);
        p.textContent = `Expired`;
    }
}, 1000);
