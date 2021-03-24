var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/mydb";

mongodb.connect(url ,function(err , db){
    if(err){
        console.log(err);
    }
    else{
        console.log("Conneted To Host : " + url);
        db.close();
    }
});