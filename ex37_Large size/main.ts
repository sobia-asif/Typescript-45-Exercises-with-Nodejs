//making a function 
function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage}print on shirt`)
}

// calling function with by default values
make_shirt()

// calling funcation now with meium size and defult message 
make_shirt("medium") 

// calling a funtion now with small size and diff print message 
make_shirt("small", "I love Java Script" )