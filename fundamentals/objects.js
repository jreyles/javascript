


function vehicleConstructor(name, wheels, passengers){
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;
    vehicle.makeNoise = function() {console.log("ring! ring!");}
    return vehicle;
}

var Bike =  vehicleConstructor("Bike", 2, 1);
console.log(Bike);

var Sedan = vehicleConstructor("Sedan",4,4);
Sedan.makeNoise = function () {console.log("Honk Honk! ");}
console.log(Sedan);


var Bus = vehicleConstructor("Bus",8,12);
//console.log(Bus.passengers);
Bus.pickUpPassengers = function(pickup) {Bus.passengers = pickup + Bus.passengers;};
Bus.pickUpPassengers(4);
console.log(Bus);
//console.log(Bus.passengers);
//Bus.pickupPassengers(3);


