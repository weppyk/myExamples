see more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
some examples of use on server: https://enable-cors.org/server.html
client examples: https://enable-cors.org/client.html use XMLHttpRequests 

CORS use headers
- Access-Control-Allow-Origin // access for public pages
- Access-Control-Allow-Credentials // for authenticated pages access

Syntax:
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null

Access-Control-Allow-Credentials: true //not working if Access-Control-Allow-Origin: *


Access-Control-Allow-Credentials
- Cookies
- Authorizations headers
- TLS client certificates