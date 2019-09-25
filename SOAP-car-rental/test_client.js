const soap = new require('soap');
const fetch = require('node-fetch');
const xml2js = require('xml2js');

const SOAP_URL = 'http://localhost:8000/carService?wsdl';
const REST_URL = "http://420e802a.ngrok.io/RESTfulCars2/webresources/cars";


soap.createClient(SOAP_URL, function (err, client) {
    if (err) return console.log('CLIENT ERROR ', err);

    client.getCars((err, result) => {
        if (err) console.log(err);
        const keys = Object.keys(result);
        const list = [];
        keys.forEach(k => list.push(result[k]));

        fetch(REST_URL)
            .then(res => res.text())
            .then(res => xml2js.parseString(res, { explicitArray: false }, (err, res) => {
                const combined = list.concat(res.cars.car)
                console.log(combined);
            }))
            .catch((err) => console.log('ERRiR :', err))
    });
});



// soap.createClient(SOAP_URL, { disableCache: true }, function (err, client) {
//     if (err) return console.log('CLIENT ERROR ', err);

//     client.getCars((err, result) => {
//         if (err) return console.log(err);
//         console.log(result)
//     });

//     client.deleteCar({ id: 25 }, function (err, result) {
//         if (err) return console.log(err);
//         console.log(result)
//     });
//     client.addCar({
//         car: {
//             licensePlate: '226ABC',
//             carType: { name: 'D', numberOfSeats: 4, price: 400 }
//         }
//     }, (err, result) => {
//         if (err) return console.log(err);
//         console.log(result)
//     });
// });