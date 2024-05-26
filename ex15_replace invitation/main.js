var guestList = ["Faris", "Farzam", "Minahal", "Ayan"];
var dontcome = guestList[0];
console.log(dontcome, " cant come at dinner");
guestList.splice(0, 1, "Ayat");
guestList.forEach(function (invit) { return console.log("salam, ".concat(invit, " would you like to have a dinner with me? ")); });
