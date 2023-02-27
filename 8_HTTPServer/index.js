const http = require('http');
const url = require('url');
const {data} = require('./data');
const decoder = require('string-decoder').StringDecoder; // Correct ??? 

const port = 8000;

const server = http.createServer((req, res)=>{    
    let buffer = '';
    const reqUrl = new URL(req.url, `http://${req.headers.host}`);
    res.writeHead(200, 'OKAY', {'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'});
    req.on('data', (chunk)=>{
        buffer += querystring.decode(chunk);
    })
    req.on('end', ()=>{

    })

    reqUrl.searchParams.forEach((val, key, searchParams)=>{
        if(key === 'name'){
            data.forEach((item)=>{
                if(item.name.toLocaleLowerCase().includes(val.toLocaleLowerCase())){
                    res.write(JSON.stringify(item) + '\n\n');
                }
            })
        }
    });

    res.write(reqUrl + '\n\n');
    res.end('End of Response');
});

server.listen(port, ()=>{
    console.log(`Listening on Port ${port}`);
})