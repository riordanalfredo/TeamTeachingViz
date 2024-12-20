/**
 * This module exports a function that can be used for connecting to the database.
 */
const mongoose = require("mongoose");
const logger = require("winston");
require("dotenv").config(); // Configure $ATLAS_URI and other environment variables in .env file

const CONNECTION_URI = process.env.ATLAS_URI;
const connectDb = async (app) => {
  try {
    await mongoose.connect(
      CONNECTION_URI,
      {
        useNewUrlParser: true,
      },
      (err) => {
        if (err) {
          return console.log(err);
        }
      }
    );
    logger.info("Successfully connected to Atlas.");
    return mongoose;
  } catch (err) {
    logger.error("Failed. Connection to Atlas was unsuccessful");
    logger.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;
