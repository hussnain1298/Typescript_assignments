//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function spliceMethod(arr:string[],arrIndex:number,value:string){
    arr.splice(arrIndex,0,value);
    return arr;
}

let array:string[]=["Ali","Khubaib","Hanan","Mesum"];
console.log("Before splice method",array);
spliceMethod(array,1,"Umer");
console.log("After splice method",array);


// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

function shoppingCart(arr:string[]){
    arr.splice(arr.length,0,"Chocolates","Snacks","Tissue");
    console.log("After add a items",arr);
    arr.splice(arr.length-5,1);
    console.log("After remove a items",arr);
    arr.splice(arr.length-1,1,"Toys");
    console.log("After update a items",arr);
}

let array1:string[]=["Biscuit","Shampoo","Oil"];
console.log(array1);
shoppingCart(array1);


// - Write a program that uses a while loop to print the first 25 integers.

let num:number=1;
console.log("The first 25 integers are");
while(num<=25)
{
    console.log(num);
    num++;
}


// - Write a program that uses a while loop to print the first 10 even numbers.

let num1:number=1;
console.log("The first 10 even numbers are");
while(num1<=10)
{
    if(num1%2==0)
    {
        console.log(num1);
    }
    num1++;
}


// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function factorial(val: number) {
    let fact: number = 1;
    let i: number;
    for (i = val; i > 1; i--) {
        fact = fact * i;
    }
    console.log(`The factorial of ${val} is`, fact);
}

let num3: number = 5;
factorial(num3);



// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let array2:number[]=[2,3,6,-2,5,9];
for(let j=0;j<=array2.length-1;j++)
{
    if(array2[j]<0)
    {
        array2.splice(j,1);
    }
}
console.log(array2);


// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

function sum(arr2:number[]):number{
    let k=0;
    let result=0;
    while(k<=arr2.length-1)
    {
        result+=arr2[k];
        k++;
    }
    return result;
}

let array5:number[]=[20,30,65,71];
let res=sum(array5);
console.log("The sum of array is : ",res);



// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.


let calcius:number[]=[25,40,30];
let i:number=0;
while(i<=calcius.length-1){
    let temp:number=calcius[i];
    let fahrenheit:number=(temp * 9/5) +32;
    calcius[i]=fahrenheit;
    i++;
}
console.log("Converted Temp of array is : ",calcius);








