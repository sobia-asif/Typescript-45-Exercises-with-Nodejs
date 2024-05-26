let current_users = ["faris", "farzam", "Ahmead", "Ibrahim"];

let new_users = ["Hamza", "faris", "Ayan", "farzam"]

// loop through new _ user to check avalibility 
new_users.forEach(new_one_user => {

   //making a condition for username already exist and save in our condition vriabe 
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase()=== new_one_user.toLowerCase())
     
    //print iffrent message using if-else statment
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken`)

     }else {
        console.log(`This Username  ${new_one_user} is avalible `)
     }
    })
