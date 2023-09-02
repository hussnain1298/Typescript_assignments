"use strict";
//QUESTION-1
var totalMarks = 1100;
var obtainedMarks = 923;
var result = (obtainedMarks / totalMarks) * 100;
console.log("The percentage is", result);
//QUESTION-2
var price = 50;
if (price > 100) {
    console.log("You get 10% discount");
}
else {
    console.log("You get 5% discount");
}
//QUESTION-3
var age = 21;
if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
//QUESTION-4
var temperature = 10;
if (temperature <= 15) {
    console.log("Wear Warm clothes");
}
else {
    console.log("No need to wear warm clothes");
}
//QUESTION-5
var num = 10;
if (num % 3 == 0) {
    if (num % 5 == 0) {
        console.log(`${num} is divisble by both`);
    }
    else {
        console.log(`${num} is divisble by 3`);
    }
}
else if (num % 5 == 0) {
    console.log(`${num} is divisble by 5`);
}
else {
    console.log(`${num} is not divisble by both`);
}
//QUESTION-6
var year = 2023;
if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}
//QUESTION-7
var dayNum = 2;
if (dayNum >= 1 && dayNum <= 7) {
    if (dayNum == 1) {
        console.log("Monday");
    }
    else if (dayNum == 2) {
        console.log("Tuesday");
    }
    else if (dayNum == 3) {
        console.log("Wednesday");
    }
    else if (dayNum == 4) {
        console.log("Thursday");
    }
    else if (dayNum == 5) {
        console.log("Friday");
    }
    else if (dayNum == 6) {
        console.log("Saturday");
    }
    else {
        console.log("Sunday");
    }
}
else {
    console.log("Invalid input enter a number between (1-7)");
}
//QUESTION-8
var units = 272;
var perUnitPrice = 21.88;
var billAmount = units * perUnitPrice;
var taxper = 0;
if (units > 500) {
    taxper = 25;
}
else if (units > 200) {
    taxper = 15;
}
else if (units > 100) {
    taxper = 10;
}
else {
    taxper = 0;
}
var taxAmount = (taxper / 100) * billAmount;
var bill = billAmount + taxAmount;
console.log(`Units consumed: ${units}`);
console.log(`Tax percent: ${taxper}%`);
console.log(`Tax amount: ${taxAmount}`);
console.log(`Total bill amount: ${bill}`);
//QUESTION-9
var temperature = 26;
var fahrenheit = 0;
var calcius = 0;
// Converting calcius To fahrenheit
fahrenheit = (temperature * 9 / 5) + 32;
console.log(`Temperature in fahrenheit is ${fahrenheit} F`);
// Converting fahreinheit to calcius
calcius = (temperature - 32) * 5 / 9;
console.log(`Temperature in calcius is ${calcius} C`);
//QUESTION-10
var totalDays = 48;
if (totalDays >= 0) {
    var weeks = Math.floor(totalDays / 7);
    var remainingDays = totalDays % 7;
    console.log(`${totalDays} days = ${weeks} weeks and ${remainingDays} days`);
}
else {
    console.log("Invalid input. Please enter a non-negative number of days.");
}
