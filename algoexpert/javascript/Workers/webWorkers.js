const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello');

slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);

/************** Dedicated Worker  *******************
function slowOperation() {
    const worker = new Worker('worker.js');
    worker.postMessage(10);
    worker.addEventListener('message', event => {
        console.log(event.data);
    });
    //worker.terminate();
}


/***************************************************/

/************** Shared Worker  *******************/
function slowOperation() {
    const worker = new SharedWorker('worker.js');
    worker.port.postMessage(10);
    worker.port.onmessage = function(event) {
        console.log(event.data);
    };
}
/***************************************************/
function sayHello() {
    console.log('Hello world');
}