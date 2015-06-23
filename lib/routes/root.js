"use strict";

module.exports.register = function(server, options, next){
  server.route({ 
    method: "GET", 
    path:"/",
    handler: function(request, reply){
      reply("Hapi Template!");
    }
  });
  next();
}

module.exports.register.attributes = {
  name:"root-routes",
  version:"0.0.1"
}