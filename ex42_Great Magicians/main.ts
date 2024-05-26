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


//call make_great function to modify magician name 
let great_magicians = make_great(magicians_name);

// call  show_magicians that show modified list of magician name 
 show_magicians(great_magicians);

 
