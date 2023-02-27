// ? Make an object, create a different file, write the object into that file in JSON format.
// ? Read that file, convert the read JSON data back into a JS-Object. Print the clone object.


// Write Your Code Here
// const fs = require('fs');

// const person = {
//     name:'Piyush Koranne',
//     age:24,
//     favouriteDessert:'Gulab Jamun',
//     bestGame: 'Horizon - Forbidden West'
// }

// let clone;

// fs.writeFile('./json_data.txt', JSON.stringify(person), (err)=>{
//     if(err) throw err;
//     console.log('File Created. Data Written.');
//     fs.readFile('./json_data.txt','utf8',(err, data)=>{
//         if(err) throw err;
//         console.log('File Read.')
//         clone = JSON.parse(data);
//         console.log("Person:",person);
//         console.log("Clone:",clone);
//         console.log(clone.name, clone.favouriteDessert);
//     })
// })

