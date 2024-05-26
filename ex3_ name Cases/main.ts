let personName = "Mohammad Faris";
//lowercase
console.log(personName.toLowerCase());
//upper case
console.log(personName.toUpperCase());
// title case
console.log(personName.replace(/\b\w/g, (mid) => mid.toUpperCase()));

