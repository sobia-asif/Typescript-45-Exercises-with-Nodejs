//define a function with a rest parameter that accept diffreent item arguments 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwish with the following item\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nnow enjoy  sandwichn/");
}
// call the function 3 time with diffrent no.of  arguments 
makeSandwich("Chicken", "cheese", "Mayo", "Egg");
makeSandwich("bread", "butter");
makeSandwich("brown bread", "cappsicom", "iceburg", "chicken");
