/** EVENT DRIVEN PROGRAMMING */

/** Event propagation
 * 1. Capturing phase - from root|window element goes down to the target
 * 2. Target phase - event is fired on the target element - event.target
 * 3. Bubbling phase - go back up to the root|window
 */

//debugger;

/* Click event listener on button */
const button = document.querySelector('button');
//const abortController = new AbortController();

//button.addEventListener('click', onClick//, {
    // capture: true, //fired in capturing phase
    // once: true, //fired once 
    // passive: true, //not calling preventDefault()
    // signal: abortController.signal //aborting event listener
//}
//); //target is button - target phase, this is button - bubbling phase
//abortController.abort(); //aborting event listener

//document.body.addEventListener('click', onClick,true); // target is button - target phase (fired event),
                                                       // 'this' is body - bubbling phase, onClick is bounded to body
                                                       //true - fired in capturing phase

//button.addEventListener('dblclick', onClick); //double click event
//button.addEventListener('mousedown', onClick); //mouse push down - mousedown
//button.addEventListener('mouseup', onClick); //mouse release - mouseup


function onClick(event) {
    //console.log('button clicked', event);
    //console.log(event.type);
    //event.preventDefault(); //prevent default behaviour of the event
    //event.stopPropagation(); //stop bubbling after target phase
    console.log(event.target) // whatever is actually clicked on (button) - target phase

    console.log(this); // whatever before addEventListener - bubbling phase
    button.removeEventListener('click', onClick); //removing event listener

    //console.log(event.currentTarget, event.timeStamp);
}



// window.addEventListener('keydown', event => {
//     console.log(event.key);
//      console.log(event.code);
    // console.log(event);
    // console.log(event.repeat); //true if key is held down
    // console.log(event.shiftKey); //true if shift key is pressed
    // console.log(event.ctrlKey); //true if ctrl key is pressed
    // console.log(event.altKey); //true if alt key is pressed
    // console.log(event.metaKey); //true if meta key is pressed
    // console.log(event.location); //1 - left, 2 - right, 3 - numpad, 4 - mobile, 5 - joystick
    // console.log(event.getModifierState('Shift')); //true if shift key is pressed
    // console.log(event.getModifierState('Control')); //true if ctrl key is pressed
    // console.log(event.getModifierState('Alt')); //true if alt key is pressed
    // console.log(event.getModifierState('Meta')); //true if meta key is pressed
    // console.log(event.getModifierState('CapsLock')); //true if caps lock is on
    // console.log(event.getModifierState('NumLock')); //true if num lock is on
    // console.log(event.getModifierState('ScrollLock')); //true if scroll lock is on
    // console.log(event.getModifierState('Fn')); //true if fn key is pressed
    // console.log(event.getModifierState('FnLock')); //true if fn lock is on
    // console.log(event.getModifierState('Hyper')); //true if hyper key is pressed
    // console.log(event.getModifierState('Super')); //true if super key is pressed
// });


const scrollable = document.getElementById('scrollable');
//const scrollable = document.querySelector('#scrollable');
/*scrollable.addEventListener('scroll', event => {
    console.log(event.target.scrollTop);
    // console.log(event.target.scrollLeft);
    // console.log(event.target.scrollWidth);
    // console.log(event.target.scrollHeight);
    // console.log(event.target.clientWidth);
    // console.log(event.target.clientHeight);
    // console.log(event.target.offsetWidth);
    // console.log(event.target.offsetHeight);
    // console.log(event.target.scrollLeftMax);
    // console.log(event.target.scrollTopMax);
 });*/

//  scrollable.addEventListener('mouseenter', event => {
//     console.log(event.pageX, event.pageY);
//     console.log(event.clientX, event.clientY);
//  });

/*scrollable.addEventListener('mousemove', event => {
     console.log(event.pageX, event.pageY);
    // console.log(event.clientX, event.clientY);
    // console.log(event.movementX, event.movementY);
    // console.log(event.screenX, event.screenY);
    // console.log(event.offsetX, event.offsetY);
    // console.log(event.x, event.y);
    // console.log(event.layerX, event.layerY);
    // console.log(event.buttons); //1 - left, 2 - right, 4 - middle, 8 - back, 16 - forward
    // console.log(event.ctrlKey);
    // console.log(event.shiftKey);
    // console.log(event.altKey);
    // console.log(event.metaKey);
    // console.log(event.getModifierState('Shift'));
    // console.log(event.getModifierState('Control'));
    // console.log(event.getModifierState('Alt'));
    // console.log(event.getModifierState('Meta'));
    // console.log(event.getModifierState('CapsLock'));
    // console.log(event.getModifierState('NumLock'));
    // console.log(event.getModifierState('ScrollLock'));
    // console.log(event.getModifierState('Fn'));
    // console.log(event.getModifierState('FnLock'));
    // console.log(event.getModifierState('Hyper'));
    // console.log(event.getModifierState('Super'));
});*/



/*
// DRAGGABLE BUTTON
button.addEventListener('dragstart', event => {
    console.log('dragstart', event);
});

scrollable.addEventListener('drop', event => {
    scrollable.prepend(button);
});
scrollable.addEventListener('dragover', event => {
    event.preventDefault();
});*/

/* Parent call propagation */
scrollable.addEventListener('click', event => {
    console.log(event.target,this);
    if (event.target !== this){
        event.target.textContent = 'Clicked';
    }
});