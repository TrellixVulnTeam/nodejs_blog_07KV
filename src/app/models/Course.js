const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    img: { type: String },
    videoId: { type: String },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    slug: { type: String, slug: 'name', unique: true },
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt: true });

module.exports = mongoose.model('Course', Course);
