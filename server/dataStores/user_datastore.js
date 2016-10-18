
var when = require('when');
var uuid = require('node-uuid');
var bCrypt = require('bCrypt-nodejs');

//TODO!! need schema validating functions separate for testing purposes
function login(client, username, password){
  return when.promise(function(resolve, reject){
    var query = 'select * from Users WHERE username = \''+ username + "\'";     
    var loginData = {};
    client.query(query)
      .then(function(users){
        if(users.rows.length > 0){
          var user = users.rows[0];
          if(bCrypt.compareSync(password, user.password)){
            var newUuid = uuid.v4();
            loginData.uuid = newUuid;

            var queryUpdate = "UPDATE Users  SET uuid= \'" + newUuid + "\' WHERE username= \'" + username + "\'";
            return client.query(queryUpdate)            
          }
          else{
            console.log("Was user not found?");
            reject({status:401, data: {error: "invalid password"}});
          }   
        }
        else{

          reject({status:401, data:{error: "user not found"}});
        }
      }.bind(this))
      .then(function(updated){
        resolve({data: loginData});
  
      }.bind(this))
      .catch(function(err){
        reject(err)
      })
  });
};

function register(client, username, password){
  return when.promise(function(resolve, reject){
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var query = 'select * from Users WHERE username = \''+ username + "\'";
    var queryPost = 'INSERT INTO Users VALUES( \''+ username + '\', \'' + encryptedPassword + '\',\'' + newUuid+ '\')';
    var encryptedPassword = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);    
    var newUuid = uuid.v4();

    client.query(query)
      .then(function(users, err){
        if(err){
          reject({status: 400, data: {error: "database error"}}); 
        }
        else if(users.rows.length > 0 ){
          reject({status: 400, data: {error: "username already exist"}});   
        }

        return client.query(queryPost)
      }.bind(this))
      .then(function(newUser, err){
        if(err){
          reject({status: 400, data: {error: "database error"}}); 
        }
        else{
          resolve({uuid: newUuid});
        }
      }.bind(this))
      .catch(function(err){
        reject(err)
      })
  });
};

//HELPER FUNCTIONS
function getUserByUuid(client, uuid){
  return when.promise(function(resolve, reject){
    var query = "select * from Users WHERE uuid = \'" + uuid + "\'";

    client.query(query)
      .then(function(users){
        if(users.rows[0]){
          resolve(users.rows[0]);
        }

      }.bind(this))
      .catch(function(err){
        reject(err);
      }.bind(this))
  });
};



module.exports = {
  login: login,
  register: register
};
