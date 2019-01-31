const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creates a procutcs schema to store our products
const ProductsSchema = new Schema({
	userID: {
		type: String,
		ref: "product"
	},
	product: {
		name: String,
		description: String,
		price: Number,
		images: Array,
		category: String,
		quantity: Number
	}
});

module.exports = Product = mongoose.model("product", ProductsSchema);
