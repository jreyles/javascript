console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
      first_variable = "Not anymore!!!";
        console.log(first_variable)
}
console.log(first_variable);
                           // Problem 2
var food = "Chicken";
function eat() {
                              food = "half-chicken";
                                console.log(food);
                                  var food = "gone";       // NOTE: I'M TRYING TO TRICK YOU HERE!!!!
             }
                 eat();
               console.log(food);
                                                             // Problem 3
var newt = "NEW!";
                                                          function lastFunc() {
                                                               newt = "old";
                                                               }
                                                               console.log(newt);
