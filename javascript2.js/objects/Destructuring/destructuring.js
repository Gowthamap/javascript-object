
// let a = {
//     name : {
//         firstName : "Arun",
//         lastName : "Akhil"
//     },
//     age : 14
    
// }

// let {name: {firstName:fName, lastName:lName},age="value"} = a

// console.log(fName);
// console.log(lName);
// console.log(age);



// const arr = [1,2,3,54,57,987];
// const [x,b,c,...remaining] = arr;

// console.log(x);
// console.log(b)
// console.log(c);
// console.log(remaining);
// console.log(arr);
// arr[0] = 5;
// arr[1] = 9;
// console.log(arr);




// const alphabet = ["A", "B", "C", "D", "E", "F"]
// const numbers = ["1", "2", "3", "4", "5", "6"]

// const [a,, c, ...rest] = alphabet;

// const newArray = alphabet.concat(numbers)

// console.log(newArray);



// function sumAndMultiply(a,b) {
//     return [a+b, a*b, a/b]
// }

// const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3)

// console.log(sum);
// console.log(multiply);
// console.log(division);




const personOne = {
    name : "Kyle",
    age : 24,
    favoriteFood: "Rice",
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

function printUser({ name, age, favoriteFood = 'Watermelon' }) {
    console.log(`Name is: ${name}, Age is ${age}, Food is ${favoriteFood}`);
}

printUser(personOne)
