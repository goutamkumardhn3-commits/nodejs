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
// const data = require('./data');
// const http = require('http');
// http.createServer((req, res)=> {
//     res.writeHead(200, { 'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data) );
//     res.end();
// }).listen(1500);

// console.log(process.argv[0]);

// const fs = require('fs');

// const input = process.argv;

// fs.writeFileSync(input[2], input[3]);k

// const fs = require('fs');

// const input = process.argv;

// if(input[2] == 'add') {
//     // fs.writeFileSync(input[3], input[4]);
//     fs.writeFileSync(input[3], input[4]);
// } else if(input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.log('Invalid input');
// }
 // commmand: node index.js remmove hello "goutam"

//  const fs = require('fs');
//  fs.writeFileSync('hello.txt', 'Hello World');

// const fs = require('fs');
// const path = require('path');
// const dirPath =  path.join(__dirname, 'files');
// console.log(dirPath);

// const fs = require('fs');
// const path = require('path');
// const dirPath =  path.join(__dirname, 'files');
// for(let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + '/hello' + i + 1 + '.txt', 'Hello World');
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, 'Hellow World');
// }

// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item) => {
//         console.log('==>> File name:', item);
//     })
// })

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// const filepath = `${dirPath}/goutam.txt`;
// fs.writeFileSync(filepath, 'Hello Goutam');
// fs.readFile(filepath, 'utf8', (err, item) =>{
//     console.log("==>> Content",item);
// });
// fs.appendFile(filepath, ' and the file name is Hello.txt', (err) => {
// if(!err) console.log('File is updated');
// });
// fs.rename(filepath, `${dirPath}/goutam1.txt`, (err)=> {
//     if(!err) console.log('File is renamed/Updated');
// })
// fs.unlinkSync(`${dirPath}/goutam1.txt`);

// console.log('started');
// setTimeout(() => {
//     console.log('2 second');
// }, 2000);
// setTimeout(() => {
//     console.log('0 second');
// }, 0); 
// setTimeout(() => {
//     console.log('3 second');
// }, 0); 
// console.log('finished');

// let a = 10;
// let b = 20;
// let mypromeise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(90);
//     }, 2000);
// });
// mypromeise.then((value) => {
//     b=value;
//     console.log('value:', a + b);
// })

// const express = require('express');
// const app = express();
// app.get('', (req, res)=> {
//     console.log('data:', req.query.name);
//     res.send(`<h1>Welcome ${req.query.name}</h1>`);
// });
// app.get('/about', (req, res) => {
//     res.send("<h1>about Page</h1>");
// });
// app.listen(9000);

// const express = require('express');
// const app = express();
// app.get("", (req, res)=>{
//     res.send(`<h1>Welcome to Home Page</h1>
//         <a href="/about">Go to About Page</a>
//     `);
// })
// app.get("/about", (req, res)=>{
//     res.send(`
//         <h1>Welcome to About Page</h1>
//         <input type="text" placeholder="Enter your name" value="${req.query.name || ''}" />
//         <button>Click Me</button>
//         <a href="/">Go to Home Page</a>        
//         `);
// })
// app.listen(9000);

const express = require('express');
const app = express();

const path = require('path');
const publicpath = path.join(__dirname, 'public');

app.use(express.static(publicpath));
app.listen(9000);