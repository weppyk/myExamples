/* use strict equality most of the time
 use loose equality when comparing to null or undefined */

// console.log(5==5); // true
// console.log(5=='5'); // true
// console.log(5==='5'); // false
// console.log([]==[]); // false
// console.log([]==![]); // true
// console.log(['5'] ==! ['5']); // false
// console.log(false == 0); // true
// console.log(false === 0); // false
// console.log(false == ''); // true
// console.log(false === ''); // false
// console.log(false == []); // true
// console.log(false === []); // false
// console.log(false == {}); // false
// console.log(false === {}); // false
// console.log('' == 0); // true
// console.log('' === 0); // false
// console.log('' == []); // true
// console.log('' === []); // false
// console.log('' == {}); // false
// console.log('' === {}); // false
// console.log(0 == []); // true
// console.log(0 === []); // false
// console.log(0 == {}); // false
// console.log(0 === {}); // false
// console.log(0 == null); // false
// console.log(null == null); // true
// console.log(null === null); // true
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log(NaN == 0); // false
// console.log(NaN === 0); // false
// console.log(NaN == null); // false
// console.log(NaN === null); // false
// console.log(NaN == undefined); // false
// console.log(NaN === undefined); // false
// console.log(NaN == []); // false
// console.log(NaN === []); // false
// console.log(NaN == {}); // false
// console.log(NaN === {}); // false
// console.log(NaN == ''); // false
// console.log(NaN === ''); // false
// console.log(NaN == ' '); // false
// console.log(NaN === ' '); // false
// console.log(NaN == '0'); // false
// console.log(NaN === '0'); // false
// console.log(NaN == 'NaN'); // false
// console.log(NaN === 'NaN'); // false
// console.log(NaN == true); // false
// console.log(NaN === true); // false
// console.log(NaN == false); // false
// console.log(NaN === false); // false
// console.log(NaN == 'true'); // false
// console.log(NaN === 'true'); // false
// console.log(NaN == 'false'); // false
// console.log(NaN === 'false'); // false
// console.log(NaN == 'null'); // false
// console.log(NaN === 'null'); // false
// console.log(NaN == 'undefined'); // false
//console.log(NaN === 'undefined'); // false
// console.log(notDefinedVariable); // ReferenceError: notDefinedVariable is not defined
// console.log(typeof notDefinedVariable); // undefined
// console.log(notDefinedVariable === undefined); // ReferenceError: notDefinedVariable is not defined
console.log(typeof newVariable !== 'undefined'); // false





