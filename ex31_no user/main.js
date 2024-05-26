var userName = ["faris", "Admin", "Farzam", "Ahmed", "Ibrahim"];
//remove all value from our array now our arry is empty 
userName = [];
// if statment for checking lenght of our array is empty?
if (userName.length === 0) {
    console.log("your array in empty we need to find some users!");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
