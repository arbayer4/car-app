const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    password_digest: { type: String, required: true },
    // cars: [{type: Schema.Types.ObjectId, ref: 'Car' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
