"use strict";

module.exports.register = function(server,options,next){
  server.route([
    {
      method:"GET",
      path:"/sample",
      handler:function(request,reply){
        reply("Sample Route!")
      }
    }
  ]);
  next();
};

module.exports.register.attributes = {
  name: "sample-route",
  version: "0.0.1"
};