

x = [3,5,'Dojo','rocks','Michael','Sensei'];

for ( index in x) {
console.log(x[index]);
}

x.push(100);
new_array = [5,3,10];

x.push(new_array);

console.log(x);


for ( var i = 0; i <= 500; i++)
{
    if(i === 500){
    console.log(i);
    }


}

array_2 = [1,5,90,25,-3,0];
array_2_min = array_2[0];
for(index in array_2)
{
    if(array_2[index] < array_2_min)
    {
    array_2_min = array_2[index];
    }
}
console.log(array_2_min);

function average(array) 
{
    var sum = 0;
    for(index in array)
    {
        sum = array[index] + sum;
    }


    return sum / array.length;

}

console.log(average(array_2));

