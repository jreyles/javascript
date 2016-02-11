
// Since alert is not available in node_js, I decided to use a function instead that calls the name
person = {name : 'Trey', distance_travelled: 0, say_name : function() {console.log(person.name)} , say_something : function(talk) {console.log(talk) }, 
    walk: function() { person.distance_travelled = person.distance_travelled + 3; console.log("Trey is walking");},
    run: function() { person.distance_travelled = person.distance_travelled + 10; console.log("Trey is running");} ,
    crawl: function() { person.distance_travelled = person.distance_travelled + 1; console.log("Trey is crawling"); } }

function personConstructor(name) 
{

    var obj = {
        name : name,
        distance_travelled : 0,
        say_name : function() {console.log(person.name)},
        say_something : function(talk) {console.log(talk)},
        walk: function() {obj.distance_travelled = obj.distance_travelled + 3; console.log(name + " is walking");},
        run: function() {obj.distance_travelled = obj.distance_travelled + 10; console.log(name + " is running");},
        crawl: function() {obj.distance_travelled = obj.distance_travelled + 1; console.log(name + " is crawling");} 
        }
    return obj;
}


function ninjaConstructor(name)
{
    var obj = {
        name : name,
        cohort : 'CodingDojo',
        belt : 'Yellow-Belt'
    }
    return obj;
}

console.log(personConstructor("test"));
console.log(ninjaConstructor("Happy"));
//sum = 0
function sum(x,y){
    var sum = 0;
    for(var x; x <= y; x++)
    {
        sum = sum + x + y
//    return x + y;
}
    return sum;
}

function min(array){
    var min = array[0];

    for(index in array)
    {
        if(array[index] < min)
        {
        min = array[index];
        }

    }
    return min;
}

function average(array){
    var sum = 0;
    for(index in array) {
        sum = sum + array[index];
    }

    return sum / array.length;

}
