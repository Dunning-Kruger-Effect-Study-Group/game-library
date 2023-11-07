/* global use, db */
// Select the echo-api database
use("game-library");

//Authentication

db.createCollection("user", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "User Object Validation",
      required: ["email", "password"],
      properties: {
        email: {
          bsonType: "string",
          description: "'email' must be a string and is required",
        },
        password: {
          bsonType: "binData",
          description: "'password' encrypted using bcrypt",
        },
      },
    },
  },
});

//Book collection
db.createCollection("game", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Book Object Validation",
      required: ["releaseDate","name"],
      properties: {
        coverArt: {
          bsonType: "string",
          description: "Cover Art",
        },
        name: {
          bsonType: "string",
          description: "Cover Art",
        },
        releaseDate: {
          bsonType: "date",
          description: "Cover Art",
        },
      },
    },
  },
});
// Insert a few documents into the sales collection.
db.getCollection("user").insertMany([
  {
    _id: ObjectId("652e9e72b5de5519e45346de"),
    email: "alreadyIn@use.com",
    password: BinData(
      0,
      "JDJhJDE1JEUvSmx0dG1kM3pyb0hCcDRyQkVWZXVrV2Yybll1RnptWEN4aDFoZ1M3SkZteUlpUXpPM3R1"
    ),
  },
  {
    _id: ObjectId("652e9f48b5de5519e45346df"),
    email: "login@test.com",
    password: BinData(
      0,
      "JDJhJDE1JGo2VTBlanpRMTZUV0l5VkVXb0VhbWVIMFFpRlFOajFETE5jcjMyZWhxV1lBd1FMa0lqcS9T"
    ),
  },
]);

// Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
