"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mongoose = require('mongoose');
var categoryModel = new Mongoose.Schema({
    name: {
        type: String,
        required: [true, "Категорийн нэрийг оруулна уу"],
        unique: true
    }
});
module.exports = Mongoose.model('Category', categoryModel);
