/************* Dedicated workers ******************* *
//self.addEventListener('message', (event) => {
addEventListener('message', (event) => {
        console.log(event.data);
    console.log('Message received from main thread');
    const number = event.data;
    const result = number * 2;
    //self.postMessage(result);
    postMessage(result);
});

// onmessage = (event) => {
//     console.log(event.data);
// }
/**************************************************** */

/************* Shared workers *******************/
addEventListener('connect', (event) => {
    const port = event.ports[0];

    port.onmessage = (event) => {
        port.postMessage(event.data*10);
    }
});
/**************************************************** */



/************ slow operation ****
let i = 0;
while(i < 3000000000) {
    i++;
}
console.log('Slow operation completed');
/*******************************/