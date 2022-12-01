// window.addEventListener('DOMContentLoaded', main); // wait for DOM is loaded
// window.addEventListener('load', main); //wait for all images and stylesheets to load before running the code

// function main() {
const button = document.querySelector('button');
button.addEventListener('click', setBackGround);

function setBackGround() {
    //set random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = color;
}
// }