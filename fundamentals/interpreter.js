console.log(hello);
var hello = "interesting";
function example() {
      var hello = "hi!"
            console.log(hello)
}
example();
console.log(hello)
          // Example problem 2
                                      // rearranged code with output predictions
                                      var hello;                 // var hello declaration floats to the top
                                      console.log(hello);        // this will print undefined
                                      hello = "interesting";     // assignment stays where it is
                                      function example() {       // function is like a cage
                                        var hello;               // variable declaration floats to the top of the cage
                                          hello = "hi";            // notice that we split up the declaration and assignment
                                          console.log(hello)       // this will print "hi"
                                            }
                                            example();                 // this actually runs the function
                                            console.log(hello);  
