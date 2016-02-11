function fib() {
    if(previous === undefined){
    var previous = 0;
    var current = 1;
    console.log(previous);
    }
function nacci() {
    if(temp == undefined)
    {
        var temp = previous;
    }
    previous = current;
    current = current + temp;
//    nacci = fib + nacci;
//    fib = fib + nacci;
    console.log(current);
    
}

return nacci;
}

var fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
