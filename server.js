/*
NodeJs is a different version of javascript you could say, it is basically built on Javascript v8 engine
and adds several features to it on the top of existing features. 
For example : Capability of handling files, modularization using modules etc, capability to run http server etc.
event loop
Worker threads
It is written in C++


node provides several core modules. See most commonly used modules list below
 http ( to run HTTP server)
 https ( to run HTTP server with SSL)
 fs ( to work with files)
 os ( to work with operating system)
 path ( to work with file path)

 we are interested in http server

 It provides a global function 'require' through which we can import code from these modules
 To import a core module use : 'require('module-name')
 To import user defined module, use syntax : 'require('relative path or absolute path to the module')
 relative path example './module1' : it looks from the current folder of the file in which this code is present
 absolution path example '/module1' : it looks from the root folder of the project

 to Create a server use 'http.createServer( requestListener )': This returuns a server object
 requestListener takes two parameters, request and response. 
 We can make the server to listen at port 3000 using 'server.listen' function call. 
 You will notice that, the program would not return the cursor back to the terminal once it started. Becuase
 the listen function never returns the cursor to the parent file ( which invoked it), as javascript thread is busy
 in listening the request at the specified port. 
 Behind the scene it starts event-loop and other workers pool.
 
 / : it would return some greeting text
 /users : return some dummy users. 

 
Some file related code

 */



const http = require('http')
const requestListener = require('./module')
const server = http.createServer(requestListener);
server.listen(3000)
