// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

let sum:number=0;
let maxLength:number=20
for(let i=1;i<=maxLength;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(`The sum of first ${maxLength} even numbers are : ${sum}`);

// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

let array:number[]=[10,21,22,23,25,56];
console.log("The even numbers in this array is");
for(let i=0;i<=array.length;i++){
    if(array[i]%2==0){
        console.log(array[i]);
    }
}

// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

let arr:number[]=[10,21,22,23,25,56];
console.log("Before any deletion",arr);
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]%2==0){
        arr.splice(i,1);
    }
}
console.log("After deletion",arr);

// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

let area = (r:number,p:number) => r*p;

let radius:number=2.3;
const pi:number=3.14;
console.log("The radius of circle is : ",area(radius,pi));

// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let list: number[] = [90, 61, 50, 49, 43, 33, 51];
console.log("Before removing failing grades ");
console.log(list);

for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] < 50) {
        list.splice(i, 1);
    }
}

console.log("After removing failing grades ");
console.log(list);

// - Write a program that uses a function to find the largest element in an array of numbers.

function element(a:number[]){
    let max=0;
    for(let i=0;i<=a.length-1;i++){
        for(let j=i;j<=a.length-1;j++)
        {
            if(a[j+1]<a[i])
            {
                let temp=a[i];
                a[i]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    max=a[a.length-1];
    console.log("The largest element in the array is ",max);

    
}

let arr1:number[]=[5,20,19,100,6,90,8];
element(arr1);