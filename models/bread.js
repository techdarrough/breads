// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

// Schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "http://placehold.it/500x500.png" },
  baker: {
    type: Schema.Types.ObjectID,
    ref: "Baker",
  },
});

// helper methods
breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${
    this.baker.name
  }, who has been with us since ${this.baker.startDate.getFullYear()}`;
};

// Model
const Bread = mongoose.model("Bread", breadSchema);

// Exports
module.exports = Bread;