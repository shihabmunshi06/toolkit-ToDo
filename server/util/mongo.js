const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://madmin:madmin@cluster0.ndpfr.mongodb.net/?retryWrites=true&w=majority"

let db;
const mongoConnect = async callBack => {
    try {
        const mongo = await MongoClient.connect(uri);
        console.log("database connected");
        db = mongo.db('react-database');
        callBack()

    } catch (err) {
        console.log(err)
    }
}

const getDb = () => {
    if (db) {
        return db
    }
    throw "No database found"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;