const EventEmitter = require('events');
// * require('events') returns the EventEmitter class many objects in Node JS which raise events
// * for ex: HTTP, extend to this class to add listeners and emit events
// ? Lets create an instance of this EventEmitter class to use in our app
const myEmitter = new EventEmitter();

// ? Lets create an Event Listener for a random event before we emit it
myEmitter.on('RandomEvent', ()=>{
    console.log('The Random Event Was Fired, and I listened to it.');
})

// ? We can attach multiple listeners to an Event, and they will be called in order which we added them 
myEmitter.on('RandomEvent', ()=> {
    console.log('I am the Next Function to be executed for this Random Event.')
})

myEmitter.on('RandomEvent', ()=> {
    console.log('Finally, I am executed for this Random event.')
})

// ? One MUST BE CAREFUL, there is NO CHECK wether a function is already attached to an event,
// ? so we can attach the same function multiple times with the event and that same function will then be 
// ? called multiple times !!
myEmitter.on('RandomEvent', ()=>{
    console.log('The Random Event Was Fired, and I listened to it.');
})

// * When you console.log the Object this will show that 4 functions are present in the RandomEvent Array
// * i.e it has 4 Listeners attached which will be called in that order as in the array.
// console.log(myEmitter);

myEmitter.on('EventWithArgs', (you, can, give, any, number, of, arguments)=>{
    console.log(`${you} ${can} ${give} ${any} ${number} ${of} ${arguments}`);
})


// ? Now lets emit this 'RandomEvent' 
myEmitter.emit('RandomEvent');
myEmitter.emit('EventWithArgs', 1,2,3,4,5,6,7);