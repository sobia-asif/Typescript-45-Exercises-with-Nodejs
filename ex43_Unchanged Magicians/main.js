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
// making a copy of orignal arry through .slice () function
var copy_magician_names = magicians_name.slice();
//modify the copied arry to include " The great " with their names
var copy_great_magicians = make_great(copy_magician_names);
//show  both arrys orignal and copied 
//original 
console.log("orignal Array\n");
show_magicians(magicians_name);
//copied 
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
