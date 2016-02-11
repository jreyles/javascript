//function vehicleConstructor(name, wheels, passengers,speed){ 
// Public attributes declared here    
//    this.name = name;
//    this.wheels = wheels;
  //  this.passengers = passengers;
    //this.speed = speed;
    //this.distance_travelled = 0;i
    //var updateDistanceTravelled = function() {distance_travelled = distance_travelled + speed;};
    //var self = this;
// Public methods here
//    this.makeNoise = function() {console.log("ring! ring!");}
  //  this.move = function() { updateDistanceTravelled(); }
    //this.checkMiles = function() { console.log(distance_travelled)};}

var vehicleConstructor = function vehicleConstructor(name,wheels,passengers,speed) {
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.distance_travelled = 0;

    this.vin = function() {
        var world_id = "5YJ"; // tesla
        var vehicle_attrib = "GADM9"  + Math.floor(Math.random() * 10);
        var model_plant = Math.floor(Math.random() * 100);
        var sequential_num = Math.floor(Math.random() * 1000000);
        //= Math.floor(Math.random() * 10) ; 
        return world_id + vehicle_attrib + model_plant  + sequential_num;    
    }

}

vehicleConstructor.prototype.makeNoise = function() 
{
    console.log("ring! ring!");
}

vehicleConstructor.prototype.move = function() {
    console.log(this.name + " is moving.");
    this.distance_travelled += this.speed;
    return this;
}

vehicleConstructor.prototype.checkMiles = function()
{
    console.log(this.distance_travelled);
}
vehicleConstructor.prototype.checkvin = function() {
    
    console.log(this.vin());
//    return this;
}


var Bike = new vehicleConstructor("Bike", 2, 1,10);
Bike.move().move().checkvin();
console.log(Bike);
console.log(Bike.vin());


var Sedan = new vehicleConstructor("Sedan",4,4,8);
Sedan.makeNoise = function () {console.log("Honk Honk! ");}
var Bus = new vehicleConstructor("Bus",8,12,4);

//Bus.

console.log(Bus);
