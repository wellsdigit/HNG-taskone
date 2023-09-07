// Personal data
const personalData = document.querySelectorAll('[data-testid]');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
const currentUTCTime = currentDate.getMilliseconds();

personalData.forEach(item => {
    if (item.dataset.testid === 'currentDayOfTheWeek'){
        item.innerHTML = currentDayOfWeek;
    } 
    if (item.dataset.testid === 'currentUTCTime') {
        item.innerHTML = `<span>UTCTime</span> ${Date.now()}`
    };
})
