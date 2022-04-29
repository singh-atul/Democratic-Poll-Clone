const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
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

module.exports = mongoose.model("User", userSchema);