/** BROWSER STORAGES */

/********************************************* Cookies  *********************************************************
// 1. set cookie
document.cookie = 'user=Clement';
// 2. get cookie
console.log(document.cookie);
// 3. delete cookie
//document.cookie = `user=; expires=${new Date().toUTCString()}`;
// or
document.cookie = `user=; max-age=0`;
console.log(document.cookie);
// 4. set cookie path
document.cookie = `user=Clement; path=/myDirectory`;
console.log(document.cookie);
// 5. secure cookie only sent over https
document.cookie = `user=Clement; secure`;
console.log(document.cookie);
// 6. same site cookie - don't send cookie to other sites Cross Origin Resource Sharing (CORS)
document.cookie = `user=Clement; sameSite=strict;`;
console.log(document.cookie);
// 7. set cookie expiration
document.cookie = `user=Clement; expires=${new Date('2030-01-01').toUTCString()}`;
// 8. get cookie by name
const user = document
    .cookie
    .split('; ')
    .find(cookie => cookie.startsWith('user='))
    .split('=')[1];

console.log(user);

/*******************************************************************************************************/

/****************************** Local Storage (part of Web Storage API) ********************************
// 1. set local storage
localStorage.setItem('user', 'Radek');
localStorage.setItem('course','FrontendExpert')
// 2. get local storage
console.log(localStorage.getItem('user'));
// 3. delete local storage
localStorage.removeItem('user');
console.log(localStorage.getItem('user'));
console.log(localStorage.getItem('course'));
// 4. clear local storage
localStorage.clear();
console.log(localStorage.getItem('course'));
// 5. set local storage expiration manually
localStorage.setItem('user', 'Radek');
setTimeout(() => {
    localStorage.removeItem('user');
}, 3000);

/*******************************************************************************************************/

/****************************** Session Storage (part of Web Storage API) ********************************
// 1. set session storage
sessionStorage.setItem('user', 'Donald');
sessionStorage.setItem('course','FrontendExpert')
// 2. get session storage
console.log(sessionStorage.getItem('user'));
/*******************************************************************************************************/


/********************************************* IndexedDB  *********************************************************
 * 1. open database
 * 2. create object store
 * 3. add data to object store
 * 4. get data from object store
 * 5. update data in object store
 * 6. delete data from object store
 * 7. delete object store
 * 8. delete database
 * 9. create index
 * 10. get data from index
 * 11. update data in index
 * 12. delete data from index
 * 13. delete index
 * 14. create transaction
 * 15. create readwrite transaction
 * 16. create readonly transaction
 * 17. create versionchange transaction
 * 18. create object store with autoincrement
 * 19. create object store with key path
 * 20. create object store with key generator
 * 21. create object store with key generator and autoincrement
 * 22. create object store with key generator and key path
 * 23. create object store with key generator and key path and autoincrement */

// 1. open database
const request = indexedDB.open('myDatabase', 1);
request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;
    // 2. create object store
    const store = database.createObjectStore('users', { keyPath: 'id' });
    store.createIndex('name', 'name');

    store.add({
        id: 0,
        name: 'Radek',
        course: 'FrontendExpert'
    })
    store.add({
        id: 1,
        name: 'Clement',
        course: 'AlgoExpert'
    })
});



