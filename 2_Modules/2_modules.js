
// const { greetEnglish, greetHindi } = require('./greet');

// var myName = 'Piyush';

// console.log(myName);
// * The Node Js Environment automatically adds 'global' during code execution so we dont have to 
// * wrtie global.console.log or global.setTimeout. We can write them directly.
// global.console.log(myName);

// * the variable declared here are not part of the global object
// * i.e if i try to access the variable myName, in gobal object, I will get undefined.
// console.log(global.myName);
// * This happens because Node JS is modularized. This means that the variables and functions
// * declared in this paticular file are only accessible here, in this file's module

// console.log(module)
// module.exports = myName;
// console.log(module)

// * This way we can export functions and variables from one module to another.

// * Now lets import our own module called greet.js
// const greetModule = require('./greet');
// console.log('===================================')
// console.log(greetModule); // * This require essentially gives us an object which contains everything that 
                          // * was exported from  that module
// greetModule.greetEnglish(myName)                        
// greetModule.greetHindi(myName)  

// * Sometimes when we want to export just one thing, we override the exports key, to be that thing 
// * instead of being an object.

// !! VERY IMPORTANT
// * whenever we create a module(file), NOde JS does not execute its contents directly.
// * Instead it creates a 'MODULE WRAPPER FUNCTION' that is an IIFE.
// * This function contains args = exports, require, module, __filename, __dirname 
// * Thats why we can use exports directly sometimes instead of Module.exports
// * Also NOTE THAT require is NOT GLOBAL. 
// * the args of the MODULE WRAPPER FUNCTION are accessed below 

// console.log('The Arguments of the Module Wrapper Function Are :');
// console.log('Exports',exports);
// console.log('\n\n');
// console.log('Require',require);
// console.log('\n\n');
// console.log('Module',module);
// console.log('\n\n');
// console.log('__filename',__filename);
// console.log('\n\n');
// console.log('__dirname',__dirname);

