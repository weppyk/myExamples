/** EVENT DRIVEN PROGRAMMING */

/** Event propagation
 * 1. Capturing phase - from root|window element goes down to the target
 * 2. Target phase - event is fired on the target element - event.target
 * 3. Bubbling phase - go back up to the root|window
 */

//debugger;

/* Click event listener on button */
const button = document.querySelector('button');
button.addEventListener('click', onClick); //target is button - target phase, this is button - bubbling phase
document.body.addEventListener('click', onClick,true); // target is button - target phase (fired event),
                                                    // 'this' is body - bubbling phase, onClick is bounded to body
                                                    //true - fired in capturing phase

function onClick(event) {
    //console.log('button clicked', event);
    //console.log(event.type);
    event.stopPropagation(); //stop bubbling after target phase
    console.log(event.target) // whatever is actually clicked on (button) - target phase
    console.log(this); // whatever before addEventListener - bubbling phase
    //console.log(event.currentTarget, event.timeStamp);
}


