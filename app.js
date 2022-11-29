const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url=== '/'){
res.write("Hallo das ist die Startseite!")
res.end()
}
else if (req.url === '/impressum'){
res.write("Hallo das ist die Impressum Seite")
res.end()
}

res.end(`<h2> Uups </h2>`)
})

server.listen(5000)