const fs = require('fs')    // ! This is CJS way of importing the module.
// import * as fs from 'fs' // ! This is the ESM way of importing the module.

// ? fs.writeFileSync(fileName, Data) this method creates/opens a specified file and adds the data to it 
// fs.writeFileSync('./testfs.txt', 'This file was created using the writeFileSync method in fs Module.');
// fs.writeFileSync('./piyush.js', 'console.log("Piyush Is The BEST")')
// fs.writeFileSync('./piyush.js', 'console.log("Piyush Is The VERY BEST")') // --> Overwrites the prev Content
// fs.appendFile('./piyush.js', ';console.log("Piyush Is The VERY BEST")', (err)=>{
//     if(err) throw err;
//     console.log('File Was Appended Successfully.')
// })

// ? We can also read the contents of a file 

// fs.writeFile('./data.js', 'const arr=[{name:"Piyush", age:"24"},{name:"Dinesh", age:"54"},{name:"Pooja", age:"30"}]', ()=>{
//     console.log("File Created. Data Written.")
// })

// const {data} = require('./data'); // ! RELATED TO THE BULLSHIT BELOW

// fs.readFile('./data.js', 'utf8', (err, data)=> {
//     if(err) throw err;
//     data?.forEach(item=>console.log(`My name is ${item.name} and I am ${item.age} years old.`)) // ! THIS IS A BUNCH OF BULLSHIT, YOU KNOW WHY.
//     console.log('Data:',data);
// })

// * NODE JS contains an additional data type called Buffer. This is not available in the Browser's JS
// * This is mainly used to store binary data when reading from file or recieving data packets over the network.

// ? We can also rename the file

// fs.writeFile('./toberenamed.txt', 'The name of this file was renamed', (err)=> {
//     if(err) throw err;
//     console.log("File was Created");
// })

// fs.rename('./toberenamed.txt', './renamed.txt', (err)=>{
//     if(err) throw err;
//     console.log('File Was Renamed Successfully.')
// })

// ? Challenge :  Create a directory , in it create a file and add data to it, then read that data, and delete 
// ?              the file and the directory            

// * Please Note that we have used Synchronous operations for making directory, writing and appending
// * to the file. (BUT HOW TO DO THIS ASYNCHRONOUSLY ???)
// fs.mkdirSync('./myDir');
// fs.writeFileSync('./myDir/someData.txt', "This Is just some random file.");
// fs.appendFileSync('./myDir/someData.txt',' This Data was appended at the end of this file.')

// fs.readFile('./myDir/someData.txt', 'utf-8',(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.rm('./myDir',{recursive:true}, (err)=>{
//     if(err) throw err;
//     console.log('\nDirectory Removed.');
// })

// * DOING THE ABOVE IN ASYNC WAY :

fs.mkdir('./test1',(err)=>{
    if(err) throw err;
    console.log('Directory created');
    fs.writeFile('./test1/myFile.txt', 'This Test File was created asynchronously using fs.writeFile().',(err)=>{
        if(err) throw err;
        console.log('File Created')
        fs.appendFile('./test1/myFile.txt', ' This is the Appended Part of this file.',(err)=>{
            if(err) throw err;
            console.log('Data was appended to the file successfully.')
            fs.rename('./test1/myFile.txt', './test1/myTestFile.txt', (err)=>{
                if(err) throw err;
                console.log('File was Renamed.')
            })
        })
    })
})

