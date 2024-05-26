let apple = "apple";

//test for equility 

console.log("is apple is equal to apple");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple");
console.log(apple != "apple")

//test lower case funcation

//define variable 

let upperCaseApple= "APPLE";

console.log("\nis APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() == "apple");
          //   APPLE    =>   apple    =  apple    =true 

console.log("\nis Apple is not equal to apple after converting to lowercase ?");
console.log(upperCaseApple.toLowerCase() != "apple" )
               // APPLE     => apple  !=  apple = false

let ten = 10;
let twenty =20;
// numerical tested

//equql and not equql
console.log("\n is ten is equql to twenty");
console.log (ten == twenty)

console.log("\nis ten is not equql to twenty")
console.log(ten != twenty);

//greater or less then
console.log("\nis ten is greater than zero?");
console.log(10 > 0 ); 

console.log("\nis twenty is less than 10");
console.log(20 < 10);

//greater then equql to 
console.log("\nten is greater then or equql to 5");
console.log(10 >= 5);

//less then  or equql to 
console.log("\nis twenty is less then or equql to 10 " );
console.log(20 <= 10 ); 

// testing using "and  and " or "

console.log("\n twenty is not equql to 10 and twenty is greater than 10")
console.log(twenty != 10 && twenty > 10 );

console.log("\n twenty is greater than 50 or 20 is equql to 20");
console.log(20 > 50 || 20 == 20 );

//testing Array

let fruits= ["apple", "bannana" ,"Mango"];

//test wether an item is array 
console.log("\nis orange include in my fruits array ");
console.log(fruits.includes("Mango"));

//not include
console.log("\nis orange not  include in my fruits array ");
console.log(!fruits.includes("Mango"));

