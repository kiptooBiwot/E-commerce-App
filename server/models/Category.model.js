const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  type: {type: String, required: true, unique: true}
});

module.exports = model("Category", CategorySchema);
