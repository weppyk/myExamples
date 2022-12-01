// const secondLi = document.getElementById('second-li');
// console.log(secondLi);

// const firstLi = document.querySelector('li'); //best practice
// console.log(firstLi);


// const allLi = document.querySelectorAll('li'); //best practice
// console.log(allLi);
// console.log(allLi.length);
// allLi.forEach(li => { // map does not work here
//     console.log(li);
// });
// allLi[0].style.color = 'red';
// allLi[1].style.fontSize = '30px';
// allLi[2].style.backgroundColor = 'yellow';
// allLi[0].textContent = 'Changed text';
// allLi[1].innerHTML = '<b>Changed text</b>';
// allLi[0].value = 5;
// allLi[2].setAttribute('value', 10);
// allLi[3].setAttribute('class', 'blue big underline');
// allLi[4].classList.add('blue');
// allLi[4].classList.add('big', 'underline');
// allLi[4].classList.remove('blue');
// allLi[4].classList.toggle('blue');
// allLi[4].classList.toggle('blue');
// allLi[4].className = 'red underline'; //overwrites all classes


 const listItems = document.getElementsByClassName('list-item'); // can't use forEach
// console.log(listItems);
// const listItemsByTag = document.getElementsByTagName('li'); // can't use forEach
// console.log(listItemsByTag);
// /** rather use querySelectorAll */
// Array.from(listItems).forEach(li => {
//     console.log(li);
// });


/** DOM Manipulation */

const p = document.createElement('p');
const text = document.createTextNode('- This is a text node');


p.textContent = 'This is a new paragraph';
p.append(text);
document.body.append(p,"Text appended to body");


const p1 = document.createElement('p');
p1.textContent = 'This is a new paragraph 1 ';
document.body.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = 'This is a new paragraph 2';
document.body.insertBefore(p2, p1);

const p3 = document.createElement('p');
p3.textContent = 'This is a new paragraph 3';
p2.insertAdjacentElement('afterend', p3);

const p4 = document.createElement('p');
p4.textContent = 'This is a new paragraph 4';
p3.insertAdjacentElement('beforebegin', p4);

document.body.prepend("Text prepended to body");


console.log(document.querySelector('ol').innerHTML);

/* XSS - Cross Site Scripting Attack (from html <input>) */
// document.body.innerHTML = '<h1>Changed the whole body</h1><script>alert("XSS Attack")</script>'; //overwrites the whole body - not recommended - use append, prepend, insertAdjacentElement etc.

/* iteration */
// const parent = document.querySelector('ol');
// const listItemsToAdd = [];
// for (let i=0; i<10; i++) {
//     const li = document.createElement('li');
//     li.textContent = `List item ${i}`;
//     listItemsToAdd.push(li);
// }
// parent.append(...listItemsToAdd);

// same as above with fragment
const parent = document.querySelector('ol');
const fragment = document.createDocumentFragment();
for (let i=0; i<10; i++) {
    const li = document.createElement('li');
    li.textContent = `List item ${i}`;
    fragment.append(li);
}
parent.append(fragment);

//listItems[0].parentNode.removeChild(listItems[0]);
// listItems[0].remove(); //same as above


/* Window Object */

console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

//get style of an element
listItems[0].classList.add('big');
console.log(window.getComputedStyle(listItems[0]).fontSize); //use getComputedStyle to get the computed style of an element instead of style
console.log(listItems[0].style.fontSize); //this not works because it is inherited from the window

const scrollable = document.getElementById('scrollable');
console.log(scrollable.clientHeight); //includes padding,
console.log(scrollable.offsetHeight); //includes padding,border
console.log(scrollable.scrollHeight); //includes padding,border,scrollbar

console.log(scrollable.offsetTop); //distance from the top of the window

/* position of an elements are different when css position: relative | static...*/
console.log(scrollable.querySelectorAll('p')[5].offsetTop); //distance from the top of the scrollable container
console.log(scrollable.querySelectorAll('p')[0].offsetTop); //distance from the top of the scrollable container

//scroll to an element
//scrollable.scrollTo(0, 100); 
scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[5].offsetTop,//100,
    left: 0,
    behavior: 'smooth'
});
// scrollable.querySelectorAll('p')[5].scrollIntoView(); //scroll to the 5th p element
