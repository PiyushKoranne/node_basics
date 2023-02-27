// ! To Use NPM in this Directory, we first initialized NPM in this directory by using : npm init

// !----------------------IMPORTANT---------------------
// * This chalk package of NPM is an ES Module. But By defualt we write commonJS in Node JS 
// * This is why require('chalk') gives an error ==> Required an ES Module
// * To fix this, we just told Node JS that this is a ESM project by including type : 'module' in the 
// * package.json file. So all the code we will now write in this Project will be modern JS i.e ESM
// * instead of CommonJS

// const chalk = require('chalk');
import chalk from "chalk";
import validator from "validator";

// console.log(chalk.green('Hello NPM'));
// console.log(chalk.hex('#FFFBC1')('Hello NPM'));
// console.log(chalk.yellow.bgHex('#7743DB')('Hello NPM'));
// console.log(chalk.black.bgCyanBright('Hello NPM'));
// console.log(chalk.red.bgWhite.italic.underline('Hello NPM'));
// console.log(chalk.black.bgYellow.bold.underline('Hello NPM'));


// console.log(validator.isEmail('piyushkoranee@gmail.com'));

const email1 = 'dungeon_master@hotmail.com';
const email2 = 'MaachliJalKiRaaniHai';
const theme = validator.isEmail(email2) ? chalk.bgGreen : chalk.bgRed;
const value = validator.isEmail(email2) ? 'True' : 'False'

console.log(theme(value));
