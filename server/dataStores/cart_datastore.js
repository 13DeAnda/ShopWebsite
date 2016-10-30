var when = require('when');

//in case it's a temporary user it should be able to either store by uuid the car or be able to generate by increment an specific user id.
function addToCart (client, user, productData){
  return when.promise(function(resolve, reject){
    var queryFind = "SELECT * FROM Cart WHERE userId= " + user.id + " AND itemId = " + productData.itemId;    

    client.query(queryFind)
      .then(function(item){
        if(item.rows.length > 0 && (item.rows.quantity !== productData.quantity)){
          var queryUpdate = "UPDATE Cart SET quantity = "+ productData.quantity + " WHERE userId = " + user.id + " AND itemId = " + productData.itemId;
          client.query(queryUpdate);
        }
        else{
          var queryInsert = "INSERT INTO Cart Values("+ user.id + "," + productData.itemId + "," + productData.quantity + "," + productData.price + ",\'" + productData.title + "\',\'" + productData.src + "\')";
          return client.query(queryInsert);
        }
      }.bind(this))
      .then(function(newItem){
        resolve(newItem);
      }.bind(this))
      .catch(function(err){
        reject(err)
      })
  });
};

function getUserCart(client, userId){
  return when.promise(function(resolve, reject){
    var query = "SELECT * from Cart WHERE userId=" + userId;
    client.query(query)
    .then(function(items){
      resolve(items.rows);
    }.bind(this))
    .catch(function(err){
      reject(err)
    })
  });
};

function updateCart(client, userId, quantity, itemId){
  return when.promise(function(resolve, reject){
    var queryUpdate = "UPDATE CART SET quantity = "+ quantity + " WHERE userId = " + userId + " AND itemId = " + itemId;
    
    client.query(queryUpdate)
      .then(function(update){
        resolve();
      }.bind(this))
      .catch(function(err){
        reject(err)
      })
  });
};

function deleteItem(client, userId, itemId){
  return when.promise(function(resolve, reject){
    var queryUpdate = "DELETE FROM Cart WHERE userId = " + userId + " AND itemId = " + itemId;
    
    client.query(queryUpdate)
      .then(function(update){
        resolve();
      }.bind(this))
      .catch(function(err){
        reject(err)
      })
  });
};
module.exports = {
  addToCart : addToCart, 
  getUserCart: getUserCart,
  updateCart: updateCart,
  deleteItem: deleteItem
};