/*const promise = new Promise((resolve, reject) => {
    // do something
    setTimeout(()=>resolve(2), 1000);
    //setTimeout(()=>reject(new Error('Something went wrong')), 1000);
});
console.log(promise);

//setTimeout(()=>console.log(promise), 2000);
//promise.then(value => console.log(value), error => console.log('Oh no ' + error));
promise.then(console.log).catch(error => console.log('Oh no ' + error));
*/



const promise = Promise.resolve(3);
//console.log(promise);

/*//Promise.race([ // .then after the first promise is resolved
Promise.any([ // .then after any promise is resolved
//Promise.all([ // .then after all promises are resolved
    // new Promise((resolve, reject) => setTimeout(()=>resolve(1), 2000)),
    // new Promise((resolve, reject) => setTimeout(()=>resolve(2), 1000)),
    // Promise.resolve(3),
    new Promise((resolve, reject) => setTimeout(()=>reject(1), 2000)),
    new Promise((resolve, reject) => setTimeout(()=>reject(2), 1000)),
    Promise.reject(3),
    //Promise.reject('Oh no'),
    
    
])
    .then(console.log)
    //.catch(console.log);
    .catch((error) => console.log('All promises are rejected ' + error));
    */

/** Chaining promises */
/*promise
    .then(value => value * 2)
    .then(value => value + 1)
    // .then(value => {
    //     throw new Error('Something went wrong')
    // })
    .then(console.log)
    .catch(error => {
        console.log('Oh no ' + error);
        return 10;
    })
    .then(value => console.log(value))
    .finally(() => console.log('Done'));
*/

/** Async and await */
/*async function tester() {
    try {
        const value = await new Promise((resolve, reject) =>  {
           // setTimeout(() => reject(new Error("Something went wrong")), 2000)
            setTimeout(() => resolve(2), 1000)
        });
        console.log(value);
    } catch (error) {
        console.log('Oh no ' + error);
    }
}*/
//tester();

async function tester() {
    return await new Promise((resolve, reject) =>  {
        //setTimeout(() => reject(new Error("Something went wrong")), 2000)
        setTimeout(() => resolve(2), 1000)
     });
}

tester().then(console.log).catch(error => console.log('Oh no ' + error));