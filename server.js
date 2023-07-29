const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require("./pcRamUsage");

http.createServer(( req, res) => {
  let url = req.url;

if(url === '/stats'){
  //write a response
  res.end(JSON.stringify(stats, null, 2)); //end the response
} else {
  res.end('<h1>Seja Bem Vindo</h1>');
}
}).listen(port, ()=> console.log(`Server is running in ${host}:${port}, ${stats}`) );