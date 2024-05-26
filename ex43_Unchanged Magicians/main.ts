// define the function to show magicinas name 

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// define the function to show magicinas great threough map () it will modifiy array
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);

}

//define an arry of magicians names
let magicians_name = ["Harry Poter", "Hamza", "usman"]

// making a copy of orignal arry through .slice () function
let copy_magician_names = magicians_name.slice();

//modify the copied arry to include " The great " with their names
let  copy_great_magicians = make_great(copy_magician_names);

//show  both arrys orignal and copied 

//original 
console.log("orignal Array\n")
show_magicians(magicians_name);

//copied 
console.log("\ncopied Array\n")
show_magicians(copy_great_magicians);
