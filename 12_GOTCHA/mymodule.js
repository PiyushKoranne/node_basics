//Write Code Here
const myObj = {
    name:'Piyush',
    age:24,
    icecream:'Belgian Chocolate'
}

function someFunc(){
    console.log(`I am someFunc function present inside ${__filename}`);
}
someFunc();

module.exports.data = myObj;