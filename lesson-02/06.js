// code
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let clone = structuredClone(passportWithAddress);
clone.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(clone.address.city);