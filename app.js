const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//connection URL
const url = "mongodb://localhost:27017";

//DB Name
const dbName = "myproject";

//Create MongoDB Client
const client = new MongoClient(url);

//use connect method to connect to the server
client.connect((err) => {
  assert.equal(null, err);
  console.log("connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
