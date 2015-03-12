module.exports = function() {
  var config = {
      "USER": "",
      "PASS": "",
      "HOST": "127.0.0.1",
      "PORT": "27017",
      "DATABASE" : "vc"
  };

  return "mongodb://" + config.USER + ":"+ config.PASS + "@"+ config.HOST + ":"+ config.PORT + "/"+ config.DATABASE;
};