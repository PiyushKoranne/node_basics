
// console.log(module);

const greetHindi = (name) => {
    console.log(`Namaste ${name}. Kaise Ho Aap ?`);
}

const greetEnglish = (name) => {
    console.log(`Hello ${name}. How you livin ?`);
}

module.exports.greetHindi = greetHindi;
module.exports.greetEnglish = greetEnglish;

// console.log(module)