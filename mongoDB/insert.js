var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/friuts";

mongodb.MongoClient.connect(url ,function(err, db){
    if(err){
        console.log(err);
    }else{
        console.log("Conneted to : " , url);

       var collection = db.collection('apples');

       var doc1 = {name:'red apples',color:'red'};
       var doc2 = {name:'green apples',color:'green'};

      
       collection.insert([doc1,doc2],function(err,result){
           if(err){
               console.log(err);
           }else{
               console.log("%d doc inserted :",result.insertedCount);
           }
       });
        db.close();
    }
});