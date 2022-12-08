const count = document.getElementById('count');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// let timerId; //= null;
// let timeoutId = setTimeout(() => {
//     console.log('timeout');
// }, 0);
//clearTimeout(timeoutId);
//clearInterval(timeoutId);

// let countValue = 0;

startButton.addEventListener('click', startTime);
stopButton.addEventListener('click', stopTime);

/** Use AnimationFrame */
let animationFrameId;
const date = new Date(2025,0,10,9,25,10,30);
//const date = new Date('January 25, 2025'); //not recommended to use this by incosistent browser support
console.log(date);
date.setMonth(9);
console.log(date);

console.log(date.getTime());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getDay());
// console.log(performance.now());

// setTimeout(() => {
//     console.log(performance.now());
//     console.log(Date.now());
// }, 1000);

function startTime(timeStamp)
{
    //cancelAnimationFrame(animationFrameId);
    console.log(timeStamp);
    count.textContent++;
    animationFrameId = requestAnimationFrame(startTime);
}
function stopTime() {
    cancelAnimationFrame(animationFrameId);
}



/** Set interval
 * function startTime()  {
    //clearInterval(timerId);
    timerId = setInterval(() => {
        console.log('Starting timer...');
        count.textContent++;
    // timerId = setInterval(() => {
    //     countValue++;
    //     count.textContent = countValue;
     }, 500);
}
function stopTime() {
    clearInterval(timerId);
    // countValue = 0;
    // count.textContent = countValue;
}
*/
