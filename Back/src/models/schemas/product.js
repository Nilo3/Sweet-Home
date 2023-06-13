const mongoose = require('mongoose');
const { Schema } = mongoose;

const product = new Schema({
    name: { type: String, required: true },
    id: { type: mongoose.Types.ObjectId },
    price: { type: Number, required: true, default: 0 },
    image: { type: String, require: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    stock: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
});

module.exports = {
    Product: mongoose.model('Product', product),
}
