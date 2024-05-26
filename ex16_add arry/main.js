var guestList = ["Faris", "Farzam", "Minahal", "Ayan"];
var dontcome = guestList[0];
//name of guest dont come
console.log(dontcome, " cant come at dinner");
//add/remove value from guest list array
guestList.splice(0, 1, "Ayat");
//message print for bigger table
console.log("Good News! We have found a bigger Table for Dinner");
//adding a new guest at starting index of array 
guestList.unshift("Ibrahim");
//adding a new guest at ending index of array 
guestList.push("Dawood");
//get a middle index of array            
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest  to middle index of arry 
guestList.splice(middleIndex, 0, "Hina");
//print message of updated list
console.log("updated list of  our guest");
guestList.forEach(function (invit) { return console.log("salam ".concat(invit, " would you like to have a dinner with me ?")); });
