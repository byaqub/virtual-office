const mongoose = require('mongoose');
const { Schema } = mongoose;
const EmailSchema = require('./Email');

const storySchema = new Schema({
  emails: [EmailSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('story', storySchema);