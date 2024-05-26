
//define a function with a rest parameter that accept diffreent item arguments 
function makeSandwich(...items:string[]){
    console.log("\nmaking a sandwish with the following item\n" );
    
    items.forEach(singleItem => console.log(singleItem));
    
    console.log("now enjoy  sandwich")
}

// call the function 3 time with diffrent no.of  arguments 

makeSandwich("Chicken","cheese","Mayo","Egg");

makeSandwich("bread", "butter");

makeSandwich("brown bread" , "cappsicom", "iceburg", "chicken")