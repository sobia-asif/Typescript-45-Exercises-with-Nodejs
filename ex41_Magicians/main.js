// define a function to print each magician name from an arry
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an arry containing magicians name
var magician_name = ["harry Poter", "Hamza", "Usman"];
//call the function to print each magician name 
show_magicians(magician_name);
