var _ = {
        map: function(arr,callback) {
             var ret_arr =[];
             for(key in arr)
             {
              ret_arr.push( callback(arr[key]));
             }
             console.log(ret_arr);
             return ret_arr;
             },
        reduce: function(arr, callback, seed ){
                for(key in arr)
                {
                    seed = callback(arr[key],seed);
                }                
                return seed;
                },
        find: function(arr,callback) {
              for(key in arr){
              if(callback(arr[key]){ 
                    return arr([key]);                      
              }
              }
              return false;
              },
        filter: function(arr,callback) {
                    var ret_arr = [];
                    for(key in arr)
                    {
                    if(callback(arr[key]))
                        {
                            ret_arr.push(arr[key]);
                        } 
                    }
               console.log(ret_arr);
                    return ret_arr; 
                },
        reject: function() { // code here}
        }
}
var sum = _.reduce([1,2,3],function(seed,num){return seed+num;},1); //7
var mappy = _.map([1,2,3],function(num) {return num * 4;});
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //should return [2, 4, 6] after you finish implementing the code above

