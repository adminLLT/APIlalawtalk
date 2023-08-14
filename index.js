const http = require('http')
const app = require('./app')
require('dotenv').config()
const server = http.createServer(app)
const port = process.env.API_PORT
server.listen(port,()=>{
    console.log(`server is running ${port}`)
}) 