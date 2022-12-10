/** THE EVENT LOOP
 * 1. Call stack - where the code is executed
 * 2. Web API - where the browser provides the functionality
 * 3. Callback Queue - where the callback functions are stored
 * 4. Event Loop - checks the call stack and the callback queue
 * 5. Microtask Queue - where the microtask functions are stored
 * 
 * The event loop checks the call stack and the callback queue
 * If the call stack is empty, it takes the first function from the callback queue and puts it on the call stack
 * If the call stack is not empty, it does nothing
 * 
 */

/** Basic- see on http://latentflip.com/loupe/?code=DQogZnVuY3Rpb24gIGJhcmsoKSAgew0KICAgY29uc29sZS5sb2coICdiYXJrIScgKTsNCn0NCg0KIGZ1bmN0aW9uIG1lb3coKSB7DQogICBjb25zb2xlLmxvZyggJ21lb3chJyApOw0KfQ0KDQogZnVuY3Rpb24gc3BlYWsoKSB7DQogICAgY29uc29sZS5sb2coICdzcGVha2luZyEnICk7DQogICAgYmFyaygpOw0KICAgIG1lb3coKTsNCiAgICBjb25zb2xlLmxvZyggJ3NwZWFraW5nIGFnYWluIScgKTsNCn0NCg0KIHNwZWFrKCk7DQo%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D *
 * *
function  bark()  {
   console.log( 'bark!' );
}

function meow() {
   console.log( 'meow!' );
}

function speak() {
    console.log( 'speaking!' );
    bark();
    meow();
    console.log( 'speaking again!' );
}

speak();
*/

/********* Show async function setTimeout() **********
console.log( '1' );
setTimeout( function() {
    console.log( '2' );
}, 2 );
setTimeout( function() {
    for( let i = 0; i < 1000000000; i++) y=1;
    console.log( '3' );
}, 0 );
console.log( '4' );
/*******************************************************/

/********* Show async function setTimeout() **********/
function logWorld() {
    console.log('World');
}

function main() {
    console.log( 'Hello' );
    setTimeout(logWorld, 1000);
    console.log('Goodbye');
}

main();
/*******************************************************/

/********* Promise queue pseudocode *******
while (true) {
    if (!taskQueue.isEmpty()) {
        const task = taskQueue.dequeue();
    }

    while (!microtaskQueue.isEmpty()) {
        const microtask = microtaskQueue.dequeue();
    }
    reRender();
}
/*******************************************************/

/************** Chunking ********************* *
function chunkedSlowFunction() {
    setTimeout(processChunk, 0, 0);
}

function processChunk(start) {
    const  end = start + 100000;
    for (let i = start; i < end; i++) {
        doCalculation();
    }
    if (end < 1000000) {
        setTimeout(processChunk, 0, i + 1);
    }
}
/*******************************************************/


