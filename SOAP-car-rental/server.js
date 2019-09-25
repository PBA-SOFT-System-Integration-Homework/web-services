const soap = require('soap');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const carService = require('./src/SOAP_CarService');
const xml = fs.readFileSync('carService.wsdl', 'utf8');

//express server example
const app = express();

//body parser middleware are supported (optional)
app.use(bodyParser.raw({ type: function () { return true; }, limit: '2mb' }));

const PORT = 8000;
app.listen(PORT, function () {
    //Note: route will be handled by soap module
    //and all other routes & middleware will continue to work
    soap.listen(app, '/carService', carService, xml, () => console.log('Server started on port: ' + PORT));
});
