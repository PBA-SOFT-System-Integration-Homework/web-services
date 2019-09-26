# Team Wing it
This project dislays a very simple Car rental company that can consume cars from two different web services.
One SOAP server and one REST server where both expose relevant car data.

We've made a client that fetches data from the two servers, assemples it, and prints it to the log.

We've made the REST server in Java, SOAP server in NodeJA and client in node aswell.

## SOAP server
Created in NodeJS
### Installation
*Requires NodeJS installed*

```javascript
npm install
```
### How to run
```javascript
npm start
```
SOAP service will be available on localhost:8000/carService

## JavaScript server
Created in Java

### How to run
Run in maven environment.


## Simple client
Created in NodeJS
This client is a part of the SOAP Server, as a simple script.

### How to run
```javascript
node test_server.js
```

### Contributors 
Stanislav Novitski
Alexander Winther Hørsted-Andersen
Mathias Bigler
