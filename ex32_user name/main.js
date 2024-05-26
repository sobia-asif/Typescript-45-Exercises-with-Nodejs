var current_users = ["faris", "farzam", "Ahmead", "Ibrahim"];
var new_users = ["Hamza", "faris", "Ayan", "farzam"];
// loop through new _ user to check avalibility 
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This Username  ".concat(new_one_user, " is avalible "));
    }
});
