function vehicleConstructor(name, wheels, passengers,speed){
//    var distance_travelled = 0;
//    var updateDistanceTravelled = function(){distance_travelled = distance_travelled + speed;};
    
// Public attributes declared here    
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
// private variable
    var distance_travelled = 0;
    var updateDistanceTravelled = function() {distance_travelled = distance_travelled + speed;};

    var self = this;


// Public methods here
    this.makeNoise = function() {console.log("ring! ring!");}
    this.move = function() { updateDistanceTravelled(); }
    this.checkMiles = function() { console.log(distance_travelled)};
}
var Bike = new  vehicleConstructor("Bike", 2, 1);
console.log(Bike);

var Sedan = new vehicleConstructor("Sedan",4,4);
Sedan.makeNoise = function () {console.log("Honk Honk! ");}
console.log(Sedan);

var Bus = new vehicleConstructor("Bus",8,12);
Bus.pickUpPassengers = function(pickup) {Bus.passengers = pickup + Bus.passengers;};

Bus.pickUpPassengers(4);
console.log(Bus);
