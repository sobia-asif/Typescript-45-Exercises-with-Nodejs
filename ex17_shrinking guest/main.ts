let guestList = ["Faris", "Farzam", "Minahal", "Ayan"];

let dontcome = guestList [0];

//name of guest dont come
console.log(dontcome," cant come at dinner" );

//add/remove value from guest list array
guestList.splice(0,1, "Ayat");

//message print for bigger table
console.log("Good News! We have found a bigger Table for Dinner")

//adding a new guest at starting index of array 
guestList.unshift("Ibrahim"); 

//adding a new guest at ending index of array 
guestList.push("Dawood");

//get a middle index of array            
let middleIndex:number = Math.floor (guestList.length / 2);

//adding a new guest  to middle index of arry 
guestList.splice(middleIndex,0,"Hina")

//print message of updated list
console.log("updated list of  our guest");

guestList.forEach(invit => console.log(`salam ${invit} would you like to have a dinner with me ?`));

//inform that only two guest can be invited for dinner
console.log("unfortunatly, the new dinner table won't arrive on time, so I can only invite two Guest to dinner with me");

//while loop to remove  guest from the array  until two names remain

while(guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`sorry, ${removeGuest} you are not invite to dinner.`);
}

//print two remaing name 
console.log("Invitation to the last  2 guest ");

guestList.forEach(invit => console.log(`Luckly, ${invit}you are invited to dinner `));

//remove last two guest 
guestList.pop();
guestList.pop();

console.log ("Empty List", guestList);




