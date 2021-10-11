/*
 * Static web server for development
 */

/* jshint node: true */

const http = require('http')
const serveStatic = require('serve-static')
const finalHandler = require('finalhandler')

// Port number
const port = parseInt(process.env.npm_package_config_port, 10) || 3000

// Serve public folder
const serve = serveStatic('public')

// Create server
const server = http.createServer((req, res) => {
  serve(req, res, finalHandler(req, res))
})

// Listen
server.listen(port, () => {
  console.log('Listening to http://localhost:' + port)
})
