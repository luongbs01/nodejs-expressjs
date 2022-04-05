const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    videoId: { type: String, maxlength: 600 },
    level: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
