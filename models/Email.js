const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
  title: String,
  body: String,
  time: Number,
   responded: {type: Boolean, default: false}
});

mongoose.model('email', emailSchema);

module.exports = emailSchema;