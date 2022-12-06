/** FETCH - interacting with server 
 *  examples: https://sqa.stackexchange.com/questions/47097/free-sites-for-testing-post-rest-api-calls
 *  https://apipheny.io/free-api/
 */
const BASE_API = "https://petstore.swagger.io/v2/swagger.json";
const POST_API = "https://jsonplaceholder.typicode.com/posts";
//const POST_API = "https://api.funtranslations.com/translate/yoda.json";
const PARAMS_API = "https://api.nationalize.io";
const JSON_API = "https://dummyjson.com/products/1";
const TYPICODE_API = "https://jsonplaceholder.typicode.com/todos/1";
const RESTTEST_API = "https://httpbin.org/get";
const ASTRO_API = "http://api.open-notify.org/astros.json";
const WHEATHER_API = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";
const SLOW_API = "https://api.rapidmock.com/mocks/89mEw";

/**** SLOW_API ****/
async function main() {
    const abortController = new AbortController(); //abort fetch request after 2 seconds
    setTimeout(() => abortController.abort(), 2000);

    const options = {
        //method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'x-rapidmock-delay': 2500 //slow down response
        },
        signal: abortController.signal
    };
            
    try {
        const response = await fetch(SLOW_API,options);
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.log('Oh no ' + error);
    }
}
main();


/********* Async and await from FORM !Not work right now - maybe use different API *****************
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();
    console.log(new FormData(form));
    const options = {
        method: 'POST',
        body: new FormData(form),
    };
    
    try {
        const response = await fetch(POST_API, options);
        const text = await response.text();
        console.log(text);
        // const json = await response.json();
        // console.log(json);
    } catch (error) {
        console.log('Oh no ' + error);
    }
}
/************************** */


//fetch(JSON_API).then(console.log);

/* most common way to fetch data from server *******
const url = new URL(PARAMS_API);
url.searchParams.set('name', 'Nathanael');
//fetch(PARAMS_API+'?name=Nathanael')

fetch(url)
    .then(response => response.text())
    .then(console.log)
    .catch(error => console.error('Oh no ' + error));
/************************************/


/********* BASE_API Async and await ******************
async function main() {
    const url = new URL(PARAMS_API);
    url.searchParams.set('name', 'Nathanael');
    try {
        const response = await fetch(url)
        // console.log(response.headers.get('Content-Type'));
        // console.log(response.status);
        // console.log(response.ok);
        const text = await response.text();
        console.log(text);
        console.log(JSON.parse(text));
        // const obj = await response.json();
        // console.log(obj);
    }
    catch (error) {
        console.error('Oh no ' + error);
    }
}
main();
/*************************** */


/******** POST_API Async and await *****************
async function main() {
    try {
        const data = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers
            // headers: {
            //     'Content-type': 'application/json; charset=UTF-8',
            // },
        }

        const response = await fetch(POST_API, options);

        const text = await response.text();
        console.log(text);
        console.log(JSON.parse(text));
        // const obj = await response.json();
        // console.log(obj);
    }
    catch (error) {
        console.error('Oh no ' + error);
    }
}
main();
/************************************* */


console.log('After fetch');
//fetch(WHEATHER_API).then(response => response.json()).then(console.log);
/******/



/**** Older way to fetch data from server - it doesnt use promises ********
const request = new XMLHttpRequest();
request.addEventListener('load',function(){
//request.addEventListener('error',function(){
    console.log(this.responseText);
});
request.open('GET', WHEATHER_API);
request.send();
*/
