// * THIS IS A MIND GRENADE 
//Write your code here

const {data} = require('./mymodule');
console.log('This is the only thing logging in this code index.js');

// ? THE GOTCHA IS THAT EVEN THOUGH YOU ONLY IMPORTED the DATA EXPORTED FROM 'mymodule.js'
// ? THE FUNCTION DEFINED IN THAT CODE WAS STILL CALLED. I. E DURING INPORT THE CODE INSIDE 'mymodule.js'
// ? RAN. THIS WAS BECAUSE OF THE 'MODULE WRAPPER FUNCTION'. NEED TO REMEMBER THIS BEHAVIOR.
