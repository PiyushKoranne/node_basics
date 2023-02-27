//Write Your Code here
const http = require('http');
const port = 8000;

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200, 'OKAY', {'Content-Type':'application/json'});
        res.end(JSON.stringify({name:'Piyush', age:'24', favouriteIcecream:'Chocolate'}));
    }
    else if(req.url === '/endpoint1'){
        res.writeHead(200, 'OKAY', {'Content-Type':'application/json','Access-Control-Allow-Origin':'http://127.0.0.1:5173'});
        res.write(JSON.stringify({ep1_data1:'Secret', ep1_data2:"Some Data", ep1_data3:'Some other Data'}));
        res.end();
    }
    else if(req.url === '/endpoint2'){
        res.writeHead(200, 'OKAY', {'Content-Type':'application/json'});
        res.write(JSON.stringify({ep2_data1:'EndPoint 2', ep1_data2:"Some Real Data", ep1_data3:'Some other Real Data'}));
        res.end();
    }
    else{
        res.writeHead('404','INVALID ENDPOINT',{'Content-Type':'text/html'});
        res.write('<h1>ERROR 404. Page Does Not Exist<h1>');
        res.end();
    }

})

server.listen(port, '127.0.0.1', ()=>{
    console.log(`Listening For Connections on PORT ${port}`)
})

