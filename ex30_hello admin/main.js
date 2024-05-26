//creating array 
var userName = ["Faris", "Farzam", "Admin", "Ibrahim", " Ahmead"];
//using forEach loop on Arry
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
