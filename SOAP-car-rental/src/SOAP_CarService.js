let carList = [
    { id: 20, licensePlate: "123ABC", ct: { name: 'A', numberOfSeats: 2, price: 150.00 } },
    { id: 21, licensePlate: "124ABC", ct: { name: 'B', numberOfSeats: 2, price: 180.00 } },
    { id: 22, licensePlate: "125ABC", ct: { name: 'C', numberOfSeats: 4, price: 200.00 } },
    { id: 23, licensePlate: "126ABC", ct: { name: 'D', numberOfSeats: 4, price: 220.00 } },
    { id: 24, licensePlate: "127ABC", ct: { name: 'E', numberOfSeats: 5, price: 250.00 } },
    { id: 25, licensePlate: "128ABC", ct: { name: 'F', numberOfSeats: 5, price: 280.00 } },
    { id: 26, licensePlate: "129ABC", ct: { name: 'F', numberOfSeats: 5, price: 280.00 } }
]
module.exports = carService = {
    CarService: {
        CarServicePort: {
            getCars: function (args) {
                return carList;
            },
            deleteCar: function (args) {
                const existingCar = carList.find(c => Number(args.id) === c.id);
                if (existingCar) {
                    carList = carList.filter(c => c.id !== Number(args.id))
                    return { deleted: existingCar };
                }
                return { error: `car with id:${args.id} does not exist` }
            },
            addCar: function (args) {
                const { licensePlate, ct } = args.car
                const newCar = { id: (carList[carList.length - 1].id + 1), licensePlate: licensePlate, ct: ct }
                carList.push(newCar);
                return carList[carList.length - 1];
            }

        }
    }
};