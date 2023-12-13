// code
let passport = {
    name: "Petr",
    surname: "Petrov",
};

let copy = {};
for (const key in passport) {
    copy[key] = passport[key];    
}
copy.name = "Ivan";
console.log(passport.name);
console.log(copy.name);