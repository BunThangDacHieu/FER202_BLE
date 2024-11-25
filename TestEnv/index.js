//Khai báo thư viện http(core) để tạo ra một web server
const http = require("http");

//Khai báo các thông số trong webserver
const hostname = "localhost";
const port = 9999;

//Khai báo server web
const server = http.createServer((req, res) =>{
    //Thiết lập thông tin cho gói trả về / HttpResponse
    res.statusCode = 200;
    res.setHeader("Content-type", 'application/json; charset=UTF-8');
    res.end("<h1>Hello</h1>");
})
//Lắng nghe các req từ client gửi tới server/nodejs node server
server.listen(port, hostname, ()=>{
    console.log("Server running at: http://" + hostname + ":" + port);
})