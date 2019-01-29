var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/crud")
            .then(conn => global.conn = conn.db("crud"))
            .catch(err => console.log(err))
 
function findAll(callback){  
    global.conn.collection("customers").find({}).toArray(callback);
}

function insert(customer, callback){
    global.conn.collection("customers").insert(customer, callback);
}

var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("customers").find(new ObjectId(id)).toArray(callback);
}

function updateOne(id, customer, callback){
    global.conn.collection("customers").update({_id:new ObjectId(id)}, customer, callback);
}

function deleteOne(id, callback){
    global.conn.collection("customers").deleteOne({_id: new ObjectId(id)}, callback);
}

module.exports = {findAll, insert, findOne, updateOne, deleteOne}
