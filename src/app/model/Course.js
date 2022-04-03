const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    videoId: { type: String, maxlength: 600 },
    level: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Course', Course);
