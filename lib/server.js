"use strict";
var Path = require("path");
var Hapi     = require("hapi");
var server = module.exports = new Hapi.Server();

server.connection({
  host : process.env.HOST,
  port : process.env.PORT
});


server.views({
  engines:{
    jade: require("jade"),
  },
  path: Path.join(__dirname, "views")
});

server.ext("onRequest", function (request, reply) {
    console.log("Got request: " + request.path, request.query);
    return reply.continue();
});

server.route({ 
  method: "GET", 
  path:"/",
  handler: function(request, reply){
    reply("Hapi Test");
  }
});

server.start(function() {
  console.log("the server has started on host: " + server.info.host + " and port: " + server.info.port );
});