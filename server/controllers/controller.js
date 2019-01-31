const Product = require("../Models/Products");
const myKey = process.env.MY_KEY;
//function to get products from backend
module.exports = {
	getAllProducts: (req, res) => {
		Product.find({}).then(product => console.log(product));
	}
};
