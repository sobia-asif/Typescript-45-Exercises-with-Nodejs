var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var worldTour = ["UAE", "Paris", "Turkey", "China", "Japan"];
console.log("Original Order:", worldTour);
//print the arry in alphabaetical order without modify the actual arry list 
console.log("Alphabetical Order:", __spreadArray([], worldTour, true).sort());
//show that the arry is still in ite orignal order 
console.log("still in Orignal Order:", worldTour);
//reverse order 
console.log("Reverse order:", __spreadArray([], worldTour, true).reverse());
//show that the arry is still in ite orignal order 
console.log("still in Orignal Order:", worldTour);
//change the Orignal array order now. 
console.log("Orignal Array Reverse", worldTour.reverse());
//print the array back to its orignal order
console.log("back to orignal order", worldTour.reverse());
// print the arry  to show that  its order has been changed in Alphabatical order now 
console.log("sorted in Alphabatical order", worldTour.sort());
// we have change again the orignal arry order , now in reverse order again 
console.log("orignal array reverse", worldTour.reverse());
