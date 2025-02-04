const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete'); // tải npm install mongoose-delete

// Tạo lược đồ Course
const Course = new Schema(
    {
        name: { type: String, required: true },  // 🔹 Đảm bảo name không bị thiếu
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },  // 🔹 Đảm bảo videoId không bị thiếu
        level: { type: String },
        slug: { type: String, slug: "name", unique: true }  // 🔹 Đảm bảo slug không bị null
    },
    {
        timestamps: true,
    }
);

// Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethod: 'all'})

// Export 1 model Course
module.exports = mongoose.model('Course', Course);