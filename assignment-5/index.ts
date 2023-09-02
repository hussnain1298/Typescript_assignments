// Write a program that uses filter to remove all negative numbers from an array of numbers

let num:number[]=[2,3,6,-9,9,-11];

let updated=num.filter((val:number)=>{
    if(val>0)
    {
        return true;
    }
});
console.log(updated);



// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

let array:number[]=[1, 2, 3, 4, 5];

let updatedArray=array.map((value)=> value*2);
console.log(updatedArray);


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

let fruits:string[]=["apple", "banana", "cherry", "date", "grape"];

let newArray=fruits.filter((fruit)=>{
    if(fruit.length>5)
    {
        return true;
    }
});
console.log(newArray);


// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

let numbers:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr1=numbers.filter((num)=> num%2===0).map((val)=>val*val);

console.log(arr1);



// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

let calsius:number[]=[0, 10, 20, 30, 40];

let fahrenheit=calsius.map((temp)=> (temp * 9/5)+32);
console.log(fahrenheit);


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

let numb:number[]=[3, 6, 9, 12, 15, 18];

let newNum=numb.filter((value)=>value%2!=0).map((val)=>val+val );

console.log(newNum);


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

let names:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name)=>{
    console.log(`${name}!`);
});