// create function
function create_car(manufacture, model, ...options){

    //initialize a car object with manufature and model 
    let car  = {
        manufacture : manufacture, 
        model: model,
    };

    //add additional option to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim ()] = value.trim();
    })
    return car;
}

//call the function to create a car object 
let my_car = create_car("Toyota", "Corrolla", "color : black", "sunroof: true", "year: 2024");


//print the variable to ensure all the information is stored in the car object 
console.log(my_car);
