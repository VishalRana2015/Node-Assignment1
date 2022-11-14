const fs = require('fs')
const users = [ 'User1']
function requestListener(req, res){
    console.log(req.method, req.url)
    if ( req.url == '/'){
        console.log("executing / part")
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Greetings</title></head>')
        res.write('<body>')
        res.write('Greetings')
        res.write('<form method="POST" action="/create-user">Username: <input type="text" placeholder="username" name="username"/><button type="submit">Send</button> </form>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }
    if ( req.url == '/users'){
        console.log("executing /users part")
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Users</title></head>')
        res.write('<body>')
        for ( var i = 0; i < users.length; i++){
                res.write('<li>' +  users[i] +'</li>');
        }
        res.write('</body>')
        res.write('<html>')
        res.end()
    }
    if ( req.url == '/create-user'){
        console.log("executing /create-user part")
        console.log(req.method)
        body = [] 
        req.on('data', (chunk) =>{
            console.log('data event')
            body.push(chunk)
        })
        req.on('end', () => {
            console.log('end event')
            var parsedData = Buffer.concat(body).toString()
            console.log(parsedData)
            fs.writeFileSync('message.txt', parsedData)
            users.push(parsedData.split("=")[1])
            res.statusCode=302
            res.setHeader('location', '/users')
            res.end()
        })
    }
   
}
module.exports = requestListener
/*module.export = {
    requestListener: requestListener,
    someData : "Some Data"
}

*/