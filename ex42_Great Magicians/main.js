// define the function to show magicinas name 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define the function to show magicinas great threough map () it will modifiy array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an arry of magicians names
var magicians_name = ["Harry Poter", "Hamza", "usman"];
//call make_great function to modify magician name 
var great_magicians = make_great(magicians_name);
// call  show_magicians that show modified list of magician name 
show_magicians(great_magicians);
