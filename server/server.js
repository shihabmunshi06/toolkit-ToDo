const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoConnect, getDb } = require("./util/mongo");

const app = express();
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const uri = 'mongodb+srv://madmin:madmin@cluster0.ndpfr.mongodb.net/mongoose?retryWrites=true&w=majority';
let database;

app.post("/", async (req, res) => {
    const response = await database.collection("todos").insertOne(req.body)
    res.send(response)
})

app.get("/", async (req, res) => {
    const response = await database.collection("todos").find().toArray()
    res.send(response)
})

const serverStart = function () {
    app.listen("3001", () => console.log("server started"));
    database = getDb()
}

mongoConnect(serverStart)