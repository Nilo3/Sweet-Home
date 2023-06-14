import mongoose from "mongoose";
const { Schema } = mongoose

const category = new Schema({
    name: { type: String, require: true, unique: true }
})

const Category = mongoose.model('Category', category)

export default Category