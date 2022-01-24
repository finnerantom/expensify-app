// object destructuring
//
// const person = {
//     name: 'Tom',
//     age: 63,
//     location: {
//         city: 'Dublin',
//         temp: 68
//     }
// };
// const {name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;


// console.log(`${firstName} is ${age}.`);
// console.log(`It's ${temperature}°F in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// array destructuring
//
// const address = ['34 Farmhill Road', 'Goatstown', , 'D14P208'];
// const [, city, state = 'Dublin', ] = address;

// console.log(`You are in ${city} Co. ${state}`)
const item = ['Tea (hot)', '€1.50', '€1.75', '€2.00']
const [description, , medium, ] = item;

console.log(`A medium ${description} costs ${medium}`)