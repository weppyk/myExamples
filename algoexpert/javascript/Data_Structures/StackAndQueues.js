/** Stack and Queue, you can use simple array, but for better effeciency use Link-lists */
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.pop()); // O(1) - efficient
console.log(stack);


const queue = [];
queue.push(1);
queue.push(2);
console.log(queue);
console.log(queue.shift()); // O(n) - not efficient
console.log(queue);
