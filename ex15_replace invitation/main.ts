let guestList = ["Faris", "Farzam", "Minahal", "Ayan"];

let dontcome = guestList [0];
console.log(dontcome," cant come at dinner" );

guestList.splice(0,1, "Ayat");

guestList.forEach(invit => console.log(`salam, ${invit} would you like to have a dinner with me? `));