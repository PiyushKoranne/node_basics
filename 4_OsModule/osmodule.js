const os = require('os');

// ? os.arch() returns the CPU architecture.
// console.log(os.arch())

// ? os.constants this property contains the Object of OS specific constants
// console.log(os.constants);

// ? os.cpus()
// console.log(os.cpus());

// ? os.freemem() this returns integer of free system memory in bytes
// console.log(os.freemem());

// ? os.homedir() this method  returns the path of the current user's home directory
// console.log(os.homedir())

// ? os.hostname() this method returns the host name of the OS 
// console.log(os.hostname()); 

// ? os.platform() this method returns the OS Platform
// console.log(os.platform());

// ? os.release() this method returns the OS as a string
// console.log(os.release());

// ? os.type() this method also returns the OS name
console.log(os.type());