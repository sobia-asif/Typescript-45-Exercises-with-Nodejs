//creating array 
let userName =["Faris", "Farzam", "Admin", "Ibrahim", " Ahmead"];

//using forEach loop on Arry

userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneUser}, thank you for logging in again`)
    }
});