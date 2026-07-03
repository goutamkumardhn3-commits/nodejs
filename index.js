// console.log(10);
// let a = 5;
// let b = 10;
// let c = a + b;
// console.log(c);

// if(a == '5') {
//     console.log("a is equal to 5");
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// const app = require('./app');
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());

// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter((num) => {
//     return num > 2;
// });
// console.log(result);

// const fs =  require('fs');
// fs.writeFileSync('hello.txt', 'Hello World');
    // console.log('==>>', __dirname);
    // console.log('==>>', __filename);

    // const fs = require('fs').writeFileSync("code.txt", "Hello World");
    // const fs = require('fs').writeFileSync;
    // fs("code1.txt", "Hello World");

// const http = require('http');
// http.createServer((req, res) => {
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(1500);

// const http = require('http');
// const responseHandler = (req, res) => {
//     res.write('<h1>Hello World</h1>');
//     res.end();
//     // return <div>hello Goutam</div>;
// };
// http.createServer(responseHandler).listen(1500);

// const color = require('colors');
// console.log('Hello World'.green);
// console.log('Hello World'.red);
// console.log('Hello World  blue'.bgBlue);
const data = require('./data');
const http = require('http');
http.createServer((req, res)=> {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.write(JSON.stringify(data) );
    res.end();
}).listen(1500);
