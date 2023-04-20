const Mongoose = require('mongoose');
export {}
const categoryModel = new Mongoose.Schema({
    name: {
        type: String,
        required: [true, "Категорийн нэрийг оруулна уу"],
        unique: true
    }
});

module.exports = Mongoose.model('Category', categoryModel)