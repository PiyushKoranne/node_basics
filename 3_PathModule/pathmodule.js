const path = require('path');


// * There are various properties of the path module as seen below :
// ? path.basename() : this method returns the last portion of the path. For example:
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.basename('/Windows/Piyush/TVShows/Game Of Thrones'));
// * we can also remove file suffix by passing an additional suffix param in the basename method.
// console.log(path.basename(__filename, '.js')); // * returns file name without extension, 
                                               // * NOTE THAT this suffix is case sensitive.

// ? path.dirname() this method takes a path as input and returns a string i.e directory of the path
// console.log(path.dirname(__filename));                                               
// console.log(path.dirname('D:/Piyush/Secret/Movies/BlackAdam.mp4'));

// ? path.extname() this method takes a file name or  filepath and returns the extension of the file
// console.log(path.extname('D:/Piyush/Secret/Movies/BlackAdam.mp4')); // --> Returns .mp4

// ? path.join(path) this method takes segments of a path and joins them and returns a complete path
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'temple/piyush/go'));
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'temple/piyush/go', '..')); // --> Will come one directory back into piyusg
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'temple/piyush/go', '../..')); // --> WIll come two directories back into temple 

// ? path.normalize(path) this method takes a path and normalizez by resolving the ..s

//console.log(path.normalize('/windows/piyush/../koranne/movies/../../games'));

// * Every path is essentially an object with properties like dir, root, base, name, ext
// ? path.parse(path) takes a path string and returns a path object 
// console.log(path.parse('D:/Piyush/Secret/Movies/BlackAdam.mp4'))

// ? path.relative(from, to) takes a from path and a to path and returns the relative path from -> to

// console.log(path.relative('D:/Piyush/Secret/Movies', 'D:/Piyush/Secret/TVShows')); // --> ../TVShows

// ? path.resolve(path1, path2, path3,...) starts from the rightmost path and prepends left paths till an
// ? absolute path is created.

// console.log(path.resolve('/Piyush/Work', '/NodeJS/Practise'));
// console.log(path.resolve('/Piyush/Work', 'NodeJS/Practise'));

