//alowed access in server.js
fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

//TODO: doesnt work Zonky... use proxy server https://www.npmjs.com/package/cors-proxy-server
fetch("http://localhost:9090/https://api.zonky.cz/loans/marketplace?fields=id,url",{
    method: "GET",
    credentials: "include",
    headers: {
        "User-Agent": "zonky_loanAvg/v0.1.0 (https://github.com/weppyk/zonky_loanAvg)",
    }
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

