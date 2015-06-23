"use strict";

module.exports.register = function(server, options, next){
  server.register(
    [
      {register: require("./sample"), options: options},
      {register: require("./root"), options:options}
    ], function(err){
      if(err){
        return next(err);
      }
      next();
  });
};

module.exports.register.attributes = {
    name: "routes",
  version: "0.0.1"
};