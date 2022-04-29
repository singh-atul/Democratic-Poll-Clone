const mongoose = require("mongoose");

const electionSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    organizer: {
      type: String,
      required: true,
    },
    status: {
      type:String,
      required:true
    },
    createdAt: {
        // I want to default to a new date
        type: Date,
        immutable: true,  // This will ensure the createdAt column is never updated but once in the start
        default: () => {
            return Date.now();
        }
    }
  });

module.exports = mongoose.model("Election", electionSchema);