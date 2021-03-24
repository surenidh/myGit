var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url , function(err,db){
    if(err){
        console.log(err);
    }
    else{
        console.log("created" , url);
    }
});