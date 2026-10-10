// Infographic 10/15 - Create the Profile Model
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18 },
  photo: { type: String, required: true },
  bio: { type: String, default: '' },
  interests: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
}, {
  // adds "updatedAt" (used in the PUT response of Infographic 12)
  timestamps: { createdAt: false, updatedAt: true },
});

module.exports = mongoose.model('Profile', profileSchema);
