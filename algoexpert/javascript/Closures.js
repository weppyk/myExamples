/** CLOSURES */

function exampleClosure() {
  let x = 4;
  let y = 6
  function closeX(y) {
    console.log(x,y);
  }
  closeX(10);
}

exampleClosure(); // 4 10


function exampleClosure2() {
    let x = 4;
    return function () {
        console.log(x);
    }
}
let closeX = exampleClosure2();
closeX(); // 4

/** private function * 
function makeFunctions() {
    let privateNum = 0;

    function privateIncrement() { // nothing can access this function externally
        privateNum++;
    }

    return {
        logNum:  () => console.log(privateNum),
        incrementNum: () => {
            privateIncrement();
            console.log('Incremented');
        }

    }
}

const {logNum, incrementNum} = makeFunctions();
logNum(); // 0
incrementNum(); // Incremented
logNum(); // 1
*/


for (let i = 0; i < 3; i++) { // let i = 0 is block scoped, so each iteration of the loop has its own 
//for (var i = 0; i < 3; i++) {  // var i = 0 is function scoped, so each iteration of the loop has the same i   
    setTimeout(() => {
        console.log(i);
    },500);
}
//console.log(i); // 3