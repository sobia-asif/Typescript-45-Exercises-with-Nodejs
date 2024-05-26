let worldTour: string[] = ["UAE","Paris", "Turkey", "China" , "Japan" ];

console.log("Original Order:",worldTour );

//print the arry in alphabaetical order without modify the actual arry list 
console.log("Alphabetical Order:", [...worldTour].sort());

//show that the arry is still in its orignal order 
console.log("still in Orignal Order:", worldTour);

//reverse order 
console.log("Reverse order:", [...worldTour].reverse());

//show that the arry is still in its orignal order 
console.log("still in Orignal Order:", worldTour);

//change the Orignal array order now. 
console.log("Orignal Array Reverse",worldTour.reverse());

//print the array back to its orignal order
console.log("back to orignal order",worldTour.reverse());

// print the arry  to show that  its order has been changed in Alphabatical order now 
console.log("sorted in Alphabatical order", worldTour.sort());

// we have change again the orignal arry order , now in reverse order again 
console.log("orignal array reverse",worldTour.reverse());
