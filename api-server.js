var http = require('http')
var api = require('./api')

http.createServer((req, res) => {
  api(req, res, ()=>{res.end()})
}).listen(3000)
console.log('api-server listening on 3000')